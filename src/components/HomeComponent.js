import React, { Component } from 'react';
import styled from 'styled-components';
import { Theme } from './theme';

const Container = styled.div`
  margin: 0 auto 10vh auto;
  width: 90%;
`;

const initialState = {
  username: '',
  documentList: [],
};


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleCreateNew = this.handleCreateNew.bind(this);
  }

  componentDidMount() {
    // get document list from local storage
    console.log(JSON.parse(localStorage.getItem('documentList')));
    this.setState({ documentList: JSON.parse(localStorage.getItem('documentList')) || [] });
  }

  handleCreateNew() {
    // create new document
    window.location.href = '/editor';
  };

  render() {
    return (
      <Container>
        <h1>Home Page</h1>
        <button onClick={this.handleCreateNew} >
          Create New Document
        </button>
        <h2>Document List</h2>
      </Container>
    );
  }
}

export default Home;