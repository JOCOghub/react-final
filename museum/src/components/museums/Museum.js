import React, { Component } from 'react';
import PaintingsContainer from '../../containers/PaintingsContainer'

class Museum extends Component {

  handleOnClick() {
    this.props.deleteMuseum(this.props.museum.id);
  }

  render() {
    const { museum } = this.props;

    return (
      <div>
        <li>
          {museum.text}
          <button onClick={() => this.handleOnClick()}> Delete </button>
          <PaintingsContainer museum={museum}/>
        </li>
      </div>
    );
  }
};

export default Museum;
