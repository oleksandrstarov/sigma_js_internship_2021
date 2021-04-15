import MovieBanner from './MovieBanner';
import WrapperFavorites from './WrapperFavorites';

const Home = () => {
  return (<><MovieBanner />
    <div className="padding-top-bottom">
      <WrapperFavorites />
    </div>
  </>);

};

export default Home;
