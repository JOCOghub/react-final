import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className='homepage'>
        <h1 className="welcome">Welcome to the Museum Organizer!</h1>
        <p>Use this application to create Museums of your choice and add the exhibits you would to see in them</p>
        <p>Navigate the Application using the Links provided in the top left corner</p>
      </div>
    )
  }
}

export default Home