// import { API_GENRE_ID } from 'src/constants/api';
import api from 'src/service/api';
import MovieBanner from './MovieBanner';

const Home = () => {
  const obj = {
    genre: 'Action',
    page: 1,
  }
  let a = api.getSearchFileredList(obj)
  console.log(a)
  // api.getSearchFileredList(obj).then(console.log)


  return (<MovieBanner />);
};

export default Home;
