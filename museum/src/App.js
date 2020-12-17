import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import MuseumNew from './containers/MuseumNew';
import NavBar from './components/NavBar';
import MuseumList from './containers/MuseumList';

class App extends Component {

   constructor() {
     super();

    this.state = {
    id: 0,
     museums: []
    }
   }

   addMuseum = museum => {
    museum.id = this.state.id + 1;

    this.setState({
    museums: [...this.state.museums, museum],
    id: this.state.id + 1
    });
  }

  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/museums/new" component={MuseumNew} />
            <Route exact path="/museums" component={MuseumList} />
            {/* <Route exact path="/museums/:id" render={ props => <MuseumShow {...props} museums={ this.state.museums } />} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
