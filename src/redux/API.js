import axios from 'axios';

axios.defaults.baseURL = 'https://6566535deb8bb4b70ef32d21.mockapi.io/Advert';

export const fetchAdvertsApi = async (page = 1, limit = 12, make) => {
  const response = await axios.get('/', {
    params: {
      make,
      page,
      limit,
    },
  });
  return response;
};

export const fetchAdvertsIdApi = async id => {
  const response = await axios.get(`/${id}`);
  return response;
};
