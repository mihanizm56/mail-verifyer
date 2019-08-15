import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchSendUserEmail,
	createNewMail,
	getSenderErrorState,
	getSenderUsername,
	getSenderLoadingState,
} from "../../redux/modules/sender";
import { UserForm, UserBoxSender, Loader, ErrorModal, SuccessModal } from "../../components";

const contentSwitcher = ({ username, error, fetchSendUserEmail, isLoading, createNewMail }) => {
	if (Boolean(error)) {
		return <ErrorModal errorText={error} handleButtonClick={createNewMail} />;
	}

	if (Boolean(isLoading)) {
		return <Loader />;
	}

	if (Boolean(username)) {
		return (
			<SuccessModal
				username={username}
				buttonClickRedirectsTo="/send"
				handleButtonClick={createNewMail}
				successText="successText"
			/>
		);
	}

	return <UserForm error={error} submitFunc={fetchSendUserEmail} />;
};

const renderContent = props => <div className="sender-wrapper">{contentSwitcher(props)}</div>;

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
)(renderContent);
