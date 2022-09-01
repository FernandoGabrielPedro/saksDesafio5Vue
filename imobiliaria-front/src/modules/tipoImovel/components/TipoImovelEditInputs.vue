<template>
  <div>
    <imobiliaria-form v-if="tipoImovelEditVm.tipoImovel" :submit="save">
      <div class="form-field mt-4">
        <imobiliaria-input
          v-model="tipoImovelEditVm.tipoImovel.nome"
          label="Nome*"
          name="nome"
          type="text"
          rules="required|min:2"
          placeholder="Nome" />
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
          <a v-if="tipoImovelEditVm.tipoImovel.id">Editar</a>
          <a v-else>Adicionar</a>
        </imobiliaria-button>
      </div>
    </imobiliaria-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';

export default {
  name: 'ImobiliariaTipoImovelEdit',
  inject: ['tipoImovelEditVm'],
  data() {
    return {
    };
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
  },
};
</script>
