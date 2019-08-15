import React, { Component } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import {
	fetchSendUserEmail,
	createNewMail,
	getSenderErrorState,
	getSenderUsername,
	getSenderLoadingState,
} from "../../redux/modules/sender";
import { UserForm, UserBoxSender, Loader, ErrorModal, SuccessModal } from "../../components";
import { REDIRECTION_URL_FOR_LINK_BUTTON } from "../../constants";

const createSendSuccessMessage = ({ username }) => {
	const { t: translate } = useTranslation();
	return translate("success.send-email", { username });
};

const contentSwitcher = ({ username, error, fetchSendUserEmail, isLoading, createNewMail }) => {
	if (Boolean(isLoading)) {
		return <Loader />;
	}

	if (Boolean(username)) {
		return (
			<SuccessModal
				buttonClickRedirectsTo={REDIRECTION_URL_FOR_LINK_BUTTON}
				handleButtonClick={createNewMail}
				successText={createSendSuccessMessage({ username })}
			/>
		);
	}

	return <UserForm error={error} submitFunc={fetchSendUserEmail} />;
};

const mapStateToProps = store => {
	return {
		isLoading: getSenderLoadingState(store),
		error: getSenderErrorState(store),
		username: getSenderUsername(store),
	};
};

export const Sender = connect(
	mapStateToProps,
	{ fetchSendUserEmail, createNewMail }
)(contentSwitcher);
