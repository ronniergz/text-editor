import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from './theme';

const Container = styled.div`
  margin: 0 auto 10vh auto;
  width: 90%;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: null };
  }

  render() {
    return (
      <Container>
        <h1>Home Page</h1>
      </Container>
    );
  }
}

export default Home;