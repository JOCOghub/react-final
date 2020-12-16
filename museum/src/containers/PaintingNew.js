import React, { Component } from 'react'
import { addPainting } from '../actions/paintingActions'
import { connect } from 'react-redux'

export class PaintingNew extends Component {

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
    // add the painting
    this.props.addPainting( this.state );
    // redirect to /paintings
    this.props.history.push('/paintings');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Create painting</h3>
        <div className="input-field">
          <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          <label htmlFor="name">painting Name</label>
        </div>

        <input type="submit" value="Create Painting" className="btn" /> 
      </form>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     addPainting: painting => dispatch(addPainting(painting))
//   }
// }



export default connect(null, { addPainting })(PaintingNew)
