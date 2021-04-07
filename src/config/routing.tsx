import Home from '../components/Home';
import MovieDetails from '../components/MovieDetails';
import Favorites from '../components/Favorites';
import SearchResults from '../components/SearchResults';

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/movie-details/:id',
    name: 'Movie details',
    exact: false,
    component: MovieDetails
  },
  {
    path: '/favorites',
    name: 'Favorites',
    exact: false,
    component: Favorites
  },
  {
    path: '/search-results',
    name: 'Search results',
    exact: false,
    component: SearchResults
  }
];
