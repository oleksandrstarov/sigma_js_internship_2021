import axios from 'axios';
import { API_SEARCH_URL } from '../constants/api';
const url = axios.create({
    baseURL: `${API_SEARCH_URL}`
});
export default url;
