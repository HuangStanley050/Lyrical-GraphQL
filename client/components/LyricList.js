import React from "react";

class LyricList extends React.Component {
  onLike(id) {
    console.log(id);
  }
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <i onClick={() => this.onLike(id)} className="material-icons right">
            thumb_up
          </i>
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
