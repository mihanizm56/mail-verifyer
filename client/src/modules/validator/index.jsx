import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
	getValidatorLoadingState,
	getValidatorErrorState,
	getValidatorUsername,
	fetchValidateUserEmail,
} from "../../redux/modules/validator";
import { SuccessModal, ErrorModal, Loader } from "../../components";
import { REDIRECTION_URL_FOR_LINK_BUTTON } from "../../constants";

export class ValidatorContainer extends Component {
	componentDidMount = () => {
		const { fetchValidateUserEmail, token } = this.props;

		fetchValidateUserEmail(token);
	};

	render = () => {
		const { username, error, t: translate } = this.props;

		if (Boolean(error)) {
			return <ErrorModal errorText={error} />;
		}

		if (Boolean(username)) {
			return (
				<SuccessModal
					buttonClickRedirectsTo={REDIRECTION_URL_FOR_LINK_BUTTON}
					successText={translate("success.verified", { username })}
				/>
			);
		}

		return <Loader />;
	};
}

const mapStateToProps = store => ({
	isLoading: getValidatorLoadingState(store),
	error: getValidatorErrorState(store),
	username: getValidatorUsername(store),
});

const Wrapped = connect(
	mapStateToProps,
	{ fetchValidateUserEmail }
)(ValidatorContainer);

export const Validator = withTranslation()(Wrapped);
