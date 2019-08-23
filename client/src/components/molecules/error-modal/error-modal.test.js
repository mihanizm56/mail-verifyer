import React, { createElement } from "react";
import { shallow } from "enzyme";
import { ErrorModal } from "../error-modal";

describe("test ErrorModal", () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	// SVGIconMock
	// OpenSansTextMock
	// OpenSansTextMock
	// LinkButtonMock

	describe("test render contract", () => {
		it("render snap with all props", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render SVGIcon component", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const SVGIcon = component.find("SVGIconMock");

			expect(SVGIcon.length).toEqual(1);
		});
		it("render OpenSansText two components", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const OpenSansTexts = component.find("OpenSansTextMock");

			expect(OpenSansTexts.length).toEqual(2);
		});
		it("render LinkButton two components", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");

			expect(LinkButton.length).toEqual(1);
		});
	});
	describe("test props contract", () => {
		it("set path prop to the SVGIcon", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const SVGIcon = component.find("SVGIconMock");
			const iconPath = SVGIcon.props().path;

			expect(iconPath).toBeDefined();
		});
		it("set text prop to the first OpenSansText", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const OpenSansText = component.find("OpenSansTextMock").first();
			const textValue = OpenSansText.prop("text");

			expect(textValue).toEqual("errors.error-type-label");
		});
		it("set text prop to the last OpenSansText", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const OpenSansText = component.find("OpenSansTextMock").last();
			const textValue = OpenSansText.prop("text");

			expect(textValue).toEqual("errors.server");
		});
		it("set handleButtonClick prop to the last LinkButton", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");
			const handleButtonClick = LinkButton.prop("handleButtonClick");

			expect(handleButtonClick).toEqual(props.handleButtonClick);
		});
		it("set text prop to the last LinkButton", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");
			const text = LinkButton.prop("text");

			expect(text).toEqual("buttons.send-new");
		});
		it("set to prop (path) to the last LinkButton", () => {
			const props = {
				error: "test error",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<ErrorModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");
			const path = LinkButton.prop("to");

			expect(path).toEqual("/send");
		});
	});
});
