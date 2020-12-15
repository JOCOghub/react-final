import React, { Component } from 'react';
import Painting from './Painting';

class Paintings extends Component {

  render() {

    const { paintings, museumId, deletePainting } = this.props;
    const associatedPaintings = paintings.filter(painting => painting.museumId === museumId);
    
    const paintingList = associatedPaintings.map((painting, index) => {
      return <Painting key={index} painting={painting} deletePainting={deletePainting} />
    })

    return (
      <div>
        <ul>
          {paintingList}
        </ul>
      </div>
    );
  }

};

export default Paintings;