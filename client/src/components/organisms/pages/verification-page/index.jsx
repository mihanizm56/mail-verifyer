import React from "react";
import { Approver } from "../../../../modules";

export const VerificationPage = ({ match: { params: { token } = {} } = {} }) => (
	<div className="verification-page-container">
		<Approver token={token} />
	</div>
);
