import axios from 'axios';
import { API_URL } from '../constants/api';
const url = axios.create({
    baseURL: `${API_URL}`
});
export default url;
