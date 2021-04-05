import {
  API_SEARCH_URL,
  API_KEY,
  API_POPULAR_URL,
  API_URL,
  API_IMG_URL
} from '../constants/api';
// import axios from 'axios';
import axios from '../axios';

function ApiService(this: any) {
  this.storeKey = 'service';
  this.apiResponse = [];
  this.store = {
    story: [],
    favorites: [],
    theme: true
  };

  // Store:
  this.getStore = () => {
    let serviceStore: any = localStorage.getItem(this.storeKey);
    if (serviceStore !== null) this.store = JSON.parse(serviceStore);
    return this.store;
  };
  this.setStore = (data: {} = this.store) => {
    localStorage.setItem(this.storeKey, JSON.stringify(data));
  };

  // method - Theme:
  this.switchTheme = () => {
    let { theme } = this.getStore();
    this.store.theme = !theme;
    this.setStore();
    return this.store.theme;
  };

  // methods - Favorirs:
  this.setFavoritesId = (id: number) => {
    let { favorites } = this.getStore();
    if (!favorites.includes(id)) this.store.favorites.push(id);
    this.setStore();
  };
  this.getFavoritsIdList = () => {
    let { favorites } = this.getStore();
    this.setStore();
    return favorites;
  };
  this.deleteFavoritsId = (id: number) => {
    let { favorites } = this.getStore();
    this.store.favorites = favorites.filter((itemId: number) => itemId !== id);
    this.setStore();
  };
  this.clearFavoritsIdList = () => {
    this.store.favorites = [];
    this.setStore();
  };

  // methods - Story:
  this.setStoryId = (id: number) => {
    let { story } = this.getStore();
    if (!story.includes(id)) this.store.story.push(id);
    this.setStore();
  };
  this.getStoryIdList = () => {
    let { story } = this.getStore();
    return story;
  };
  this.deleteStoryId = (id: number) => {
    let { story } = this.getStore();
    this.store.story = story.filter((itemId: number) => itemId !== id);
    this.setStore();
  };
  this.clearStoryIdList = () => {
    this.store.story = [];
    this.setStore();
  };

  // API:
  this.getDataByIds = (arr: number[]) => {
    let funk = () => {
      let urls = arr.map((id: number) => `${API_URL}/${id}?${API_KEY}`),
        requests = urls.map(
          async (url: any) => await axios.get(url).then(res => res.data)
        );
      Promise.all(requests).then(res => (this.apiResponse = [...res]));
    };
    funk();
  };

  this.getDataById = (id: number) => {
    const fetchData = async () => {
      const request = await axios.get(`${id}?${API_KEY}`);
      this.apiResponse = request.data;
    };
    fetchData();
  };

  this.newFunc = async (id: number) => {
    const obj = await axios.get(`${id}?${API_KEY}`);
    return obj;
  };

  // this.getDataById = (id: number) => {
  //     let getApiData = async () => {
  //         let url = `${API_URL}/${id}?${API_KEY}`;
  //         let result = await axios.get(url);
  //         this.apiResponse = result.data;
  //     }
  //     getApiData();
  //     return this.apiResponse;
  // }
  this.getPopularQueryList = () => {
    const getApiData = async () => {
      let url = `${API_POPULAR_URL}?${API_KEY}&region=UA`;
      let result = await axios.get(url);
      this.apiResponse = result.data.results;
    };
    getApiData();

    return this.apiResponse;
  };
  this.getTopRatedList = () => {
    const getApiData = async () => {
      let url = `${API_URL}/top_rated?translations&${API_KEY}&region=DE`;
      let result = await axios.get(url);
      this.apiResponse = result.data.results;
    };
    getApiData();
    return this.apiResponse;
  };

  // method - Seatch ( ??? ):
  this.getSearchList = (query: string) => {
    const getApiData = async () => {
      let url = `${API_SEARCH_URL}?${API_KEY}&query=${query}`;
      let result = await axios.get(url);
      this.apiResponse = result.data.results;
    };
    getApiData();
    return this.apiResponse;
  };

  /*
    question about:
    To make this method more clever,
    that return posters links with them size in related of window size.
    https://image.tmdb.org/t/p/ >>>>> w500/w342/w185/w154 <<<<<  /fRGxZuo7jJUWQsVg9PREb98Aclp.jpg
    */

  // method - transfom IMG links:
  this.changeImgLinks = (url: string, size: string) => {
    return `${API_IMG_URL}${size}${url}`;
  };
}

const api = new (ApiService as any)();
export default api;
