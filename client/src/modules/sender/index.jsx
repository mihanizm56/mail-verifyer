import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSendUserEmail, getSenderErrorState, getSenderUsername } from "../../redux/modules/sender";
import { SendForm, UserBox } from "../../components";

const renderContent = ({ username, error, fetchSendUserEmail }) => {
	console.log("error in renderContent", error);

	return Boolean(username) ? (
		<UserBox username={username} />
	) : (
		<SendForm error={error} submitFunc={fetchSendUserEmail} />
	);
};

class WrappedComponent extends Component {
	render = () => {
		const { username, error, fetchSendUserEmail } = this.props;
		// const { fetchSendUserEmail, children, senderErrorState } = this.props;
		return renderContent({ username, error, fetchSendUserEmail });
		// return children({ fetchSendUserEmail, error: senderErrorState });
	};
}

const mapStateToProps = store => {
	return {
		error: getSenderErrorState(store),
		username: getSenderUsername(store),
	};
};

export const Sender = connect(
	mapStateToProps,
	{ fetchSendUserEmail }
)(WrappedComponent);
