import { load, save } from '../persistence/storage';

const AUDITIONS = 'auditions';

export function loadAuditions() {
  return load(AUDITIONS);
}

export function saveAuditions(auditions) {
  save(AUDITIONS, auditions);
}
