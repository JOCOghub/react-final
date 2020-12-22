import React, { Component } from 'react'
import Museum from '../components/museum'
import { connect } from 'react-redux'
import { fetchMuseums } from '../actions/museumActions'

class MuseumList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: ''
    }
  }             



  componentDidMount(){
    this.props.fetchMuseums()
  }
          
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }) 
 }

  render() {
    let query = this.props.museums.filter(museum => museum.name.toUpperCase().includes(this.state.name.toUpperCase()))
    const museums = query.map(( museum ) => <Museum key={museum.id} museum={ museum } />)
    return (
      <div>
        <label>Search for Museums</label>
        <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange } />
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
    museums: state.museums 
  }
}



export default connect(mapStateToProps, { fetchMuseums })(MuseumList)
