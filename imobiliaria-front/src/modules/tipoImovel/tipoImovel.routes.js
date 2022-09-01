import { TIPOIMOVEIS_URL } from '@/modules/tipoImovel/tipoImovel.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: TIPOIMOVEIS_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...TIPOIMOVEIS_URL.view,
        component: () => import('@/modules/tipoImovel/views/TipoImovelViewPage.vue'),
      },
      {
        ...TIPOIMOVEIS_URL.edit,
        component: () => import('@/modules/tipoImovel/views/TipoImovelEditPage.vue'),
      },
      {
        ...TIPOIMOVEIS_URL.create,
        component: () => import('@/modules/tipoImovel/views/TipoImovelEditPage.vue'),
      },
      {
        ...TIPOIMOVEIS_URL.notfound,
        component: () => import('@/modules/tipoImovel/views/TipoImovelNotFound.vue'),
      },
    ],
  },
];

export function goToTipoImovelNotFound($router) {
  $router.push({
    name: TIPOIMOVEIS_URL.notfound.name,
  });
}

export function goToOpenTipoImovel($router, tipoImovel) {
  $router.push({
    name: TIPOIMOVEIS_URL.view.name,
    params: { id: tipoImovel.id },
  });
}

export function goToCreateTipoImovel($router) {
  $router.push({
    name: TIPOIMOVEIS_URL.create.name,
  });
}
