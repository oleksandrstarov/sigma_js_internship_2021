import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


import MovieDetails from './MovieDetails';
import Detail from './Detail';
import ReadMore from './ReadMore';

import api from '../service/api';

const movieMockData = {
  budget: '0',
  genres: [
    { id: 16, name: 'Animation' },
    { id: 28, name: 'Action' }
  ],
  original_title: 'Batman: Soul of the Dragon',
  overview:
    'Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.',
  popularity: '255.512',
  poster_path: '/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg',
  production_countries: [
    { iso_3166_1: 'US', name: 'United States of America' }
  ],
  release_date: '2021-01-12',
  runtime: '83',
  status: 'Released',
  tagline: 'Get ready for the ultimate showdown.',
  title: 'Batman: Soul of the Dragon',
  vote_average: '7.1'
};

jest.mock('./Detail', () => () => 'Detail');

jest.mock('../service/api', () => ({
  getFullImgLink: jest.fn(() => "test"),
  getDataById: () => Promise.resolve(movieMockData),
  isIdInFavorites: jest.fn(() => true),
}));

jest.mock('./ReadMore', () => () => <>ReadMore</>);
jest.mock('./GenreRedirection', () => () => <>GenreRedirection</>);

describe('MovieDetails', () => {
  let wrapper: ReactWrapper;
  let history = null;

  beforeEach(async () => {
    await act(async () => {
      history = createMemoryHistory()
      history.push('/movie-details?id=412656')
      wrapper = mount(<Router history={history}><MovieDetails /></Router>);
    })
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render Detail', () => {
    wrapper.update();
    expect(wrapper.find(Detail).exists()).toBeTruthy();
  });

  it('should call poster api with movie poster_path', () => {
    wrapper.update();
    const spyFunc = api.getFullImgLink;
    expect(spyFunc).toHaveBeenCalledTimes(1);
    expect(spyFunc).toHaveBeenCalledWith(
      '/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg',
      'w500'
    );
  });

  it('should render ReadMore', () => {
    wrapper.update();
    expect(wrapper.find(ReadMore).exists()).toBeTruthy();
    expect(wrapper.find(ReadMore).props().children).toBeDefined();
  });
});
