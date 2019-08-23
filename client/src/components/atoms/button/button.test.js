import React, { createElement } from "react";
import { shallow } from "enzyme";
import { Button } from "../button";

describe("test Button", () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render OpenSansText", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);

			expect(component.find("OpenSansTextMock").length).toBe(1);
		});
	});
	describe("test props contract", () => {
		it("set type prop to the button", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("button");
			const typeProp = button.prop("type");

			expect(typeProp).toEqual(props.type);
		});
		it("set onClick prop to the button", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("button");
			const onClickProp = button.prop("onClick");

			expect(onClickProp).toEqual(props.handleButtonClick);
		});
		it("set text prop to the OpenSansText", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("OpenSansTextMock");
			const textProp = button.prop("text");

			expect(textProp).toEqual(props.text);
		});
		it("set isButton prop to the OpenSansText", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("OpenSansTextMock");
			const isButtonProp = button.prop("isButton");

			expect(isButtonProp).toBeTruthy();
		});
	});
	describe("test callback contract", () => {
		it("test handleButtonClick goes when onClick on the button is done", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("button");
			button.simulate("click", {});

			expect(props.handleButtonClick).toHaveBeenCalled();
		});
	});
});
