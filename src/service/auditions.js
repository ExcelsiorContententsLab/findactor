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
  console.log({ auditionTitle });
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
    `${API_URL}/requests`,
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
    `${API_URL}/requests/requested?auditionTitle=${auditionTitle}&actorEmail=${actorEmail}`, // TODO: 프로덕션으로 교체
  );
}

export async function loadRequestedAuditions({ actorEmail }) {
  return axios.get(
    `${API_URL}/requests?actorEmail=${actorEmail}`,
  );
}

export async function rejectRequest({ auditionTitle, actorEmail }) {
  return axios.patch(
    `${API_URL}/requests/reject?actorEmail=${actorEmail}&auditionTitle=${auditionTitle}`,
  );
}

export async function checkRejected({ auditionTitle, actorEmail }) {
  return axios.get(
    `${API_URL}/requests/reject?actorEmail=${actorEmail}&auditionTitle=${auditionTitle}`,
  );
}

export async function loadRequests({ productionName }) {
  const { data } = await axios.get(
    `${API_URL}/requests?productionName=${productionName}`,
  );

  return data;
}
