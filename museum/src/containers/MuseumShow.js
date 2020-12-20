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
    const { name } = this.props.museums.find( museum => museum.id === paramsId);//why is name a string and not a museum object
    console.log(this.props.museums)          //^what is museum here??
    return (
      <div>
        <h3>{ name }</h3>
        <PaintingNew      />
        <PaintingList       />
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


