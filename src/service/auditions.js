import axios from 'axios';

const API_URL = 'https://findactor.shop';

export async function loadAuditions({ productionName } = {
  productionName: '',
}) {
  const { data } = await axios.get(`${API_URL}/auditions?productionName=${productionName}`);
  return data;
}

export async function applyAudition({ auditionTitle } = {
  auditionTitle: '',
}) {
  await axios.patch(`${API_URL}/auditions?auditionTitle=${auditionTitle}`);
}

export async function checkApplied({ auditionTitle } = {
  auditionTitle: '',
}) {
  return axios.get(`${API_URL}/auditions/applied?auditionTitle=${auditionTitle}`);
}

export async function closeAudition({ auditionTitle } = {
  auditionTitle: '',
}) {
  return axios.patch(`${API_URL}/auditions/close?auditionTitle=${auditionTitle}`);
}

export async function manageApplicant({
  operationType,
  actorEmail,
  auditionTitle,
}) {
  return axios.patch(
    `${API_URL}/auditions/${auditionTitle}/applicants?operationType=${operationType}&actorEmail=${actorEmail}`,
  );
}

export async function request({
  audition,
  actorEmail,
}) {
  return axios.post(
    'http://localhost:8080/requests', // TODO: 프로덕션으로 교체
    {
      auditionTitle: audition.title,
      actorEmail,
      audition,
    },
  );
}

export async function isRequested({
  auditionTitle,
  actorEmail,
}) {
  return axios.get(
    `http://localhost:8080/requests/requested?auditionTitle=${auditionTitle}&actorEmail=${actorEmail}`, // TODO: 프로덕션으로 교체
  );
}
