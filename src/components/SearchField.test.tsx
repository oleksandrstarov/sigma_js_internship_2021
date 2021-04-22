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

  it('should render and hide dropdown menu', () => {
    const input = wrapper.find('#search');

    input.simulate('focus');

    const dropdown = wrapper.find('.dropdown-filter');

    expect(dropdown).toBeDefined();

    input.simulate('blur');
  });
});
