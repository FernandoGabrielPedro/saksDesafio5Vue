import { GERENCIAR_URL } from '@/modules/gerenciar/gerenciar.constants';

export default [
  {
    ...GERENCIAR_URL.administradores,
    component: () => import('@/modules/gerenciar/views/GerenciarAdministradores.vue'),
  },
  {
    ...GERENCIAR_URL.imoveis,
    component: () => import('@/modules/gerenciar/views/GerenciarImoveis.vue'),
  },
  {
    ...GERENCIAR_URL.tipoImoveis,
    component: () => import('@/modules/gerenciar/views/GerenciarTipoImoveis.vue'),
  },
];

export function goToAdministradores($router) {
  $router.push({
    name: GERENCIAR_URL.administradores.name,
  });
}

export function goToImoveis($router) {
  $router.push({
    name: GERENCIAR_URL.imoveis.name,
  });
}

export function goToTipoImoveis($router) {
  $router.push({
    name: GERENCIAR_URL.tipoImoveis.name,
  });
}
