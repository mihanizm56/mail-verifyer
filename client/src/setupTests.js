import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("./components/atoms", () => ({
	OpenSansText: "OpenSansTextMock",
	Button: "ButtonMock",
	LinkButton: "LinkButtonMock",
	SVGIcon: "SVGIconMock",
}));

jest.mock("./components/molecules", () => ({
	ErrorModal: "ErrorModalMock",
	SuccessModal: "SuccessModalMock",
	UserForm: "UserFormMock",
}));

jest.mock("./components/organisms", () => ({
	MainWrapper: "MainWrapperMock",
}));

jest.mock("./modules", () => ({
	App: "App",
	Sender: "Sender",
	Validator: "Validator",
}));

jest.mock("./routes", () => ({
	MainRouterLayout: "MainRouterLayout",
}));

jest.mock("react-router-dom", () => ({
	NavLink: "NavLinkMock",
}));

jest.mock("react-redux", () => ({
	connect: () => Component => Component,
}));

jest.mock("react", () => {
	const react = jest.requireActual("react");

	return { ...react, memo: component => component };
});

configure({ adapter: new Adapter() });
