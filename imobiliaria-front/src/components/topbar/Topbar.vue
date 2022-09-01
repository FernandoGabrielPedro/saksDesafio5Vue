<template>
  <imobiliaria-navbar>
    <template #right>
      <div class="d-flex align-items--center">
        <imobiliaria-button @click="onAdministradores">
          Administradores
        </imobiliaria-button>
        <imobiliaria-button @click="onImoveis">
          Imóveis
        </imobiliaria-button>
        <imobiliaria-button @click="onTipoImoveis">
          Tipos de Imóvel
        </imobiliaria-button>
        <imobiliaria-button @click="onLogout">
          Sair
        </imobiliaria-button>
      </div>
    </template>
  </imobiliaria-navbar>
</template>

<script>
import { removeCookie } from '@/helpers/cookies/cookie';
import { goToLoginPage } from '@/router/route.service';
import { goToAdministradores, goToImoveis, goToTipoImoveis } from '@/modules/gerenciar/gerenciar.routes';

export default {
  name: 'ImobiliariaTopbar',
  data() {
    return {
    };
  },
  methods: {
    removeCookie,
    onLogout() {
      removeCookie('session_id');
      goToLoginPage();
    },
    onAdministradores() {
      goToAdministradores(this.$router);
    },
    onImoveis() {
      goToImoveis(this.$router);
    },
    onTipoImoveis() {
      goToTipoImoveis(this.$router);
    },
  },
};
</script>
