<template>
  <div>
    <div v-if="tipoImoveis.length > 0">
      <div v-if="showLabel">
        TipoImovel*
      </div>
      <imobiliaria-select
        v-bind="$attrs"
        name="tipoImovel"
        rules="required"
        :class="showLabel ? 'mt--md' : ''"
        @on-change="onChange">
        <option :value="null" disabled>Selecione um Tipo de Imóvel...</option>
        <option
          v-for="tipoImovel in tipoImoveis"
          :key="tipoImovel.id"
          :value="tipoImovel.id">
          {{ tipoImovel.nome }}
        </option>
      </imobiliaria-select>
    </div>
    <div v-else class="mb-3 mt-4">
      <imobiliaria-p color="danger">
        *Você não possui Tipos de Imóveis cadastrados
        <imobiliaria-button @click="onCreate">
          Criar Tipo de Imóvel
        </imobiliaria-button>
      </imobiliaria-p>
    </div>
  </div>
</template>

<script>
import { fetchTipoImoveis } from '@/modules/tipoImovel/tipoImovel.service';
import { goToCreateTipoImovel } from '@/modules/tipoImovel/tipoImovel.routes';

export default {
  name: 'ImobiliariaTipoImovelSelect',
  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    isFilter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tipoImoveis: [],
    };
  },
  created() {
    this.onfetch();
  },
  methods: {
    onfetch() {
      fetchTipoImoveis()
        .then(data => {
          this.tipoImoveis = data.data;
        })
        .catch(() => {
          this.tipoImoveis = null;
        });
    },
    onChange(id) {
      this.$emit('on-change', { id });
    },
    onCreate() {
      goToCreateTipoImovel(this.$router);
    },
  },
};
</script>
