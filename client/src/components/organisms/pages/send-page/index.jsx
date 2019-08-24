import React, { memo } from "react";
import { Sender } from "../../../../modules";
import "./send-page.css";

export const SendPage = memo(() => (
	<div className="send-page">
		<Sender />
	</div>
));
