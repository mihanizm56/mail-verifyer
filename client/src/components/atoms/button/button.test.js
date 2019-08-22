import React, { createElement } from "react";
import { shallow } from "enzyme";
import { Button } from "../button";

jest.doMock("../open-sans-text", () => {
	const OpenSansText = props => createElement("OpenSansText", props);
	return { OpenSansText };
});

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

			expect(component.find("OpenSansText").length).toBe(1);
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
			const typeProp = button.prop("onClick");

			expect(typeProp).toEqual(props.handleButtonClick);
		});
		it("set text prop to the OpenSansText", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("OpenSansText");
			const typeProp = button.prop("text");

			expect(typeProp).toEqual(props.text);
		});
		it("set isButton prop to the OpenSansText", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);
			const button = component.find("OpenSansText");
			const typeProp = button.prop("isButton");

			expect(typeProp).toBeTruthy();
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
