import { act } from 'react-dom/test-utils';
import MovieDetails from './MovieDetails';
import { mount, ReactWrapper } from 'enzyme';
import Detail from './Detail';
// import ReadMore from './ReadMore';

const movieMockData = {
  "budget": 0,
  "genres": [{ "id": 16, "name": "Animation" }, { "id": 28, "name": "Action" }],
  "original_title": "Batman: Soul of the Dragon",
  "overview": "Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.",
  "popularity": 255.512,
  "poster_path": "/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg",
  "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
  "release_date": "2021-01-12",
  "runtime": 83,
  "status": "Released",
  "tagline": "Get ready for the ultimate showdown.",
  "title": "Batman: Soul of the Dragon",
  "vote_average": 7.1,
}

jest.mock('./Detail', () => () => <>Detail</>);

jest.mock('../service/api', () => () => Promise.resolve(movieMockData)
);
// jest.mock('./ReadMore', () => () => <>ReadMore</>);


describe('MovieDetails', () => {
  let wrapper: ReactWrapper;

  beforeEach(async () => {
    await act(async () => {
      wrapper = mount(<MovieDetails />);
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

  it('should render MovieDetails', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Detail', () => {
    wrapper.update();
    expect(wrapper.find(Detail).exists()).toBeTruthy();
  });
});