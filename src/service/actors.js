import { save, load } from '../persistence/storage';

import { loadAuditions } from './auditions';

export const ACTOR_PHILMOGRAPHY = 'actor-philmography';
export const ACTOR_AVATARS = 'actor-avatars';
export const ACTOR_AUDITION_SCRAPS = 'actor-audition-scraps';
export const ACTOR_PROFILE = 'actor-profile';

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

export function isScrappedAudition(id) {
  const actorAudtionScraps = load(ACTOR_AUDITION_SCRAPS);
  // TODO: refactor
  return actorAudtionScraps.some((auditionId) => auditionId === id);
}

export function toggleScrapAudition(id) {
  const actorAudtionScraps = load(ACTOR_AUDITION_SCRAPS);

  const toggled = actorAudtionScraps.includes(id)
    ? actorAudtionScraps.filter((auditionId) => auditionId !== id)
    : [...actorAudtionScraps, id];

  save(ACTOR_AUDITION_SCRAPS, toggled);
}

export async function loadActorScrappedAutions() {
  const actorAudtionScrapIds = load(ACTOR_AUDITION_SCRAPS);

  const auditions = await loadAuditions();

  return auditions
    .filter(({ id }) => actorAudtionScrapIds.includes(id));
}

export function saveActorAudtionScraps(scraps) {
  save(ACTOR_AUDITION_SCRAPS, scraps);
}

export function saveActorProfile(profile) {
  save(ACTOR_PROFILE, profile);
}

export function loadActorProfile() {
  return load(ACTOR_PROFILE);
}
