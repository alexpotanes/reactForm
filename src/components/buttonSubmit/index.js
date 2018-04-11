import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';

class ButtonSubmit extends Component {

  render() {
    return (
      <button className="ButtonSubmit" type="submit" >{this.props.children}</button>
    );
  }
}

export default ButtonSubmit;