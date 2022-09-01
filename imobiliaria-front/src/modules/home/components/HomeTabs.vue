<template>
  <el-tabs v-model="tabActive" @tab-click="fetch">
    <el-tab-pane label="Últimos Tipos de Imóvel" name="tipoImoveis">
      <div v-if="tipoImovelList.length">
        <div
          v-for="tipoImovel in tipoImovelList"
          :key="tipoImovel.id"
          class="mb--xl">
          <imobiliaria-tipo-imovel-card :tipo-imovel="tipoImovel" />
        </div>
      </div>
      <div v-else>
        <imobiliaria-p class="opacity--50 my--md">( Sem Empréstimos )</imobiliaria-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos Imóveis" name="imoveis">
      <div v-if="imovelList.length">
        <div
          v-for="imovel in imovelList"
          :key="imovel.id"
          class="mb--xl">
          <imobiliaria-imovel-card :imovel="imovel" />
        </div>
      </div>
      <div v-else>
        <imobiliaria-p class="opacity--50 my--md">( Sem imoveis )</imobiliaria-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos Administradores" name="administradores">
      <div v-if="administradorList.length">
        <div
          v-for="administrador in administradorList"
          :key="administrador.id"
          class="mb--xl">
          <imobiliaria-administrador-card :administrador="administrador" />
        </div>
      </div>
      <div v-else>
        <imobiliaria-p class="opacity--50 my--md">( Sem administradores )</imobiliaria-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { fetchImoveis } from '@/modules/imovel/imovel.service';
import { fetchAdministradores } from '@/modules/administrador/administrador.service';
import { fetchTipoImoveis } from '@/modules/tipoImovel/tipoImovel.service';

import ImobiliariaImovelCard from '@/modules/imovel/components/ImovelCard.vue';
import ImobiliariaAdministradorCard from '@/modules/administrador/components/AdministradorCard.vue';
import ImobiliariaTipoImovelCard from '@/modules/tipoImovel/components/TipoImovelCard.vue';

export default {
  name: 'ImobiliariaHomeTabs',
  components: {
    ImobiliariaImovelCard,
    ImobiliariaAdministradorCard,
    ImobiliariaTipoImovelCard,
  },
  data() {
    return {
      tabActive: 'tipoImoveis',
      imovelList: [],
      administradorList: [],
      tipoImovelList: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      if (this.tabActive === 'tipoImoveis') {
        this.fetchTipoImoveis();
      } else if (this.tabActive === 'imoveis') {
        this.fetchImoveis();
      } else if (this.tabActive === 'administradores') {
        this.fetchAdministradores();
      }
    },
    fetchImoveis() {
      fetchImoveis()
        .then(data => {
          this.imovelList = data.data;
        })
        .catch(() => {
          this.imovelList = [];
        });
    },
    fetchAdministradores() {
      fetchAdministradores()
        .then(data => {
          this.administradorList = data.data;
        })
        .catch(() => {
          this.administradorList = [];
        });
    },
    fetchTipoImoveis() {
      fetchTipoImoveis()
        .then(data => {
          this.tipoImovelList = data.data;
        })
        .catch(() => {
          this.tipoImovelList = [];
        });
    },
  },
};
</script>
