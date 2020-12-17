import React, { Component } from 'react'

  class MuseumShow extends Component { //had an export at the beggining of this line b4
    constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let museum = props.museums.find( museum => museum.id === paramsId);

    this.state = {
      museum: museum ? museum : { name: 'N/A'}
    }
  }


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
