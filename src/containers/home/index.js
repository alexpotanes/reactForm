import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import LayoutPage from "../../components/layouts/layout-page";
import LayoutContent from "../../components/layouts/layout-content";

class Home extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  render() {
    return (
      <LayoutPage>
        <LayoutContent>
          <h1>Главная страница</h1>
          <Link to="/task3">Задача 3</Link>
        </LayoutContent>
      </LayoutPage>
    );
  }
}

export default withRouter(connect(state => ({

}))(Home));
