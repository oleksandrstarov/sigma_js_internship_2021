const ratingDataInLocalStorage: { storageKey: string; rating: Array<{}> } = {
  storageKey: 'movie-rating-data',
  rating: []
};

const ratingData = {
  getMovieRatingFromStorage() {
    const movieRatingStorage: any = localStorage.getItem(
      ratingDataInLocalStorage.storageKey
    );
    if (!movieRatingStorage) {
      this.setMovieRatingToStorage();
      return [];
    }
    return JSON.parse(movieRatingStorage);
  },

  setMovieRatingToStorage(data = []) {
    localStorage.setItem(
      ratingDataInLocalStorage.storageKey,
      JSON.stringify(data)
    );
  },

  setMovieRatingObj(obj: { id: number | string; movieRate: number }) {
    let movieRatingArray = this.getMovieRatingFromStorage();
    const isMovieIdInStorage = movieRatingArray.find(
      (ratingObj: { id: number; movieRate: number }) => ratingObj.id === obj.id
    );
    if (!isMovieIdInStorage) movieRatingArray.push(obj);
    movieRatingArray = movieRatingArray.map(
      (ratingObj: { id: number; movieRate: number }) => {
        if (ratingObj.id === obj.id) return obj;
        return ratingObj;
      }
    );
    this.setMovieRatingToStorage(movieRatingArray);
  },

  getMovieRatingById(id: number | string) {
    const movieRatingArray = this.getMovieRatingFromStorage();
    return movieRatingArray.find(
      (ratingObj: { id: number; movieRate: number }) => ratingObj.id === id
    );
  }
};

export default ratingData;

