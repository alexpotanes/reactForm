import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonSubmit extends Component {

	render() {
		return (
			<button className={this.props.className} type="submit" >{this.props.children}</button>
		);
	}
}

export default ButtonSubmit;