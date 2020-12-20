import React, { Component } from 'react'
import Museum from '../components/museum'
import { connect } from 'react-redux'
import { fetchMuseums } from '../actions/museumActions'

class MuseumList extends Component {

  componentDidMount(){
    this.props.fetchMuseums()
  }
                                                              
  render() {
    const museums = this.props.museums.map(( museum ) => <Museum key={museum.id} museum={ museum } />)
    return (
      <div>
        <h3>Museum List</h3>
        <ul className="collection">
          { museums }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    museums: state.museums //state of the props?
  }
}



export default connect(mapStateToProps, { fetchMuseums })(MuseumList)
