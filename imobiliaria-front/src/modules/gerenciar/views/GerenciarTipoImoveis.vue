<template>
  <imobiliaria-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <imobiliaria-header>Tipos de Imóvel</imobiliaria-header>
        <imobiliaria-button @click="onCreateTipoImovel">
          Adicionar Tipo de Imóvel
        </imobiliaria-button>
      </div>
      <table v-if="tipoImovelList && tipoImovelList.length > 0" class="table">
        <tbody>
          <tr v-for="tipoImovel in tipoImovelList" :key="tipoImovel.id">
            <td class="py-3 px-2">
              <imobiliaria-header size="sm" class="d-flex align-item--center">
                <imobiliaria-tipo-imovel-link :id="tipoImovel.id">
                  {{ tipoImovel.nome }}
                </imobiliaria-tipo-imovel-link>
              </imobiliaria-header>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <imobiliaria-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <imobiliaria-tipo-imovel-link
                      :id="tipoImovel.id"
                      action="edit">
                      <imobiliaria-icon size="sm" icon="pencil" />
                      Editar
                    </imobiliaria-tipo-imovel-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteTipoImovel(tipoImovel)">
                      <imobiliaria-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <imobiliaria-modal-delete
                v-if="showModal(tipoImovel)"
                content="Você realmente deseja excluir esse tipo de imóvel?"
                @close="setDeleteTipoImovel(null)"
                @confirm="onDeleteTipoImovel(tipoImovel)">
              </imobiliaria-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <imobiliaria-p v-else class="opacity--50 my--lg">( Sem tipos de imóvel )</imobiliaria-p>
    </template>
  </imobiliaria-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchTipoImoveis, removeTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';
import { goToCreateTipoImovel } from '@/modules/tipoImovel/tipoImovel.routes';

import ImobiliariaTipoImovelLink from '@/modules/tipoImovel/components/TipoImovelLink.vue';
import ImobiliariaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'ImobiliariaGerenciarTipoImoveis',
  components: {
    ImobiliariaTipoImovelLink,
    ImobiliariaSingleContentLayout,
  },
  data() {
    return {
      tipoImovelList: [],
      tipoImovelDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.tipoImovelList = [];
      fetchTipoImoveis()
        .then(data => {
          this.tipoImovelList = data.data;
        })
        .catch(() => {
          this.tipoImovelList = [];
        });
    },
    onCreateTipoImovel() {
      goToCreateTipoImovel(this.$router);
    },
    setDeleteTipoImovel(tipoImovel) {
      this.tipoImovelDelete = tipoImovel;
    },
    showModal(tipoImovel) {
      return this.tipoImovelDelete && this.tipoImovelDelete.id === tipoImovel.id;
    },
    onDeleteTipoImovel(tipoImovel) {
      removeTipoImovel(tipoImovel)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir o usuário'));
    },
  },
};
</script>
