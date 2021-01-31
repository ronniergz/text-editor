import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import styled from 'styled-components';
//import { Theme } from './theme';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
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
  documentName: 'Untitled',
  docuementDate: Date.now(),
  documentBody: '',
  nameInput: '',
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
  };

  handleExitDoc(e) {
    alert('Exiting document.  Are you sure you saved!?');
    e.preventDefault();
    window.location.href = '/home';
  };

  handleSave(e) {
    e.preventDefault();

    // # save title and body to local storage

    // get current data from local storage
    let currentDocs = JSON.parse(localStorage.getItem("documentList"));
    // check if document title already exists

    // No?  Add new document
    let

      alert('Document Saved');
  };

  handleChange(e) {
    this.setState({ nameInput: e.target.value });
  }

  handleRename(e) {
    e.preventDefault();
    console.log("handleRename");
    const newName = this.state.nameInput;
    this.setState({
      documentName: newName,
      nameInput: '',
    }, () => console.log(this.state))
    alert(newName);
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

  render() {
    return (
      <Container>
        <h1>Editor Page</h1>
        <form>
          <h4>{this.state.documentName}</h4>
          <ButtonGroup>
            <Button1 onClick={this.handleExitDoc}>Exit</Button1>
            <Button2 onClick={this.showModal.bind(this)}>Rename</Button2>
            <Button3 onClick={this.handleSave}>Save</Button3>
          </ButtonGroup>
          <Document />
        </form>

        <Rodal visible={this.state.modalVisible} onClose={this.hideModal.bind(this)}>
          <div>
            Rename Modal
            <form onSubmit={this.handleRename}>
              <label htmlFor="nameEdit" >New Name</label>
              <input type="text" value={this.state.nameInput} onChange={this.handleChange} id="nameEdit" name="nameInput" />
              <button type="submit">Save</button>
            </form>
          </div>
        </Rodal>
      </Container>
    );
  }
}
export default Editor;