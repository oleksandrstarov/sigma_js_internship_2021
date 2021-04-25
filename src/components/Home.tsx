import { useContext } from 'react';
import { HistoryBarContext, HistoryBarContextType } from './SettingsBarContext';

import WrapperFavorites from './WrapperFavorites';
import WrapperLastSeen from './WrapperLastSeen';
import WrapperPopular from './WrapperPopular';
import MovieBanner from './MovieBanner';

const Home = () => {
  const { historyState, favoriteState }: HistoryBarContextType = useContext(HistoryBarContext);

  return (
    <>
      <MovieBanner />
      <div className="wrapper-space">
        {favoriteState ? <WrapperFavorites /> : null}
      </div>
      <div className="wrapper-space">
        {historyState ? <WrapperLastSeen /> : null}
      </div>
      <div className="wrapper-space">
        <WrapperPopular />
      </div>
    </>
  );
};

export default Home;
