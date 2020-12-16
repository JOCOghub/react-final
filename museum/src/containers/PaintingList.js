import React, { Component } from 'react'
import Painting from '../components/painting'
import { connect } from 'react-redux'
import { fetchPaintings } from '../actions/paintingActions'


class PaintingList extends Component {

  componentDidMount(){
    this.props.fetchPaintings()
  }

  render() {
    const paintings = this.props.paintings.map(( painting, i ) => <Painting key={i} painting={ painting } />)
    return (
      <div>
        <h3>Painting List</h3>
        <ul className="collection">
          { paintings }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    paintings: state.paintings
  }
}



export default connect(mapStateToProps, { fetchPaintings })(PaintingList)
