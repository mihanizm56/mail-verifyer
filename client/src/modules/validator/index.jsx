import React, { Component } from "react";
import { connect } from "react-redux";
import {
	getValidatorLoadingState,
	getValidatorErrorState,
	getValidatorUsername,
	fetchValidateUserEmail,
} from "../../redux/modules/validator";
import { SuccessModal, ErrorModal, Loader } from "../../components";

const REDIRECTION_URL_FOR_LINK_BUTTON = "/send";

class ValidatorContainer extends Component {
	componentDidMount() {
		const { fetchValidateUserEmail, token } = this.props;

		fetchValidateUserEmail(token);
	}

	contentSwitcher = () => {
		const { username, error, isLoading } = this.props;

		if (Boolean(error)) {
			return <ErrorModal errorText={error} />;
		}

		if (Boolean(username)) {
			return <SuccessModal buttonClickRedirectsTo={REDIRECTION_URL_FOR_LINK_BUTTON} successText="success verify" />;
		}

		return <Loader />;
	};

	render = () => <div className="verifyer-wrapper">{this.contentSwitcher()}</div>;
}

const mapStateToProps = store => ({
	isLoading: getValidatorLoadingState(store),
	error: getValidatorErrorState(store),
	username: getValidatorUsername(store),
});

export const Validator = connect(
	mapStateToProps,
	{ fetchValidateUserEmail }
)(ValidatorContainer);
