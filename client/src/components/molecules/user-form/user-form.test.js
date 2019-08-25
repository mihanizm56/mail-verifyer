import React from "react";
import { mount } from "enzyme";
import { UserForm, WrappedForm } from "../user-form";

describe("test", () => {
	it("test snap", () => {
		const props = {
			values: {
				username: "",
				email: "",
			},
			isLoading: false,
			submissionError: null,
			errors: null,
			t: () => "translated",
		};
		const component = mount(<UserForm {...props} />).find("user-form");

		expect(component).toMatchSnapshot();
	});
});
