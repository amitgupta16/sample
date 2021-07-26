import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    job: "",
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input type="text" name="job" onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
