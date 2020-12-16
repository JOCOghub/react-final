import React from 'react'
import { connect } from 'react-redux'
import { removeMuseum } from '../actions/museumActions'

const Museum = ({ museum, removeMuseum }) => {
    return (
    <li className="collection-item">
      museum Name: {museum.name}
      <button onClick={()=>removeMuseum(museum.id)}>Remove museum?</button>
    </li>
    );
}

export default connect(null, { removeMuseum })(Museum)
