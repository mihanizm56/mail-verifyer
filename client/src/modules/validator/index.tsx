import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "ramda";
import * as i18next from "i18next";
import { withTranslation } from "react-i18next";
import { getValidatorErrorState, getValidatorUsername, fetchValidateUserToken } from "../../redux/modules/validator";
import { SuccessModal, ErrorModal, Loader } from "../../components";
import { REDIRECTION_URL_FOR_LINK_BUTTON } from "../../constants";
// import { StoreType } from "../../redux/store";

interface IValidatorContainerProps {
	token?: string;
	username?: string;
	t: i18next.TFunction;
	error?: string;
	fetchValidateUserToken: (value: any) => void;
}

export class ValidatorContainer extends Component<any> {
	componentDidMount = () => this.props.fetchValidateUserToken(this.props.token);

	render = () => {
		const { username, error, t: translate } = this.props;

		if (Boolean(error)) {
			return <ErrorModal error={error} />;
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

const mapStateToProps = (store: any) => ({
	error: getValidatorErrorState(store),
	username: getValidatorUsername(store),
});

// const Wrapped = connect(
// 	mapStateToProps,
// 	{ fetchValidateUserToken }
// )(ValidatorContainer);

// export const Validator: any = withTranslation()(Wrapped);

export const Validator = compose(
	connect(
		mapStateToProps,
		{ fetchValidateUserToken }
	),
	withTranslation()
)(ValidatorContainer);
