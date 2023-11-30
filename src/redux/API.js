import axios from 'axios';

axios.defaults.baseURL = 'https://6566535deb8bb4b70ef32d21.mockapi.io/Advert';

export const fetchAdvertsApi = async (page = 1, pageSize = 12) => {
  const response = await axios.get(`?page=${page}&limit=${pageSize}`);
  return response;
};

export const fetchAdvertsIdApi = async id => {
  const response = await axios.get(`/${id}`);
  return response;
};
