import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import styled from 'styled-components';
//import { Theme } from './theme';

const Container = styled.div`
`;

const Document = styled.textarea`
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 70vh;
  resize: none;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto
`;

const Button1 = styled.button`
  grid-column-start: 2;
  grid-column-start: 2;
`;

const Button2 = styled.button`
  grid-column-start: 3;
  grid-column-start: 3;
`;

const Button3 = styled.button`
  grid-column-start: 4;
  grid-column-start: 4;
`;

const initialState = {
  document: {
    title: '',
    date: '',
    body: '',
  },
  renameInput: '',
  modalVisible: false,
}

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleExitDoc = this.handleExitDoc.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRename = this.handleRename.bind(this);
    //this.handleTest = this.handleTest.bind(this);
  };

  static getDerivedStateFromProps(props) {
    return {document: props.document};
  }

  handleExitDoc(e) {
    e.preventDefault();  // alert('Exiting document.  Are you sure you saved!?');
    window.location.href = '/home';
  };

  handleSave(e) {
    e.preventDefault();
    this.props.save(this.state.document);
  }

  handleChange(e) {
    const input = e.target;   // input element
    const field = input.name;  // 'renameInput' or 'body'
    if (field === 'renameInput') this.setState({ renameInput: input.value });
    const currentDoc = this.state.document;  // current state
    currentDoc[field] = input.value;
    this.setState({ document: currentDoc });
  }

  handleRename(e) {
    e.preventDefault();
    let currentDoc = this.state.document;
    currentDoc.title = this.state.renameInput;
    this.setState({
      document: currentDoc,
      renameInput: '',
    })
    this.hideModal(e);
  };

  showModal(e) {
    e.preventDefault();
    this.setState({ modalVisible: true })
  };

  hideModal(e) {
    e.preventDefault();
    this.setState({ modalVisible: false })
  };

  handleTest(e) {
    e.preventDefault();
    this.props.testFunction("YASSS!");
  };

  render() {
    return (
      <Container style={{display: this.props.display}}>
        <form>
          <h4>{this.state.document.title}</h4>
          <p>{this.state.document.date}</p>
          <ButtonGroup>
            <Button1 onClick={this.handleExitDoc}>Exit</Button1>
            <Button2 onClick={this.showModal.bind(this)}>Rename</Button2>
            <Button3 onClick={this.handleSave}>Save</Button3>
          </ButtonGroup>
          <Document value={this.state.document.body} onChange={this.handleChange} name="body"></Document>
        </form>

        <Rodal visible={this.state.modalVisible} onClose={this.hideModal.bind(this)}>
          <div>
            Rename Modal
            <form onSubmit={this.handleRename}>
              <label htmlFor="nameEdit" >New Name</label>
              <input type="text" placeholder={this.state.document.title} value={this.state.nameInput} onChange={this.handleChange} name="renameInput" />
              <button type="submit">Save</button>
            </form>
          </div>
        </Rodal>

      </Container>
    );
  }
}
export default Editor;