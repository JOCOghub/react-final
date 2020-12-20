import React, { Component } from 'react'
import { addPainting } from '../actions/paintingActions'
import { connect } from 'react-redux'
//import PaintingList from './PaintingList'

export class PaintingNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPainting( this.state, {museumId: this.props.museumId } );
    // <PaintingList />
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Add Exhibit</h3>
        <div className="input-field">
          <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          <label htmlFor="name">Exhibit Name</label>
        </div>

        <input type="submit" value="Create Painting" className="btn" /> 
      </form>
    )
  }
}

export default connect(null, { addPainting })(PaintingNew)
