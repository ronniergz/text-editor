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
    this.test = this.test.bind(this);
  };

  handleExitDoc(e) {
   // alert('Exiting document.  Are you sure you saved!?');
    e.preventDefault();
    window.location.href = '/home';
  };

  handleSave(e) {
    e.preventDefault();
    // # save title and body to local storage
    // No?  Add new document
    alert('Document Saved');
  }

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

  test(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.props.document.body));
  }


  render() {
    return (
      <Container style={{display: this.props.display}}>
        <form>
          <h4>{this.props.document.title}</h4>
          <p>{this.props.document.date}</p>
          <ButtonGroup>
            <Button1 onClick={this.handleExitDoc}>Exit</Button1>
            <Button2 onClick={this.showModal.bind(this)}>Rename</Button2>
            <Button3 onClick={this.handleSave}>Save</Button3>
            <button onClick={this.test}>Test</button>
          </ButtonGroup>
          <Document defaultValue={this.props.document.body}></Document>
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