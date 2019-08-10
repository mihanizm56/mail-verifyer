import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchSendUserEmail,
	getSenderErrorState,
	getSenderUsername,
	getSenderLoadingState,
} from "../../redux/modules/sender";
import { SendForm, UserBoxSender, Loader } from "../../components";

const contentSwitcher = ({ username, error, fetchSendUserEmail, isLoading }) => {
	if (Boolean(isLoading)) {
		return <Loader />;
	}

	if (Boolean(username)) {
		return <UserBoxSender username={username} />;
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
	{ fetchSendUserEmail }
)(contentSwitcher);
