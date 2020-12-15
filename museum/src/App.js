import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MuseumsContainer from './containers/MuseumsContainer';
import PaintingsContainer from './containers/PaintingsContainer';
import NavBar from './components/NavBar';


class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //         Welcome to the Museum Homepage!
  //     </div>
  //   );
  // }
  //how do I add text below
  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route path="/museums" component={MuseumsContainer} />
            <Route path="/paintings" component={PaintingsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }

}
//render a Welcome message and navbar. Must imoport components and containers
export default App;
