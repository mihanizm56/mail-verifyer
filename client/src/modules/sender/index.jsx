import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchSendUserEmail,
	createNewMail,
	getSenderErrorState,
	getSenderUsername,
	getSenderLoadingState,
} from "../../redux/modules/sender";
import { SendForm, UserBoxSender, Loader } from "../../components";

const contentSwitcher = ({ username, error, fetchSendUserEmail, isLoading, createNewMail }) => {
	if (Boolean(isLoading)) {
		return <Loader />;
	}

	if (Boolean(username)) {
		return <UserBoxSender username={username} handleReset={createNewMail} />;
	}

	return <SendForm error={error} submitFunc={fetchSendUserEmail} />;
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
