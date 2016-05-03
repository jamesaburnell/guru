import React from 'react';

class Landing extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			hw: 'Hello Wurld!'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({
			hw: this.state.hw === 'Hello Wurld!' ? 'Bonjour' : 'Hello Wurld!'
		})
	}

	render(){
		return (
			<div onClick={this.handleClick}>{this.state.hw}</div>
		)
	}
}

export default Landing;
