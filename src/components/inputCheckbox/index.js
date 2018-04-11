import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends Component {

  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.any,
    valueNot: PropTypes.any,
  };

  static defaultProps = {
    value: true,
    valueNot: false,
    onChange: ()=>{}  
  };

  onChange = () => {
    const checked = !this.props.checked;
    this.props.onChange(checked ? this.props.value : this.props.valueNot);
  };

  render() {
    return (
      <label className={`InputCheckbox InputCheckbox_${(this.props.checked) ? 'checked' : 'unchecked'}`}>
        <input 
          type="checkbox" 
          name={this.props.name} 
          value={this.props.children} 
          checked={this.props.checked}
          onChange={this.onChange}
        />
        {this.props.children}
      </label>
    );
  }
}

export default InputCheckbox;