import { mount, ReactWrapper } from 'enzyme';
import SearchField from './SearchField';

describe('Layout', () => {
  let wrapper: ReactWrapper;

  beforeEach(async () => {
    wrapper = mount(<SearchField />);
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('should render dropdown menu on click', () => {
    wrapper.find('#search').simulate('click');
    console.log(wrapper.find('.dropdown-filter').html);
  });
});
