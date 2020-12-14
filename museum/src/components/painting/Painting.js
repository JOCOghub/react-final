import React, { Component } from 'react';

class Painting extends Component {


  handleOnClick = () => {
    this.props.deletePainting(this.props.painting.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.painting.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Painting;
