<template>
  <div>
    <div v-if="administradores.length > 1">
      <div v-if="showLabel">
        Administrador*
      </div>
      <imobiliaria-select
        v-bind="$attrs"
        name="administrador"
        rules="required"
        :class="showLabel ? 'mt--md' : ''"
        @on-change="onChange">
        <option :value="null" disabled>Selecione um administrador...</option>
        <option
          v-for="administrador in administradores"
          :key="administrador.id"
          :value="administrador.id">
          {{ administrador.nome }}
        </option>
      </imobiliaria-select>
    </div>
    <div v-else class="mb-3 mt-4">
      <imobiliaria-p color="danger">
        *Você não possui administradores cadastrados
        <imobiliaria-button @click="onCreate">
          Criar Administrador
        </imobiliaria-button>
      </imobiliaria-p>
    </div>
  </div>
</template>

<script>
import { fetchAdministradores } from '@/modules/administrador/administrador.service';
import { goToCreateAdministrador } from '@/modules/administrador/administrador.routes';

export default {
  name: 'ImobiliariaAdministradoreselect',
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
      administradores: [],
    };
  },
  created() {
    this.onfetch();
  },
  methods: {
    onfetch() {
      fetchAdministradores()
        .then(data => {
          this.administradores = data.data;
        })
        .catch(() => {
          this.administradores = null;
        });
    },
    onChange(id) {
      this.$emit('on-change', { id });
    },
    onCreate() {
      goToCreateAdministrador(this.$router);
    },
  },
};
</script>
