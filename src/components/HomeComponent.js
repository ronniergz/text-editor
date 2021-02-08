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
  currentDoc: {},
  documents: [],
};

// const documents =  [
//   {
//     title: 'First Document',
//     date: '11/5/2001',
//     body: 'ajasfasiopjweqkofjiosj qw  nl;ks anlfk ao f f nlkw nowkqn ',
//   },
//   {
//     title: 'Second Document',
//     date: '12/8/2012',
//     body: 'jads;klf klsj l; jkl jsakl fjhjew jr jkbkj bkjr wkberkjwbqknrb qk bknw k jwhjkr jhr ljk',
//   },
// ]

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleCreateNew = this.handleCreateNew.bind(this);
    this.handleOpenEditor = this.handleOpenEditor.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount = () => {
    // get document list from local storage
    this.setState({documents: JSON.parse(localStorage.getItem('documents')) || []});
  }

  handleCreateNew = (e) => {
    e.preventDefault();
    let openDoc = {
      title: 'Untitled',
      date: Date.now(),
      body: '',
      new: true,
    };
    this.setState({currentDoc: openDoc}, () => {
      this.handleOpenEditor(e, this.state.currentDoc);
    });
  }
  
  handleOpenEditor = (e, doc, index) => {
    let openDoc = doc;
    openDoc.index = index;
    this.setState({
      currentDoc: openDoc,
      listDisplay: false,
      editorDisplay: true,
    });
  }

  handleSave = (doc) => {
    let currentDocList = this.state.documents;
    // existing doc?
    if (doc.new === false) { // yes? update state
      currentDocList[doc.index] = doc;
      this.setState({documents: currentDocList});
    }
    else { // no? , check for existing filenames
      let existingTitles = this.state.documents.filter(document => doc.title === document.title);
      if (existingTitles.length > 0) {
        alert("Name Already Taken!");
        return;
      } else {  //add to document list
        doc.new = false;
        currentDocList.push(doc); 
      }
    }   // update local storage
    localStorage.setItem('documents', JSON.stringify(currentDocList));
    alert("Changes Saved!");
  }

  handleDelete = (i) => { 
    let currentList = this.state.documents;
    currentList.splice(i,1);
    this.setState({ documents: currentList});
    localStorage.setItem('documents', JSON.stringify(currentList));
  }

  test(value) {
    console.log("Test: " + value);
  }

  render() {
    return (
      <Container>
        <h1>Text Editor</h1>

        <DocumentList style={{display: this.state.listDisplay ? 'block' : 'none'}}> 
          <button onClick={this.handleCreateNew} >
            Create New Document
          </button>
          <h2>Document List</h2>
          {this.state.documents.map((e,i) => {
            return (
              <div key={i}>
                <p>{this.state.documents[i].title}</p>
                <button onClick={(e) => {this.handleOpenEditor(e, this.state.documents[i], i)}}> Edit </button>
                <button onClick={() => {if(window.confirm('Are you sure you want to delete this file?')){this.handleDelete(i)};}}> Delete </button>
              </div>
            );
          })}
        </DocumentList>

        <Editor 
          display={this.state.editorDisplay ? 'block' : 'none'}
          document={this.state.currentDoc}
          rename=''
          save={this.handleSave}
          testFunction={this.test}
        />
        
      </Container>
    );
  }
}

export default Home;