import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav1 from './Components/Nav1';
import Home1 from './Components/Home1';
import Login1 from './Components/Login1';
import Test from './Components/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav1 />
        <Switch>
          <Route path="/Home" component={Home1}></Route>
          <Route path="/Login" component={Login1}></Route>
          <Route path="/Test" component={Test}></Route>
          <Route path="/" component={Home1}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
