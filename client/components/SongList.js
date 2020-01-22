import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({
        variables: {
          id
        }
      })
      .then(() => {
        this.props.data.refetch();
      });
  }
  renderSongs() {
    if (!this.props.data.loading) {
      return this.props.data.songs.map(({ title, id }) => {
        return (
          <li key={id}>
            {title}
            <i onClick={() => this.onSongDelete(id)} className="material-icons">
              delete
            </i>
          </li>
        );
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
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      title
      id
    }
  }
`;
export default graphql(mutation)(graphql(query)(SongList));
