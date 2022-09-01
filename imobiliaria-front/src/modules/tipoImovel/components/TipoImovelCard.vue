<template>
  <imobiliaria-row>
    <imobiliaria-col
      :sm="4"
      :md="2">
      <imobiliaria-icon
        class="mt-2"
        size="xl"
        icon="house" />
    </imobiliaria-col>
    <imobiliaria-col
      :sm="20"
      :md="22">
      <imobiliaria-header v-truncate size="sm">
        <imobiliaria-tipo-imovel-link :id="tipoImovel.id">{{ tipoImovel.nome }}</imobiliaria-tipo-imovel-link>
      </imobiliaria-header>
    </imobiliaria-col>
  </imobiliaria-row>
</template>

<script>
import ImobiliariaTipoImovelLink from '@/modules/tipoImovel/components/TipoImovelLink.vue';

export default {
  name: 'TipoImovelListItem',
  components: {
    ImobiliariaTipoImovelLink,
  },
  props: {
    tipoImovel: {
      type: Object,
      required: true,
    },
  },
};
</script>
