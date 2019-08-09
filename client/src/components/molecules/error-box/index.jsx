import React from "react";

export const ErrorBox = ({ error, username }) => {
	return (
		<div>
			<p>error when verificate</p>
			<p>error {error}</p>
			<p>username {username}</p>
		</div>
	);
};
