import { save, load } from '../persistence/storage';

export const ACTOR_PHILMOGRAPHY = 'actor-philmography';
export const ACTOR_AVATARS = 'actor-avatars';

export function loadActorPhilmography() {
  return load(ACTOR_PHILMOGRAPHY);
}

export function loadActorAvatars() {
  return load(ACTOR_AVATARS);
}

export function saveActorPhilmography(items) {
  save(ACTOR_PHILMOGRAPHY, items);
}

export function saveActorAvatars(items) {
  save(ACTOR_AVATARS, items);
}
