import React, { Component } from 'react';
import styled from 'styled-components';
// import { Theme } from './theme';

const Container = styled.div`
  margin: 0 auto 10vh auto;
  width: 90%;
`;

class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { redirect: null };
  }

  handleClick() {
    //alert('Button Clicked');
    window.location.href = '/home';
  }

  render() {
    return (
      <Container>
        <h1>Landing Page</h1>
        <button onClick={this.handleClick}>Go to App</button>
      </Container>
    );
  }
}

export default Landing;