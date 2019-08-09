import React, { Component } from "react";
import { fetchSendUserEmail, getSenderErrorState } from "../../redux/modules/sender";
import { connect } from "react-redux";

export class WrappedComponent extends Component {
	render = () => {
		const { fetchSendUserEmail, children, senderErrorState } = this.props;

		return children({ fetchSendUserEmail, error: senderErrorState });
	};
}

const mapStateToProps = store => {
	return {
		senderErrorState: getSenderErrorState(store),
	};
};

export const SenderContainer = connect(
	mapStateToProps,
	{ fetchSendUserEmail }
)(WrappedComponent);
