import axios from 'axios';
import { getAdvert } from './advertActions';
axios.defaults.baseURL = 'https://6566535deb8bb4b70ef32d21.mockapi.io/Advert';

export async function getAllAdverts(page = 1, pageSize = 10) {
  try {
    const response = await axios.get(`?page=${page}&limit=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
}

// axios
//   .get('/Advert')
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   });

// // GET request for a specific advert by ID
// axios
//   .get(`/Advert/${id}`)
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   });

// // POST request to create a new advert
// axios
//   .post('/Advert', newAdvert)
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   });

// // PUT request to update an existing advert by ID
// axios
//   .put(`/Advert/${id}`, updatedAdvert)
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   });

// // DELETE request to delete an existing advert by ID
// axios
//   .delete(`/Advert/${id}`)
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(error => {
//     // handle error
//     console.log(error);
//   });
