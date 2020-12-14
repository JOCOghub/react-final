import React, { Component } from 'react';
import PaintingInput from '../components/paintings/PaintingInput'
import Paintings from '../components/paintings/Paintings'
import { connect } from 'react-redux'

class PaintingsContainer extends Component {
  render() {
    return (
      <div>
        <PaintingInput
          addPainting={this.props.addPainting}
          museumId={this.props.museum.id}
        />
        <Paintings
          paintings={this.props.paintings}
          museumId={this.props.museum.id}
          deletePainting={this.props.deletePainting}
        />
      </div>
    );
  }
}

const mapStateToProps = ({paintings}) => {
  return {paintings}
}

const mapDispatchToProps = dispatch => ({
  addPainting: painting => dispatch({type: 'ADD_PAINTING', painting}),
  deletePainting: id => dispatch({type: 'DELETE_PAINTING', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PaintingsContainer)
