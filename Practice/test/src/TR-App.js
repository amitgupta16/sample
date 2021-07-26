import React, { Component } from "react";
import "./App.css";
import Table from "./TR-Table.js";
import Form from "./TR-Form.js";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((value, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <h3>Tania Rascia</h3>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;