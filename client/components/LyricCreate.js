import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

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

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      })
      .then(() => this.setState({ content: "" }));
  }
  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <label>add a lyric</label>
        <input
          value={this.state.content}
          onChange={this.changeHandler.bind(this)}
          type="text"
        />
      </form>
    );
  }
}
const mutation = gql`
  mutation AddLyric($songId: ID, $content: String) {
    addLyricToSong(content: $content, songId: $songId) {
      title
      id
      lyrics {
        id
        content
      }
    }
  }
`;
export default graphql(mutation)(LyricCreate);
