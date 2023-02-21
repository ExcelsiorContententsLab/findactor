import { save, load } from '../persistence/storage';

export const PRODUCTION_AUDITIONS = 'production-auditions';

export function loadProductionAuditions() {
  return load(PRODUCTION_AUDITIONS);
}

export function saveProductionAuditions(items) {
  save(PRODUCTION_AUDITIONS, items);
}

export function registerAudition(audition) {
  const auditions = loadProductionAuditions();
  saveProductionAuditions(
    [...auditions, audition],
  );
}
