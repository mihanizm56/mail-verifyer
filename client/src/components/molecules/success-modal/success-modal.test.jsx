import React, { createElement } from "react";
import { shallow } from "enzyme";
import { SuccessModal } from ".";

describe("test SuccessModal", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render OpenSansText component", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);
			const OpenSansText = component.find("OpenSansTextMock");

			expect(OpenSansText.length).toEqual(1);
		});
		it("render LinkButton component", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");

			expect(LinkButton.length).toEqual(1);
		});
	});
	describe("test props contract", () => {
		it("set text prop to the OpenSansText", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);
			const OpenSansText = component.find("OpenSansTextMock");
			const textProp = OpenSansText.prop("text");

			expect(textProp).toEqual(props.successText);
		});
		it("set to (path) prop to the LinkButton", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");
			const pathProp = LinkButton.prop("to");

			expect(pathProp).toEqual(props.buttonClickRedirectsTo);
		});
		it("set text prop to the LinkButton", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");
			const textProp = LinkButton.prop("text");

			expect(textProp).toEqual("buttons.send-new");
		});
		it("set handleButtonClick prop to the LinkButton", () => {
			const props = {
				handleButtonClick: jest.fn(),
				successText: "success text",
				buttonClickRedirectsTo: "/test",
			};
			const component = shallow(<SuccessModal {...props} />);
			const LinkButton = component.find("LinkButtonMock");
			const handleButtonClick = LinkButton.prop("handleButtonClick");

			expect(handleButtonClick).toEqual(props.handleButtonClick);
		});
	});
});
