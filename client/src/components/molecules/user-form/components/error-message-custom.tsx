import React from "react";
import "./error-message-custom.css";

type ErrorMessageCustomProps = {
	submissionError: string,
	error: string | false,
};

export const ErrorMessageCustom = ({ submissionError, error }: ErrorMessageCustomProps) => {
	const errorText = Boolean(error) ? error : submissionError;

	return <span className="error-message-custom">{errorText}</span>;
};
