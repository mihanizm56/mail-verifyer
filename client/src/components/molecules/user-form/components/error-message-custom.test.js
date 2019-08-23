import React, { createElement } from "react";
import { shallow } from "enzyme";
import { ErrorMessageCustom } from "./error-message-custom";

describe("test ErrorMessageCustom", () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props", () => {
			const props = {
				submissionError: "submission error",
				error: "error",
			};
			const component = shallow(<ErrorMessageCustom {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render error text when error prop was given", () => {
			const props = {
				submissionError: "submission error",
				error: "error",
			};
			const component = shallow(<ErrorMessageCustom {...props} />);
			const textValue = component.find(".error-message-custom").props().children;

			expect(textValue).toEqual(props.error);
		});
		it("render error text when error prop wa not given", () => {
			const props = {
				submissionError: "submission error",
			};
			const component = shallow(<ErrorMessageCustom {...props} />);
			const textValue = component.find(".error-message-custom").props().children;

			expect(textValue).toEqual(props.submissionError);
		});
	});
});
