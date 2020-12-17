import React, { Component } from 'react'
import { fetchMuseums } from '../actions/museumActions'
import { connect } from 'react-redux'


export class MuseumShow extends Component {
 
  componentDidMount(){
    this.props.fetchMuseums()
  }

  render() {
    let paramsId = parseInt(this.props.match.params.id, 10)
    const { name } = this.props.museums.find( museum => museum.id === paramsId);
    return (
      <div>
        <h3>{ name }</h3>
      </div>
    )
  }
}
  const mapStateToProps = state => {
    return {
      museums: state.museums
    }
  }

export default connect(mapStateToProps, { fetchMuseums })(MuseumShow)


