import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getValidatorLoadingState,
	getValidatorErrorState,
	getValidatorUsername,
	fetchValidateUserEmail,
} from "../../redux/modules/validator";
import { UserBoxVerifyer, ErrorBox, Loader } from "../../components";

class WrappedComponent extends Component {
	componentDidMount() {
		const { fetchValidateUserEmail, token } = this.props;

		fetchValidateUserEmail(token);
	}

	contentSwitcher = ({ username, error, fetchSendUserEmail, isLoading }) => {
		console.log("////////////////", isLoading);

		if (Boolean(isLoading)) {
			return <Loader />;
		}

		if (Boolean(error)) {
			return <ErrorBox error={error} username={username} />;
		}

		return <UserBoxVerifyer username={username} />;
	};

	render = () => {
		const { error, username, isLoading } = this.props;
		return this.contentSwitcher({ error, username, isLoading });
	};
}

const mapStateToProps = store => {
	return {
		isLoading: getValidatorLoadingState(store),
		error: getValidatorErrorState(store),
		username: getValidatorUsername(store),
	};
};

export const Validator = connect(
	mapStateToProps,
	{ fetchValidateUserEmail }
)(WrappedComponent);
