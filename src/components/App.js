import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

          <Switch>
            <Route exact path='/' component={Home}>Home</Route>
            <Route path='/players' component={Players}>Players</Route>
            <Route path='/teams' component={Teams}>Teams</Route>
            <Route render={() => <h1 className='text-center'>404</h1>}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;