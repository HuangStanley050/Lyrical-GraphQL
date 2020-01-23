import React, { Component } from "react";
import graphql from "react-apollo";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  changeHandler(e) {
    this.setState({
      content: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>add a lyric</label>
        <input
          value={this.state.content}
          onChange={this.changeHandler}
          type="text"
        />
      </form>
    );
  }
}

export default LyricCreate;
