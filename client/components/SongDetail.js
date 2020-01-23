import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";

const SongDetail = props => {
  const { song } = props.data;
  if (!song) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
    </div>
  );
};

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
