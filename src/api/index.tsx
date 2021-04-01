import { API_SEARCH_URL, API_KEY, API_POPULAR_URL } from '../constants/apis';
import axios from 'axios';




// let apiService = () => {
//     let kapiResponse: any[] = [];

//     let test = () => 'hey';
//     kapiResponse.push(test)
//     return kapiResponse;
// }

function ApiService(this: any) {
    this.apiResponse = ['q'];
    this.store = {
        story: [],
        favorits: [],
        them: true
    };
    // https://api.themoviedb.org/3/search/movie?
    // api_key=157c2ade7d0b335008ae899a157d8967
    // &query=batman

    this.getSearchList = async (query: string) => {
        let result = await axios.get(`${API_SEARCH_URL}?${API_KEY}&query=${query}`)
        this.apiResponse = result.data.results;
        this.apiResponse = result.data.results;
        return this.apiResponse;
    };
    this.getPopularQueryList = async () => {
        let result = await axios.get(`${API_POPULAR_URL}?${API_KEY}`);
        this.apiResponse = result.data.results;
        return this.apiResponse;
    }
    this.getTopRatedList = async () => {
        let result = await axios.get(`${API_SEARCH_URL}top_rated?${API_KEY}`);
        this.apiResponse = result.data.results;
        return this.apiResponse;
    }
};

const apiService = new (ApiService as any)();
export default apiService;


// class Api {
//   apiResponse: [];
//   store?: {} | undefined;

//   constructor() {
//     this.apiResponse = [];
//     this.store = {
//       story: [],
//       favorits: [],
//       them: true
//     };
//   }

//   async getSearchList(query: string) {
//     let result = await axios.get(`${API_SEARCH_URL}${API_KEY}&query=${query}`);
//     this.apiResponse = result.data.results;
//     return result.data.results.length > 0
//       ? this.apiResponse
//       : 'No such search results :( ';
//   }
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

  // async getListof(query: string) {
  //     let result;
  //     switch (query) {
  //         case 'popular':
  //             result = await axios.get(`${API_SEARCH_URL}popular&${API_KEY}`);
  //             this.apiResponse = result.data.results;
  //             break;
  //         case 'top rated':
  //             result = await axios.get(`${API_SEARCH_URL}top_rated&${API_KEY}`);
  //             this.apiResponse = result.data.results;
  //             break;
  //         default:
  //             result = await axios.get(`${API_SEARCH_URL}${API_KEY}&query=${query}`);
  //             this.apiResponse = result.data.results;
  //             return result.data.results.length > 0 ? this.apiResponse : 'No such search results :( ';
  //     }
  //     return this.apiResponse;
  // }
// }
// const interfaceApi = new Api();
// export default interfaceApi;

