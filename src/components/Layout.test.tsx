import { shallow, ShallowWrapper } from 'enzyme';
import Contacts from './Contacts';
import Header from './Header';
import Layout from './Layout';
import Main from './Main';
import WrapperFavorites from './WrapperFavorites';

describe('Layout', () => {
  let wrapper: ShallowWrapper;

  beforeEach(async () => {
    wrapper = shallow(
      <Layout>
        <>Children</>
      </Layout>
    );
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('should render Main with children component', () => {
    const children = wrapper.find(Main).children();
    expect(children).toBeDefined();
  });

  it('should render Header, WrapperFavorites and Contacts', () => {
    expect(wrapper.find(Header)).toBeDefined();
    expect(wrapper.find(WrapperFavorites)).toBeDefined();
    expect(wrapper.find(Contacts)).toBeDefined();
  });
});
