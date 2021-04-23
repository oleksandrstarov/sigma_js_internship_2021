import { mount, ReactWrapper } from 'enzyme';
import StarRating from './StarRating';

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
    if (wrapper) wrapper.unmount();
  });

  describe('component received props', () => {
    it('should render Star Rating Component without crashing', () => {
      expect(wrapper).toBeDefined();
    });
    it('should accept props', () => {
      expect(wrapper.props()).toBeDefined();
    });
    it('should render star icon', () => {
      expect(wrapper.find('.star-rating-icon')).toBeDefined();
    });
    it('should recieve 5 star icons via props in order to render them', () => {
      const starIcon = wrapper.find('.input-radio');
      expect(starIcon.length).toBe(5);
    });
  });

  describe('Click event testing', () => {
    it('test click event and change icon state in terms of color', () => {
      wrapper.find('.input-radio').at(0).simulate('click');
      expect(wrapper.props().colorFilled).toBeTruthy();
    });
    it('test click event on the same btn to change icon state in terms of color', () => {
      wrapper.find('.input-radio').at(0).simulate('click');
      expect(wrapper.props().colorUnfilled).toBeTruthy();
    });
    it('test hover state over a star icon', () => {
      wrapper.find('.input-radio').at(0).simulate('mouseOver');
      expect(wrapper.props().colorFilled).toBeTruthy();
    });
    it('test initial state of star icon before hovering', () => {
      wrapper.find('.input-radio').at(0).simulate('mouseLeave');
      expect(wrapper.props().colorUnfilled).toBeTruthy();
    });
  });

  describe('should be added to a localstorage', () => {
   
  });
});
