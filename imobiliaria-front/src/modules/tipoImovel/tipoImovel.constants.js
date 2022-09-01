export const TIPOIMOVEIS_URL = Object.freeze({
  path: '/tipoImoveis',
  view: {
    name: 'tipoImovel.view',
    path: '/tipoImoveis/ver/:id',
  },
  edit: {
    name: 'tipoImovel.edit',
    path: '/tipoImoveis/editar/:id',
  },
  create: {
    name: 'tipoImovel.create',
    path: '/tipoImoveis/criar',
  },
  notfound: {
    name: 'tipoImovel.notfound',
    path: '/tipoImoveis/nao-encontrado',
  },
});

export const TIPOIMOVEL_ERRORS = {
  404: 'TIPOIMOVEL_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
