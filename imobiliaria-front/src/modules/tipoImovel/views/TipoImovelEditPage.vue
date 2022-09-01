<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <imobiliaria-header v-if="isEditing">
        Editar Tipo Imóvel
      </imobiliaria-header>
      <imobiliaria-header v-else>
        Criar Tipo Imóvel
      </imobiliaria-header>
      <imobiliaria-tipo-imovel-edit-inputs @save="saveTipoImovel" />
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { TIPOIMOVEL_ERRORS } from '@/modules/tipoImovel/tipoImovel.constants';
// eslint-disable-next-line import/no-cycle
import { goToOpenTipoImovel, goToTipoImovelNotFound } from '@/modules/tipoImovel/tipoImovel.routes';
import { saveTipoImovel, getTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';

import ImobiliariaTipoImovelEditInputs from '@/modules/tipoImovel/components/TipoImovelEditInputs.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaTipoImovelEditPage',
  components: {
    ImobiliariaTipoImovelEditInputs,
    ImobiliariaSingleContentLayout,
  },
  provide() {
    const tipoImovelEditVm = {};
    Object.defineProperty(tipoImovelEditVm, 'tipoImovel', {
      get: () => this.tipoImovel,
    });
    return { tipoImovelEditVm };
  },
  data() {
    return {
      tipoImovel: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.tipoImovel?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchTipoImovel();
    } else {
      this.tipoImovel = {};
    }
  },
  methods: {
    fetchTipoImovel() {
      getTipoImovel(this.id)
        .then(data => {
          this.tipoImovel = data.data;
        })
        .catch(err => {
          this.tipoImovel = null;
          if (err) {
            goToTipoImovelNotFound(this.$router);
          } else if ((err.response.data.errors === TIPOIMOVEL_ERRORS[err.response.status] && err.response.status === 404)) {
            goToTipoImovelNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o tipoImovel');
          }
        });
    },
    saveTipoImovel() {
      saveTipoImovel(this.tipoImovel)
        .then(data => {
          goToOpenTipoImovel(this.$router, data || this.tipoImovel);
        })
        .catch(() => toastError('Erro ao salvar o tipoImovel'));
    },
  },
};
</script>
