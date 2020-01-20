import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    if (!this.props.data.loading) {
      return this.props.data.songs.map(song => {
        return <li key={song.id}>{song.title}</li>;
      });
    }
    return <div>Loading...</div>;
  }
  render() {
    return <div>{this.renderSongs()}</div>;
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
