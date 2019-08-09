import React, { Component } from "react";
import { SenderContainer } from "../../containers";
import { SendForm } from "../../components";

export const SendFormModule = () => {
	return (
		<SenderContainer>
			{({ fetchSendUserEmail, error }) => <SendForm error={error} submitFunc={fetchSendUserEmail} />}
		</SenderContainer>
	);
};
