import React, { Component } from "react";

export class MainPage extends Component {
	state = {
		message: "",
	};

	componentDidMount() {
		fetch("http://localhost:8080/api")
			.then(data => data.json())
			.then(data => this.setState({ message: data.message }));
	}

	render = () => (
		<div className="main-page">
			<h1>Hello World!</h1>
			<h1>{this.state.message}</h1>
		</div>
	);
}
