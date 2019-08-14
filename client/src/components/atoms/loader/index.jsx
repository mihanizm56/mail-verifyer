import React from "react";
import { SVGComponent } from "../svg-component";
import loaderIcon from "../../../assets/icons/icon-loading.svg";
import "../../../styles/keyframes.css";
import "./loader.css";

export const Loader = () => (
	<div className="loader">
		<SVGComponent path={loaderIcon} />
	</div>
);
