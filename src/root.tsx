import * as React from 'react';

import { Provider } from 'mobx-react';
import rootStore from './root_store';

import { BrowserRouter } from 'react-router-dom';

import App from './modules/app/app';

interface IContextProps {
  children?: React.ReactNode;
}

const Context = (props: IContextProps) => {
  return <Provider {...rootStore}>
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  </Provider>;
};

const Root = () => (
  <Context>
    <App />
  </Context>
);

export default Root;
