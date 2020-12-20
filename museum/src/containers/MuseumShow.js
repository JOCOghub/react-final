import React, { Component } from 'react'
import { fetchMuseums } from '../actions/museumActions'
import { connect } from 'react-redux'
import PaintingNew from './PaintingNew'
import PaintingList from './PaintingList'


export class MuseumShow extends Component {
 
  componentDidMount(){
    this.props.fetchMuseums()
  }

  render() {
    let paramsId = parseInt(this.props.match.params.id, 10)
    const { name, id } = this.props.museums.find( museum => museum.id === paramsId);
    return (
      <div>
        <h3>{ name }</h3>
        <PaintingNew  museumId={id} /> 
        <PaintingList museumId={id} /> 
      </div>
    )
  }
}
  const mapStateToProps = state => {
    return {
      museums: state.museums,
    }
  }

export default connect(mapStateToProps, { fetchMuseums })(MuseumShow)


