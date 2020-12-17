import React from 'react'
import { connect } from 'react-redux'
import { removeMuseum } from '../actions/museumActions'
import { NavLink } from 'react-router-dom'; 
import { MuseumShow } from '../containers/MuseumShow'

const Museum = ({ museum, removeMuseum }) => {
    return (
    <li className="collection-item">
        {museum.name}
      <button onClick={()=>removeMuseum(museum.id)}>Delete</button>
      <div><NavLink to={`/museums/${museum.id}`} render={ props => <MuseumShow  museum={ museum } />}>See or add Museum's Exhibits</NavLink></div> ------------------------------Pass props from here 
      <br/>    
    </li>
    );
}
                                                                          // {...props}   this.state.museum //museum is still there^   
export default connect(null, { removeMuseum })(Museum)
 