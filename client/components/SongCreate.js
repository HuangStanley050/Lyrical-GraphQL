import React, { Component } from "react";
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  onSubmit(e) {
    e.preventDefaul();
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <lable>Song Title:</lable>
          <input
            type="text"
            value={this.state.title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}
const mutation = gql`
mutation {
  addSong(title: ) {
    id
    title
  }
}
`;
export default SongCreate;
