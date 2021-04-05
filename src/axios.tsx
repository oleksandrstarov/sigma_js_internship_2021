import axios from 'axios';
import { API_URL } from './constants/api';
// `${API_URL}/${id}?${API_KEY}`
// const i2 = axios.create({
//     baseURL: `${API_URL}`
// })
// export default i2;

const url = axios.create({
  baseURL: `${API_URL}`
});

// const pop = axios.create({
//     baseURL: `${API_POPULAR_URL}`
// });

export default url;
