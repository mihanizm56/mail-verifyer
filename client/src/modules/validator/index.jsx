import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { getValidatorErrorState, getValidatorUsername, fetchValidateUserToken } from "../../redux/modules/validator";
import { SuccessModal, ErrorModal, Loader } from "../../components";
import { REDIRECTION_URL_FOR_LINK_BUTTON } from "../../constants";

export class ValidatorContainer extends Component {
	componentDidMount = () => this.props.fetchValidateUserToken(this.props.token);

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
	error: getValidatorErrorState(store),
	username: getValidatorUsername(store),
});

const Wrapped = connect(
	mapStateToProps,
	{ fetchValidateUserToken }
)(ValidatorContainer);

export const Validator = withTranslation()(Wrapped);
