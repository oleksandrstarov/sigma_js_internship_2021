import { mount, ReactWrapper } from 'enzyme';
import FavoritesBtn from './FavoritesBtn';

describe('FavoriteBtn', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<FavoritesBtn movieId={123} />);
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  describe('component recives props', () => {
    it('should render Star Rating Component without crashing', () => {
      expect(wrapper).toBeDefined();
    });

    it('should render a favorites btn without crashing', () => {
      expect(wrapper.find('.favorite-btn')).toBeDefined();
    });

    it('should recieve props', () => {
      expect(wrapper.props()).toBeTruthy();
    });
  });

  describe('click event testing', () => {
    it('test click event on favorite btn', () => {
      wrapper.find('.favorite-btn').simulate('click');
    });
    it('test a initial src of a favorite icon', () => {
      const favoritesIcon = wrapper.find('.favorite-icon');
      expect(favoritesIcon.getElement().props.src).toEqual(
        '/images/favoriteBtn/heartUnfilled.svg'
      );
    });
    it('test a changing a src of icon on click to it', () => {
      wrapper.find('.favorite-btn').simulate('click');
      const favoritesIcon = wrapper.find('.favorite-icon');
      expect(favoritesIcon.getElement().props.src).toEqual(
        '/images/favoriteBtn/heartFilled.svg'
      );
    });
  });
});
