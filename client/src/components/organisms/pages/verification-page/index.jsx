import React from "react";
import { Validator } from "../../../../modules";

export const VerificationPage = ({ match: { params: { token } = {} } = {} }) => (
	<div className="verification-page-container">
		<Validator token={token} />
	</div>
);
