//import { mount, ReactWrapper } from 'enzyme';
//import { act } from 'react-dom/test-utils';

import { mount, ReactWrapper } from 'enzyme';
import StarRating from './StarRating';

// const starRatingProps = {
//   numberOfStars: 5,
//   colorFilled: '#ff636d',
//   colorUnfilled: '#c4c4c4',
//   movieId: 732450,
//   voteAverage: 5.8,
//   rerenderFavoritesIcon: () => {}
// };

// const setUp = (starRatingProps) => shallow(<StarRating {...starRatingProps} />)
// console.log(setUp)

describe('Star Rating', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <StarRating
        numberOfStars={5}
        colorFilled={'#ff636d'}
        colorUnfilled={'#c4c4c4'}
        movieId={1453}
        voteAverage={7.5}

      />
    );
  });

  afterEach(() => {
    if(wrapper) wrapper.unmount();
  });

  describe('component recieves props', () => {
    it('should render Star Rating Component without crashing', () => {
      expect(wrapper).toBeDefined();
    });
    it('should accept props', () => {
      expect(wrapper.props()).toBeDefined();
      console.log(wrapper.props());
    });
  });
});
