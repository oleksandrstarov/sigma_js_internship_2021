import {
  API_KEY,
  API_IMG_URL,
  API_GENRE_ID
} from '../constants/api';
import axios from '../axios/url';
import { Genres } from '../models'

import { Theme, MovieCard, FeatureStatus } from '../models/index';
import { MoviesType } from '../components/Home'

const apiService: {
  storeKey: string;
  store: { history: number[]; favorites: number[]; theme: number; historyBar: number };
} = {
  storeKey: 'service',
  store: {
    history: [],
    favorites: [],
    theme: Theme.light,
    historyBar: FeatureStatus.enabled
  }
}

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
      theme: 1,
      historyBar: FeatureStatus.enabled
    }
  ) {
    localStorage.setItem(apiService.storeKey, JSON.stringify(data));
  },

  switchHistoryBar() {
    const store = this.getStore();
    store.historyBar = store.historyBar === FeatureStatus.enabled ? FeatureStatus.disabled : FeatureStatus.enabled;
    this.setStore(store);
    return store.historyBar;
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
        await axios.get(url).then((res: { data: MoviesType }) => res.data)
    );
    return Promise.all(requests);
  },

  async getDataById(id: number) {
    const obj = await axios.get(`movie/${id}?${API_KEY}`);
    return obj.data;
  },

  async getPopularQueryList(page: number = 1) {
    const obj = await axios.get(`movie/popular?${API_KEY}&page=${page}`);
    return obj.data.results;
  },

  async getTopRatedList(page: number = 1) {
    const obj = await axios.get(`movie/top_rated?translations&${API_KEY}&region=US&page=${page}`);
    return obj.data.results;
  },

  async getSearchList(query: string, page: number = 1) {
    const obj = await axios.get(`search/movie?${API_KEY}&query=${query}&page=${page}`);
    return obj.data.results;
  },

  async getFileredList(dataFilter:
    {
      from?: number,
      to?: number,
      genre?: string,
      page: number
    } = {
      page: 1,
    }
  ) {

    function setFilteredData() {
      const { from, to } = dataFilter
      if (!!from) {
        if (from !== to) return `&primary_release_date.gte=${from}-01-01&primary_release_date.lte=${to}-01-01`
        return `&primary_release_date.gte=${from}-01-01`
      }
      return '';
    }

    function setGenre() {
      const { genre } = dataFilter;
      if (!!genre) {
        return `&with_genres=${API_GENRE_ID[genre as Genres]}`
      }
      return '';
    }

    const obj = await axios.get(`discover/movie?sort_by=popularity.asc&page=${dataFilter.page}${setFilteredData()}${setGenre()}&${API_KEY}`);
    return obj.data;
  },

  getFilterMatchesList(arr: MovieCard[], idsList: number[]): MovieCard[] {
    const conformityIds = arr.filter((item: MovieCard) => idsList.includes(item.id));
    return conformityIds;
  },

  changeListByPagination(arr: Array<MovieCard>, page: number = 1): Array<MovieCard> {
    return arr.length < 6
      ? arr
      : arr.slice(6 * (page - 1), 6 * page);
  },

  getFullImgLink(url: string, size: string = 'w500') {
    return `${API_IMG_URL}${size}${url}`;
  },
}

export default api;
