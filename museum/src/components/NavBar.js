import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          {/* <NavLink to="/" className="brand-logo">Menu</NavLink> */}
          <ul className="right">
            <li><NavLink to="/museums">Museums</NavLink></li>
            <li><NavLink to="/paintings">Paintings</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar