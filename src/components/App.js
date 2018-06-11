import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Players from './Players';
import Teams from './Teams';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home}>Home</Route>
          <Route path='/players' component={Players}>Players</Route>
          <Route path='/teams' component={Teams}>Teams</Route>
        </div>
      </Router>
    );
  }
}

export default App;