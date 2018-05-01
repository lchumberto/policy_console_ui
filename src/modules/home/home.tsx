import * as React from 'react';

import styled from 'styled-components';

import Logo from '../../common/logo/logo';

import logo from './logo.svg';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

class Home extends React.Component {
  public render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          MobX React example:
          <br />
          Primary click React logo to reverse rotation direction.
          <br />
          Secondary click to pause.
          <br />
          <br />
          To get started, edit <code>src/modules/app/app.tsx</code> and save to
          reload.
        </Intro>
      </Container>
    );
  }
}

export default Home;
