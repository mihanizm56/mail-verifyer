import React, { createElement } from "react";
import { shallow } from "enzyme";
import { OpenSansText } from "../open-sans-text";

describe("test OpenSansText", () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props if is button", () => {
			const props = {
				text: "test_text",
				bold: true,
				isButton: true,
			};
			const component = shallow(<OpenSansText {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render snap with all props if isnt a button and not bold", () => {
			const props = {
				text: "test_text_123",
				bold: false,
				isButton: false,
			};
			const component = shallow(<OpenSansText {...props} />);

			expect(component).toMatchSnapshot();
		});
	});
	describe("test props contract", () => {
		it("render text value", () => {
			const props = {
				text: "test_text_exact",
				bold: false,
				isButton: false,
			};
			const component = shallow(<OpenSansText {...props} />);
			const spanWithText = component.find(".open-sans-text");
			const textValue = spanWithText.props().children;

			expect(textValue).toEqual(props.text);
		});
	});
});
