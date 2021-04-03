// import {useMemo} from 'react'
import apiService from '../service';

const Home = () => {

  // let a = apiService.getSearchList('mr Bi');
  // const listItems = a.map((item: any, index: number) => (<li> {item.original_title}</li>));

  const num = Math.floor(Math.random() * 69);
  // apiService.setFavotits(num);

  // const listItems = `${num}Selieznov`;
  return (
    <div onClick={() => apiService.setFavotits(num)}>
      Click here
      <ul>
        {num}
      </ul>
    </div>
  );

};

export default Home;

