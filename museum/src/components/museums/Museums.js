import React, { Component } from 'react';
import Museum from './Museum';

class Museums extends Component {

  render() {
    const { museums, deleteMuseum } = this.props;
    const museumList = museums.map(museum => {
      return (
        <Museum
            key={museum.id}
            museum={museum}
            deleteMuseum={deleteMuseum}
        />
      )
    });

    return(
      <ul>
        {museumList}
      </ul>
    );
  }
};

export default Museums;
