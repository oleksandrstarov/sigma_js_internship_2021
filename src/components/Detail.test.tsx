import { mount, ReactWrapper } from 'enzyme';

import Detail from './Detail';

describe('Detail', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Detail title={'test'} textContent={'test1'} />);
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('should render with textContent prop', () => {
    expect(wrapper).toBeDefined();
  });

  it('should not render without textContent prop', () => {
    wrapper.setProps({ title: 'test', textContent: null });
    wrapper.update();

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
