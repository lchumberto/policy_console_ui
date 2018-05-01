import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './modules/app/app';
import Root from './root';

describe('<Root />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Root />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it ('renders an <App /> component', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find(App)).to.have.length(1);
  });
});
