import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
		username: 'itsBruno'
	};

	userNameHandler = (event) => {
		this.setState({ username: event.target.value });
	};

	render() {
		return (
			<div className="App">
				<h1>base syntax problem</h1>
				<UserInput onInput={this.userNameHandler} currentUser={this.state.username} />
				<UserOutput username={this.state.username} />
				<UserOutput username="Malcom" />
			</div>
		);
	}
}

export default App;
