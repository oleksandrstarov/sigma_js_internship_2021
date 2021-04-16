import MovieBanner from './MovieBanner';
import WrapperFavorites from './WrapperFavorites';

const Home = () => {
  return (
    <>
      <MovieBanner />
      <div className="wrapper-space">
        <WrapperFavorites />
      </div>
    </>
  );

};

export default Home;
