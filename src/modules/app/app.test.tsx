import * as React from 'react';

import { assert } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import App from './app';

if (!App.prototype.componentDidMount) {
  App.prototype.componentDidMount = () => undefined;
}
const componentDidMountSpy = spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it ('calls componentDidMount', () => {
    shallow(<App />);
    assert.isTrue(componentDidMountSpy.calledOnce);
  });
});

