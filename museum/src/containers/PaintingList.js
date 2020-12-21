import React, { Component } from 'react'
import Painting from '../components/painting'
import { connect } from 'react-redux'
import { fetchPaintings } from '../actions/paintingActions'

class PaintingList extends Component {

  componentDidMount(){
    this.props.fetchPaintings()
  }

  render() {
    const { paintings, museumId} = this.props;
    const associatedPaintings = paintings.filter(painting => painting.museum_id === museumId);
    
    const paintingList = associatedPaintings.map((painting) => {
      return <Painting key={painting.id} painting={painting} />
    })

    return (
      <div>
        <h3>Exhibit List</h3>
        <ul className="collection">
          { paintingList }
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
