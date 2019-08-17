import React from "react";
import { Validator } from "../../../../modules";
import "./verification-page.css";

export const VerificationPage = ({ match: { params: { token } = {} } = {} }) => (
	<div className="verification-page">
		<Validator token={token} />
	</div>
);
