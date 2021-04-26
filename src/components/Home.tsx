import WrapperFavorites from './WrapperFavorites';
import WrapperLastSeen from './WrapperLastSeen';
import WrapperPopular from './WrapperPopular';
import MovieBanner from './MovieBanner';

const Home = () => {
  return (
    <>
      <MovieBanner />
      <div className="wrapper-space">
        <WrapperFavorites />
      </div>
      <div className="wrapper-space">
        <WrapperLastSeen />
      </div>
      <div className="wrapper-space">
        <WrapperPopular />
      </div>
    </>
  );
};

export default Home;
