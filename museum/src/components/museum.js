import React from 'react'
import { connect } from 'react-redux'
import { removeMuseum } from '../actions/museumActions'


const Museum = ({ museum, removeMuseum }) => {
    return (
    <li className="collection-item">
        {museum.name}
      <button onClick={()=>removeMuseum(museum.id)}>Delete</button>
    </li>
    );
}

export default connect(null, { removeMuseum })(Museum)
 