import React from 'react';

class Landing extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hw: 'Hello Wurld!'
		};
	}
	render(){
		return (
			<div>{this.state.hw}</div>
		)
	}
}

export default Landing;