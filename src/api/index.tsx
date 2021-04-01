import { API_SEARCH_URL, API_KEY } from '../constants/apis';
import axios from 'axios';

class Api {
    apiResponse: [];
    store?: {} | undefined;

    constructor() {
        this.apiResponse = [];
        this.store = {
            story: [],
            favorits: [],
            them: 'light'
        };
    }


    async getListof(query: string) {
        let result;
        switch (query) {
            case 'popular':
                result = await axios.get(`${API_SEARCH_URL}popular&${API_KEY}`);
                this.apiResponse = result.data.results;
                break;
            case 'top rated':
                result = await axios.get(`${API_SEARCH_URL}top_rated&${API_KEY}`);
                this.apiResponse = result.data.results;
                break;
            default:
                result = await axios.get(`${API_SEARCH_URL}${API_KEY}&query=${query}`);
                this.apiResponse = result.data.results;
                return result.data.results.length > 0 ? this.apiResponse : 'No such search results :( ';;
        }
        return this.apiResponse;
    }
    // async getSearchList(query: string) {
    //     let result = await axios.get(`${API_SEARCH_URL}${API_KEY}&query=${query}`);
    //     this.apiResponse = result.data.results;
    //     return result.data.results.length > 0 ? this.apiResponse : 'No such search results :( ';
    // }
    // async getPopularQueryList() {
    //     let result = await axios.get(`${API_SEARCH_URL}popular&${API_KEY}`);
    //     this.apiResponse = result.data.results;
    //     return this.apiResponse;
    // }
    // async getTopRatedList(query: string) {
    //     let result = await axios.get(`${API_SEARCH_URL}top_rated&${API_KEY}`);
    //     this.apiResponse = result.data.results;
    //     return this.apiResponse;
    // }
}
const interfaceApi = new Api();
export default interfaceApi;