import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getValidatorLoadingState,
	getValidatorErrorState,
	getValidatorUsername,
	fetchValidateUserEmail,
} from "../../redux/modules/validator";
import { UserBoxVerifyer, ErrorBox } from "../../components";

class WrappedComponent extends Component {
	componentDidMount() {
		const { fetchValidateUserEmail, token } = this.props;

		fetchValidateUserEmail(token);
	}

	renderContent = ({ error, username }) =>
		console.log("///////////", this.props) || Boolean(error) ? (
			<ErrorBox error={error} username={username} />
		) : (
			<UserBoxVerifyer username={username} />
		);

	render = () => {
		const { error, username } = this.props;
		return this.renderContent({ error, username });
	};
}

const mapStateToProps = store => {
	return {
		isLoading: getValidatorLoadingState(store),
		error: getValidatorErrorState(store),
		username: getValidatorUsername(store),
	};
};

export const Approver = connect(
	mapStateToProps,
	{ fetchValidateUserEmail }
)(WrappedComponent);
