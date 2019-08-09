import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSendUserEmail, getSenderErrorState, getSenderUsername } from "../../redux/modules/sender";
import { SendForm, UserBoxSender } from "../../components";

const renderContent = ({ username, error, fetchSendUserEmail }) =>
	Boolean(username) ? (
		<UserBoxSender username={username} />
	) : (
		<SendForm error={error} submitFunc={fetchSendUserEmail} />
	);

const mapStateToProps = store => {
	return {
		error: getSenderErrorState(store),
		username: getSenderUsername(store),
	};
};

export const Sender = connect(
	mapStateToProps,
	{ fetchSendUserEmail }
)(renderContent);
