import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("./components/atoms", () => ({
	OpenSansText: "OpenSansTextMock",
	Button: "ButtonMock",
	LinkButton: "LinkButtonMock",
	SVGIcon: "SVGIconMock",
}));

jest.mock("react-router-dom", () => ({
	NavLink: "NavLinkMock",
}));

jest.mock("react", () => {
	const react = jest.requireActual("react");

	return { ...react, memo: component => component };
});

configure({ adapter: new Adapter() });
