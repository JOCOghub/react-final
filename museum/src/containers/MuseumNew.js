import React, { Component } from 'react'
import { addMuseum } from '../actions/museumActions'
import { connect } from 'react-redux'

export class MuseumNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      species: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // add the museum
    this.props.addMuseum( this.state );
    // redirect to /museums
    this.props.history.push('/museums');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Create museum</h3>
        <div className="input-field">
          <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          <label htmlFor="name">museum Name</label>
        </div>

        <input type="submit" value="Create Museum" className="btn" />
      </form>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     addMuseum: museum => dispatch(addMuseum(museum))
//   }
// }



export default connect(null, { addMuseum })(MuseumNew)
