import React, { Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form>
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

export default SongCreate;
