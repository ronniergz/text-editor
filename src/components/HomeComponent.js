import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from './EditorComponent';
// import { Theme } from './theme';

const Container = styled.div`
  margin: 0 auto 10vh auto;
  width: 90%;
`;

const DocumentList = styled.div`
`;

const initialState = {
  listDisplay: true,
  editorDisplay: false,
  currentDoc: {
    title: 'Untitled',
    date: '',
  },
  documents: [
    {
      title: 'First Document',
      date: '11/5/2001',
      body: 'ajasfasiopjweqkofjiosj qw  nl;ks anlfk ao f f nlkw nowkqn ',
    },
    {
      title: 'Second Document',
      date: '12/8/2012',
      body: 'jads;klf klsj l; jkl jsakl fjhjew jr jkbkj bkjr wkberkjwbqknrb qk bknw k jwhjkr jhr ljk',
    },
  ]
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    // this.addDocument = this.addDocument.bind(this);
    this.handleOpenEditor = this.handleOpenEditor.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.test = this.test.bind(this);
  }

  handleOpenEditor = doc => () => {
    this.setState({
      currentDoc: doc,
      listDisplay: false,
      editorDisplay: true,
    });

  };

  handleDelete(i) { 
    let currentList = this.state.documents;
    currentList.splice(i,1);
    this.setState({ documents: currentList});
  };

  test() {

  }; 

  render() {
    return (
      <Container>
        <h1>Text Editor</h1>

        <DocumentList style={{display: this.state.listDisplay ? 'block' : 'none'}}> 
          <button onClick={this.handleOpenEditor} >
            Create New Document
          </button>
          <h2>Document List</h2>
          {this.state.documents.map((e,i) => {
            return (
              <div key={i}>
                <p >{this.state.documents[i].title}</p>
                <button onClick={this.handleOpenEditor(this.state.documents[i])}> Edit </button>
                <button onClick={() => {if(window.confirm('Are you sure you want to delete this file?')){this.handleDelete(i)};}}> Delete </button>
              </div>
            );
          })}
        </DocumentList>

        <Editor 
          display={this.state.editorDisplay ? 'block' : 'none'}
          document={this.state.currentDoc}
          rename=''
          save=''
        />
        
      </Container>
    );
  }
}

export default Home;