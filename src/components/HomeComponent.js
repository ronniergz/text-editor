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
  }

  // componentDidMount() {
  //   // get document list from local storage
  //   // console.log(JSON.parse(localStorage.getItem('documentList')));
  //   this.setState({ documentList: JSON.parse(localStorage.getItem('documentList')) || [] });
  // }
  
  // addDocument(document) {
  //     const currentList = this.state.documents;
  //     currentList.push(document);
  //     this.setState({ documents: currentList});
  // }

  handleOpenEditor = doc => () => {
    console.log("Edit: " + doc.title);

    this.setState({
      currentDoc: doc,
      listDisplay: false,
      editorDisplay: true,
    }, () => {
      console.log(JSON.stringify(this.state.currentDoc));
      }
    );

  };

  handleDelete = i => () => {
    // delete document at index 'i'
    let currentList = this.state.documents;
    currentList.splice(i,1);
    this.setState({ documents: currentList});
  }

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
                <button onClick={this.handleDelete(i)}> Delete </button>
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