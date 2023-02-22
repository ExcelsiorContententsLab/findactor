import { save, load } from '../persistence/storage';

export const PRODUCTION_AUDITIONS = 'production-auditions';
export const PRODUCTION_PROFILE = 'production-profile';

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

export function updateProfile(newProfile) {
  save(PRODUCTION_PROFILE, newProfile);
}

export function saveProductionProfile(newProfile) {
  save(PRODUCTION_PROFILE, newProfile);
}

export function loadProfile() {
  return load(PRODUCTION_PROFILE);
}
