import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MuseumNew from './containers/MuseumNew';
import NavBar from './components/NavBar';
import MuseumList from './containers/MuseumList';
import MuseumShow from './containers/MuseumShow';
import Top20 from './components/Top20'

class App extends Component {

  //  constructor() {
  //    super();

  //   this.state = {
  //   id: 0,
  //    museums: []
  //   }
  //  }

  //  addMuseum = museum => {
  //   museum.id = this.state.id + 1;

  //   this.setState({
  //   museums: [...this.state.museums, museum],
  //   id: this.state.id + 1
  //   });
  // }

  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/Top20" component={Top20} />
            <Route exact path="/" component={Home} />
            <Route exact path="/museums/new" component={MuseumNew} />
            <Route exact path="/museums" component={MuseumList} />
            <Route exact path="/museums/:id" component={MuseumShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
