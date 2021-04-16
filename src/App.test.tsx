import App from './App';
import { mount, ReactWrapper } from 'enzyme';
import Layout from './components/Layout';

jest.mock('./components/Layout', () => () => <>Layout</>);

describe('App', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render App', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render Layout', () => {
    expect(wrapper.find(Layout)).toBeTruthy();
  });
});
