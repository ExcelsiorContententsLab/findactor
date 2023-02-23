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
