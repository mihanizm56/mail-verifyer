import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchSendUserEmail,
	createNewMail,
	getSenderErrorState,
	getSenderUsername,
	getSenderLoadingState,
} from "../../redux/modules/sender";
import { SendForm, UserBoxSender, Loader, ErrorModal, SuccessModal } from "../../components";

class SenderContainer extends Component {
	contentSwitcher = ({ username, error, fetchSendUserEmail, isLoading, createNewMail }) => {
		if (Boolean(error)) {
			return <ErrorModal />;
		}

		// if (Boolean(isLoading)) {
		// 	return <Loader />;
		// }

		if (Boolean(username)) {
			return <UserBoxSender username={username} handleReset={createNewMail} />;
		}

		return <SendForm error={error} submitFunc={fetchSendUserEmail} />;
	};
}

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
)(SenderContainer);
