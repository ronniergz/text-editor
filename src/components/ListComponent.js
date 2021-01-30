import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from './theme';

const Container = styled.div`
  margin: 0 auto 10vh auto;
  width: 90%;
`;

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: null };
  }

  render() {
    return (
      <Container>
        <h1>List Page</h1>
      </Container>
    );
  }
}

export default List;