import * as tipoImovelResource from '@/modules/tipoImovel/tipoImovel.resource';

export function fetchTipoImoveis() {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .fetchTipoImoveis()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getTipoImovel(tipoImovelId) {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .getTipoImovel(tipoImovelId)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveTipoImovel(tipoImovel) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getTipoImoveisaveAction(tipoImovel)(tipoImovel)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function removeTipoImovel(tipoImovel) {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .removeTipoImovel(tipoImovel.id)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      }));
}

function getTipoImoveisaveAction(tipoImovel) {
  return tipoImovel.id ? tipoImovelResource.updateTipoImovel : tipoImovelResource.createTipoImovel;
}
