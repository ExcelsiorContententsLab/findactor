import axios from 'axios';

const API_URL = 'https://findactor.shop';

export async function loadAuditions({ productionName }) {
  const { data } = await axios.get(`${API_URL}/auditions?productionName=${productionName}`);
  return data;
}

export const xx = '';
