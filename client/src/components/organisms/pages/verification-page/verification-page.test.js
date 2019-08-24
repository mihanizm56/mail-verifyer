import React, { createElement } from "react";
import { shallow } from "enzyme";
import { VerificationPage } from "../verification-page";

describe("test VerificationPage", () => {
	describe("test render contract", () => {
		it("render snap with all props", () => {
			const props = {
				match: { params: { token: "test token" } },
			};
			const component = shallow(<VerificationPage {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render Validator module", () => {
			const props = {
				match: { params: { token: "test token" } },
			};
			const component = shallow(<VerificationPage {...props} />);
			const Validator = component.find("Validator");

			expect(Validator.length).toEqual(1);
		});
	});
	describe("test props contract", () => {
		it("set token prop to the Validator", () => {
			const props = {
				match: {
					params: { token: "test token" },
				},
			};
			const component = shallow(<VerificationPage {...props} />);
			const Validator = component.find("Validator");
			const tokenProp = Validator.prop("token");

			expect(tokenProp).toEqual(props.match.params.token);
		});
		it("set token prop to the Validator as default string", () => {
			const component = shallow(<VerificationPage />);
			const Validator = component.find("Validator");
			const tokenProp = Validator.prop("token");

			expect(tokenProp).toEqual("");
		});
	});
});
