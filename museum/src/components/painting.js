import React from 'react'
import { connect } from 'react-redux'
import { removePainting } from '../actions/paintingActions'

const Painting = ({ painting, removePainting }) => { 
    return (
    <li className="collection-item">
      painting Name: {painting.name}
      <button onClick={()=>removePainting(painting.id)}>Remove painting?</button>
    </li>
    );
}

export default connect(null, { removePainting })(Painting)
