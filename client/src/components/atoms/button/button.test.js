import React from "react";
import { shallow } from "enzyme";
import { Button } from "../button";

jest.mock("../open-sans-text", () => "OpenSansText");

describe("test Button", () => {
	beforeEach(() => {
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
		xit("render OpenSansText", () => {
			const props = {
				text: "test_text",
				handleButtonClick: jest.fn(),
				type: "submit",
			};
			const component = shallow(<Button {...props} />);

			expect(component.find(OpenSansText).length).toBe(1);
		});
	});
});
