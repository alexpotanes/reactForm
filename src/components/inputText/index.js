import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';

class InputText extends Component {

  static propTypes = {
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {}
  }

  onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <input 
        className="InputText"
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        value={this.props.value} 
      />
    );
  }
}

export default InputText;