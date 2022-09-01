<template>
  <div>
    <imobiliaria-form v-if="imovelEditVm.imovel" :submit="save">
      <div class="form-field mt-4">
        <imobiliaria-input
          v-model="imovelEditVm.imovel.titulo"
          label="Título*"
          name="titulo"
          type="text"
          rules="required|min:2"
          placeholder="Título" />
      </div>
      <div class="form-field mt-4">
        <imobiliaria-tipo-imovel-select
          ref="tipoImovelSelect"
          @on-change="onTipoImovelChange" />
      </div>
      <div class="form-field">
        <imobiliaria-textarea
          v-model="imovelEditVm.imovel.descricao"
          label="Descrição*"
          name="descricao"
          type="text"
          rules="required"
          placeholder="Descrição" />
      </div>
      <div class="form-field">
        <imobiliaria-input
          v-model="imovelEditVm.imovel.valor"
          label="Valor*"
          name="valor"
          type="text"
          rules="required"
          placeholder="Valor" />
      </div>

      <div class="mt-4 mb-3 d--flex justify-content-end">
        <imobiliaria-button
          class="btn btn-secondary"
          width="110"
          size="sm"
          @click="goHistoryBack()">
          Cancelar
        </imobiliaria-button>
        <imobiliaria-button
          native-type="submit"
          class="btn btn-success ms-2"
          width="110"
          size="sm">
          <a v-if="imovelEditVm.imovel.id">Editar</a>
          <a v-else>Adicionar</a>
        </imobiliaria-button>
      </div>
    </imobiliaria-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';

import ImobiliariaTipoImovelSelect from '@/modules/tipoImovel/components/TipoImovelSelect.vue';

export default {
  name: 'ImobiliariaImovelEdit',
  components: {
    ImobiliariaTipoImovelSelect,
  },
  inject: ['imovelEditVm'],
  data() {
    return {
    };
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
    onTipoImovelChange(tipoImovel) {
      this.imovelEditVm.imovel.tipoImovel = tipoImovel;
      this.imovelEditVm.imovel.id_tipo_imovel = tipoImovel.id;
    },
  },
};
</script>
