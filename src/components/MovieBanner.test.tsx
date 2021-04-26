import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import MovieBanner from './MovieBanner';
import PopularMovie from './PopularMovie';

const moviesMock = [
  {
    adult: false,
    backdrop_path: '/z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg',
    genre_ids: [28, 12, 35, 14],
    id: 615678,
    original_language: 'en',
    original_title: 'Thunder Force',
    overview:
      'In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city.',
    popularity: 2346.798,
    poster_path: '/279yOM4OQREL36B3SECnRxoB4MZ.jpg',
    release_date: '2021-04-09',
    title: 'Thunder Force',
    video: false,
    vote_average: 5.9,
    vote_count: 357
  }
];

jest.mock('../service/api', () => ({
  getPopularQueryList: () => Promise.resolve(moviesMock)
}));

jest.mock('./PopularMovie', () => () => 'PopularMovie');

describe('MovieBanner', () => {
  let wrapper: ReactWrapper;

  beforeEach(async () => {
    await act(async () => {
      wrapper = mount(<MovieBanner popularMovies={moviesMock} />);
    });
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Popular movies', () => {
    wrapper.update();

    expect(wrapper.find(PopularMovie).exists()).toBeTruthy();
    expect(wrapper.find(PopularMovie).props().movie).toBe(moviesMock[0]);
  });
});
