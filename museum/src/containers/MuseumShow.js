import React, { Component } from 'react'

export class MuseumShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let museum = props.museums.find( museum => museum.id === paramsId);

    this.state = {
      museum: museum ? museum : { name: 'N/A'}
    }
  }
//will need to add paintings functions components etc..

  render() {
    const { name } = this.state.museum;
    return (
      <div>
        <h3>{ name }</h3>
      </div>
    )
  }
}

export default MuseumShow
