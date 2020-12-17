import React from 'react'
import { connect } from 'react-redux'
import { removeMuseum } from '../actions/museumActions'
import { Link } from 'react-router-dom'; 

const Museum = ({ museum, removeMuseum }) => {
    return (
    <li className="collection-item">
        {museum.name}
      <button onClick={()=>removeMuseum(museum.id)}>Delete</button>
      <div><Link to={`/museums/${museum.id}`}>See or add Museum's Exhibits</Link></div> ------------------------------
      <br/>    
    </li>
    );
}
                                  
export default connect(null, { removeMuseum })(Museum)
 