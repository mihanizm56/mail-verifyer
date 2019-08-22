import React,{createElement} from "react";
import { shallow } from "enzyme";
import { Button } from "../button";

jest.doMock("../open-sans-text", ()=>{
	const OpenSansText = (props) => createElement('OpenSansText', props);
	return {OpenSansText}
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
