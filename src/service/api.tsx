import {
  API_KEY,
  API_IMG_URL
} from '../constants/api';
import axios from '../axios/url';

import { Theme } from '../models/index';

const apiService: { storeKey: string, store: { history: number[], favorites: number[], theme: any }, } = {
  storeKey: 'service',
  store: {
    history: [],
    favorites: [],
    theme: Theme.light
  },
}

const api = {
  getStore() {
    const serviceStore: any = localStorage.getItem(apiService.storeKey);
    serviceStore !== null
      ? apiService.store = JSON.parse(serviceStore)
      : this.setStore();
    return apiService.store;
  },

  setStore(data: Object = {
    history: [],
    favorites: [],
    theme: 1
  }) {
    localStorage.setItem(apiService.storeKey, JSON.stringify(data));
  },

  switchTheme() {
    const store = this.getStore();
    store.theme = (store.theme === Theme.light) ? Theme.dark : Theme.light;
    this.setStore(store);
    return store.theme;
  },

  setFavoritesId(id: number) {
    const store = this.getStore();
    const isThereAnId = store.favorites.includes(id);
    if (isThereAnId) {
      store.favorites.push(id)
    };
    this.setStore(store);
  },

  getFavoritsIdList() {
    const { favorites } = this.getStore();
    return favorites;
  },

  deleteFavoritsId(id: number) {
    const store = this.getStore();
    store.favorites = store.favorites.filter((itemId: number) => itemId !== id);
    this.setStore(store);
  },

  clearFavoritsIdList() {
    const store = this.getStore();
    store.favorites = [];
    this.setStore(store);
  },

  setHistoryId(id: number) {
    const store = this.getStore();
    const isThereAnId = store.history.includes(id);
    if (isThereAnId) {
      store.history.push(id)
    };
    this.setStore(store);
  },

  getHistoryIdList() {
    const { history } = this.getStore();
    return history;
  },

  deleteHistoryId(id: number) {
    const store = this.getStore();
    store.history = store.history.filter((itemId: number) => itemId !== id);
    this.setStore(store);
  },

  clearHistoryIdList() {
    apiService.store.history = [];
    this.setStore(apiService.store);
  },

  getDataByIds(ids: number[]) {
    const urls = ids.map((id: number) => `movie/${id}?${API_KEY}`);
    const requests = urls.map(
      async (url: any) => await axios.get(url).then((res: { data: any; }) => res.data)
    );
    return Promise.all(requests)
  },

  async getDataById(id: number) {
    const obj = await axios.get(`movie/${id}?${API_KEY}`);
    return obj.data.results;
  },

  async getPopularQueryList() {
    const obj = await axios.get(`movie/popular?${API_KEY}&query`);
    return obj.data.results;
  },

  async getTopRatedList() {
    const obj = await axios.get(`movie/top_rated?translations&${API_KEY}&region=US`);
    return obj.data.results;
  },

  async getSearchList(query: string) {
    let obj = await axios.get(`search/movie?${API_KEY}&query=${query}`);
    return obj.data.results;
  },

  changeImgLinks(url: string, size: string) {
    return `${API_IMG_URL}${size}${url}`;
  },
}

export default api;