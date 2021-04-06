import {
  API_KEY,
  API_IMG_URL
} from '../constants/api';
import axios from '../axios/baseUrl';
import axiosSearch from '../axios/searchUrl';
import axiosPopular from '../axios/popularUrl';
import axiosTopRate from '../axios/baseUrl';

function ApiService(this: any) {
  this.storeKey = 'service';
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
    let urls = arr.map((id: number) => `/${id}?${API_KEY}`),
      requests = urls.map(
        async (url: any) => await axios.get(url).then(res => res.data)
      );
    return Promise.all(requests)
  };

  this.getDataById = async (id: number) => {
    const obj = await axios.get(`${id}?${API_KEY}`);
    return obj;
  };

  this.getPopularQueryList = async () => {
    let obj = await axiosPopular.get(`?${API_KEY}&query`);
    return obj.data.results;
  };

  this.getTopRatedList = async () => {
    let obj = await axiosTopRate.get(`/top_rated?translations&${API_KEY}&region=DE`);
    return obj.data.results;
  };

  // method - Seatch ( ??? ):
  this.getSearchList = async (query: string) => {
    let obj = await axiosSearch.get(`?${API_KEY}&query=${query}`);
    return obj.data.results;
  };

  // method - transfom IMG links:
  this.changeImgLinks = (url: string, size: string) => {
    return `${API_IMG_URL}${size}${url}`;
  };
}

const api = new (ApiService as any)();
export default api;
