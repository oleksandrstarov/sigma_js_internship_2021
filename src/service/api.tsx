import {
  API_KEY,
  API_IMG_URL,
  API_GENRE_ID
} from '../constants/api';
import axios from '../axios/url';

import { MovieCard, Theme } from '../models/index';

const apiService: {
  storeKey: string;
  store: { history: number[]; favorites: number[]; theme: any };
} = {
  storeKey: 'service',
  store: {
    history: [],
    favorites: [],
    theme: Theme.light
  }
};

const api = {
  getStore() {
    const serviceStore: any = localStorage.getItem(apiService.storeKey);
    if (serviceStore !== null) {
      return JSON.parse(serviceStore);
    }
    this.setStore();
    return apiService.store;
  },

  setStore(
    data: Object = {
      history: [],
      favorites: [],
      theme: 1
    }
  ) {
    localStorage.setItem(apiService.storeKey, JSON.stringify(data));
  },

  switchTheme() {
    const store = this.getStore();
    store.theme = store.theme === Theme.light ? Theme.dark : Theme.light;
    this.setStore(store);
    return store.theme;
  },

  setFavoritesId(id: number) {
    const store = this.getStore();
    const isNewId = store.favorites.includes(id);
    if (!isNewId) {
      store.favorites.push(id);
    }
    this.setStore(store);
  },

  isIdInFavorites(id: number) {
    const store = api.getFavoritsIdList();
    return store.includes(id);
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
    const isNewId = store.history.includes(id);
    if (!isNewId) {
      store.history.push(id);
    }
    this.setStore(store);
  },

  isIdInHistory(id: number) {
    const store = api.getHistoryIdList();
    return store.includes(id);
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
      async (url: string) =>
        await axios.get(url).then((res: { data: {}[] }) => res.data)
    );
    return Promise.all(requests);
  },

  async getDataById(id: number) {
    const obj = await axios.get(`movie/${id}?${API_KEY}`);
    return obj.data;
  },

  async getPopularQueryList() {
    const obj = await axios.get(`movie/popular?${API_KEY}&query`);
    return obj.data.results;
  },

  async getTopRatedList() {
    const obj = await axios.get(
      `movie/top_rated?translations&${API_KEY}&region=US`
    );
    return obj.data.results;
  },

  async getSearchList(query: string) {
    let obj = await axios.get(`search/movie?${API_KEY}&query=${query}`);
    return obj.data.results;
  },

  async getSearchFileredList(dataFilter:
    {
      from: number,
      to: number,
      genre: string | null,
      page: number
    } = {
      from: 1900,
      to: 2020,
      genre: null,
      page: 1,
    }
  ) {

    function setFilteredData() {
      const { from, to } = dataFilter
      if (from !== to) return `&primary_release_date.gte=${from}-01-01&primary_release_date.lte=${to}-01-01`
      return `&primary_release_date.gte=${from}-01-01`
    }

    function setGenre() {
      const { genre } = dataFilter;
      if (!genre) {
        const genreId = API_GENRE_ID.filter((item: any) => Object.keys(item)[0] === 'comedy');
        return `&with_genres=${Object.keys(genreId[0])[0]}`
      }
      return '';
    }

    let obj = await axios.get(`discover/movie?sort_by=popularity.asc&page=${dataFilter.page}${setFilteredData()}${setGenre()}&${API_KEY}`);
    return obj.data.results;
  },

  getFilterMatchesList(arr: MovieCard[], idsList: number[]) {
    const conformityIds = arr.filter(item => {
      return idsList.includes(item.id);
    });
    return conformityIds;
  },

  getFullImgLink(url: string, size: string) {
    return `${API_IMG_URL}${size}${url}`;
  }
};

export default api;
