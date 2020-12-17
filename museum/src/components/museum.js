import React from 'react'
import { connect } from 'react-redux'
import { removeMuseum } from '../actions/museumActions'
import { NavLink } from 'react-router-dom'; 

const Museum = ({ museum, removeMuseum }) => {
    return (
    <li className="collection-item">
        {museum.name}
      <button onClick={()=>removeMuseum(museum.id)}>Delete</button>
      <div><NavLink to="/museums/:id">See or add Museum's Exhibits</NavLink></div> Pass props from here 
    </li>
    );
}

export default connect(null, { removeMuseum })(Museum)
 