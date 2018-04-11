import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';

class InputSelect extends Component {

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
      <select className="InputSelect" onChange={this.onChange}>
        <option>{this.props.placeholderSelect}</option>
        {
          this.props.optionValue.map (function (item, i) {
            return (<option  key={i} value={item}>{item}</option>);
          })
        }
      </select>
    );
  }
}

export default InputSelect;