import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

import "./style.less";

import Home from '../home';
import Task3 from '../task3';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return (
      <div className="App">
        <Router history={this.history}>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/task3" component={Task3}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(state => ({

}))(App);