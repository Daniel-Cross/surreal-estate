import React from 'react';
import '../styles/app.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './add-property';

const App = ({}) => (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />

      </Switch>
    </div>
  </Router>
);

export default App;
