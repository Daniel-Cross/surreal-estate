import React, { Component } from 'react';
import '../styles/app.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './add-property';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userID: null,
      name: '',
      email: '',
      picture: ''
    };
  }

  handleLogin = response => {
    console.log(response);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            onLogin={this.handleLogin()}
            userID={this.state.userID}
            name={this.state.name}
            email={this.state.email}
            picture={this.state.picture}
          />
          <Switch>
            <Route exact path="/" component={Properties} />
            <Route exact path="/add-property" component={AddProperty} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
