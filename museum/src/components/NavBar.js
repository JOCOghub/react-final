import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <ul className="right">
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/museums/new">Create New Museum</NavLink></li>
            <li><NavLink to="/museums">All museums</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar