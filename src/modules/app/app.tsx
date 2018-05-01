import * as React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import Home from '../home/home';

const Header = () => (
  <header>
    React Router Example:
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blank">Blank Page</Link></li>
      </ul>
    </nav>
  </header>
);

const Blank = () => null;

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blank" component={Blank} />
    </Switch>
  </main>
);

class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
