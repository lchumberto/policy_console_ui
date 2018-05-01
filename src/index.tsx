import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

import Root from './root';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
