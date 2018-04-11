import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';

class InputRadio extends Component {

  static propTypes = {
    checked: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func,
    name: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    onChange: ()=>{}
  };

  onChange = (e) => {
    const checked = !this.props.checked || e.target.checked;
    this.props.onChange(checked ? e.target.value : '');
  };

  render() {
    return (
      <label className="InputRadio">
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.onChange} />
        {this.props.children}
      </label>
    );
  }
}

export default InputRadio;