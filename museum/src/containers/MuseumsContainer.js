import React, { Component } from 'react';
import MuseumInput from '../components/museums/MuseumInput'
import Museums from '../components/museums/Museums'
import { connect } from 'react-redux'

class MuseumsContainer extends Component {
  render() {
    return (
      <div>
        <MuseumInput addMuseum={this.props.addMuseum}/>
        <Museums
          museums={this.props.museums}
          deleteMuseum={this.props.deleteMuseum}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ museums: state.museums })

const mapDispatchToProps = dispatch => ({
  addMuseum: text => dispatch({type: 'ADD_MUSEUM', text}),
  deleteMuseum: id => dispatch({type: 'DELETE_MUSEUM', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(MuseumsContainer)
