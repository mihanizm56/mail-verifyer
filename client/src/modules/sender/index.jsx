import React, { memo } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {
	fetchSendUserEmail,
	createNewMail,
	getSenderErrorState,
	getSenderUsername,
	getSenderLoadingState,
} from "../../redux/modules/sender";
import { UserForm, SuccessModal } from "../../components";
import { REDIRECTION_URL_FOR_LINK_BUTTON } from "../../constants";
import { errorCreator } from "../../utils/helpers/error-creator";
import { createSendSuccessMessage } from "../../utils/helpers/success-send-message-creator";

export const SenderContainer = memo(({ username, error, fetchSendUserEmail, isLoading, createNewMail }) => {
	let errorText = error && errorCreator(error);

	if (!Boolean(error) && Boolean(username) && !Boolean(isLoading)) {
		return (
			<SuccessModal
				buttonClickRedirectsTo={REDIRECTION_URL_FOR_LINK_BUTTON}
				handleButtonClick={createNewMail}
				successText={createSendSuccessMessage({ username })}
			/>
		);
	}

	return (
		// <div> check if necessary
		<UserForm submissionError={errorText} isLoading={isLoading} submitFunc={fetchSendUserEmail} />
		// </div>
	);
});

const mapStateToProps = store => ({
	isLoading: getSenderLoadingState(store),
	error: getSenderErrorState(store),
	username: getSenderUsername(store),
});

export const Sender = connect(
	mapStateToProps,
	{ fetchSendUserEmail, createNewMail }
)(SenderContainer);
