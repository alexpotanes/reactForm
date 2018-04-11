import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';

class InputRange extends Component {

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
      <div className="InputRange">
        <input type="range" min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.onChange} value={this.props.value} />
        <div className="rangeCounterWrap"><span className="rangeCounter" style={{left: this.props.value + "%"}}>{this.props.value}</span></div>
      </div>
    );
  }
}

export default InputRange;