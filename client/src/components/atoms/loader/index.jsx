import React from "react";
import loaderIcon from "../../../assets/icons/icon-loading.svg";
import "../../../styles/keyframes.css";
import "./loader.css";

export const Loader = () => (
	<div className="loader">
		<object type="image/svg+xml" data={`${loaderIcon}`} className="loader__icon" alt="icon">
			>Your browser does not support SVGs
		</object>
	</div>
);
