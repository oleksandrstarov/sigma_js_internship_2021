import axios from 'axios';
import { API_POPULAR_URL } from '../constants/api';
const url = axios.create({
    baseURL: `${API_POPULAR_URL}`
});
export default url;
