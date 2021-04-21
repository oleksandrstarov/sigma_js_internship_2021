import {ReactWrapper, mount} from 'enzyme';
import Slider from './Slider';

const setUp = (slidesAmount:number) => mount(<Slider>{ new Array(slidesAmount).fill(null).map((_, i) => (<div className="slide" key={i}>Slide</div>)) }</Slider>)

describe('Slider', () => {
  let component:ReactWrapper;

  beforeEach(() => {
    component = setUp(1);
    console.log(component)
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  })

  it('should not render left button for three elements', () => {
    component = setUp(3);
    expect(component.find('.prev-arrow').exists()).toBeFalsy();
  })

  it('should not render right button for three elements', () => {
    component = setUp(3);
    expect(component.find('.next-arrow').exists()).toBeFalsy();
  })

  it('should render left button', () => {
    component = setUp(30);
    component.find('.default-slider').instance().style.width = `100px`;
    component.update();
    expect(component.find('.next-arrow').exists()).toBeFalsy();
  })
});