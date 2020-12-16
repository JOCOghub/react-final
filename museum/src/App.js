import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MuseumsContainer from './containers/MuseumsContainer';
import PaintingsContainer from './containers/PaintingsContainer';
import NavBar from './components/NavBar';


//class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //         Welcome to the Museum Homepage!
  //     </div>
  //   );
  // }
  //how do I add text below
  //
  
  function App() {
    return (
      <div>
        <h1 className="header" >Welcome to the Museum Menu!</h1>
        <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/museums" component={MuseumsContainer} />
            <Route path="/paintings" component={PaintingsContainer} />
          </Switch>
        </div>
        </Router>
      </div>
    )
  }
  
  export default App
  
  
 // https://previews.123rf.com/images/castecodesign/castecodesign1607/castecodesign160700853/59487703-vector-beautiful-museum-urban-building-landscape-in-watercolor-hand-drawn-painting.jpg
