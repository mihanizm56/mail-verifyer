import React, { memo } from "react";
import { SVGIcon } from "../svg-icon";
import loaderIcon from "../../../assets/icons/icon-loading.svg";
import "../../../styles/keyframes.css";
import "./loader.css";

export const Loader = memo(() => (
	<div className="loader">
		<SVGIcon path={loaderIcon} className="loader" />
	</div>
));
