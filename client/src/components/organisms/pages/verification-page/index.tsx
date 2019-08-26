import React, { memo } from "react";
import { Validator } from "../../../../modules";
import "./verification-page.css";

interface IRouterWithToken {
	match?: {
		params?: {
			token?: string,
		},
	};
}

export const VerificationPage = memo((props: IRouterWithToken) => {
	const { match: { params: { token = "" } = {} } = {} } = props;

	return (
		<div className="verification-page">
			<Validator token={token} />
		</div>
	);
});
