import { mount, ReactWrapper } from 'enzyme';
import Container from './Container';
import Footer from './Footer';

jest.mock('./Container', () => () => <>Container</>);

describe('should be rendered without crashing', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<Footer />);
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it('should render Footer Component without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Container', () => {
    expect(wrapper.find(Container)).toBeTruthy();
  });

  it('should render paragraph without crashing', () => {
    expect(
      wrapper.contains(
        <p className="footer-details">Created by students of sigma software</p>
      )
    ).toBeDefined();
  });

  it('should render an appropriate text in paragraph', () => {
    expect(wrapper.text().includes('® All rights reserved')).toBeDefined();
  });
});
