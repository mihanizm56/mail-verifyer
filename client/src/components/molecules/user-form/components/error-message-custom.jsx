import React from "react";
import "./error-message-custom.css";

export const ErrorMessageCustom = ({ submissionError, error }) => {
	const errorText = Boolean(error) ? error : submissionError;

	return <span className="error-message-custom">{errorText}</span>;
};
