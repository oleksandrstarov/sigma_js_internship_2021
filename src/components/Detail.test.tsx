import { mount, ReactWrapper } from 'enzyme';

import Detail from './Detail';

jest.mock('', () => () => 'PopularMovie');

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

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should render with textContent prop', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render not render without textContent prop', () => {
    wrapper.setProps({ title: 'test', textContent: null });

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
