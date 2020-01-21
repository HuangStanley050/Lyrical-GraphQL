import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

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
    return (
      <div>
        {this.renderSongs()}
        <div>
          <Link className="btn-floating btn-large red right" to="/songs/new">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default graphql(query)(SongList);
