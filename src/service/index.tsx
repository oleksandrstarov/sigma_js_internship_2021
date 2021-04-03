import { API_SEARCH_URL, API_KEY, API_POPULAR_URL, API_URL } from '../constants/apis';
import axios from 'axios';

function ApiService(this: any) {
    this.storeKey = 'service';
    this.apiResponse = [];
    this.store = {
        story: [],
        favorits: [],
        them: true
    };

    this.getStore = () => {
        let serviceStorage: any = localStorage.getItem(this.storeKey);

        if (serviceStorage !== null) this.store = JSON.parse(serviceStorage);

        return this.store;
    };

    this.setStore = (data: {}) => {

        localStorage.setItem(this.storeKey, JSON.stringify(data));
    };
    // this.setStore();

    this.setFavotits = (favotitsId: number) => {
        let store = this.getStore()
        if (!(store.favorits.includes(favotitsId))) {
            store.favorits.push(favotitsId);
        }

        this.setStore(this.store);
    };

    this.getSearchList = (query: string) => {
        let func = async () => {
            let result = await axios.get(`${API_SEARCH_URL}?${API_KEY}&query=${query}`);
            this.apiResponse = result.data.results;
        }
        func();
        return this.apiResponse;
    };

    this.getPopularQueryList = () => {
        let func = async () => {
            let result = await axios.get(`${API_POPULAR_URL}?${API_KEY}&region=UA`);
            this.apiResponse = result.data.results;
        }
        func();

        return this.apiResponse;
    };

    this.getTopRatedList = () => {
        let func = async () => {
            let result = await axios.get(`${API_URL}/top_rated?translations&${API_KEY}&region=DE`);
            this.apiResponse = result.data.results;
        }
        func();
        return this.apiResponse;
    };
};

const apiService = new (ApiService as any)();
export default apiService;



