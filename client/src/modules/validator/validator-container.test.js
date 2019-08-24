import React from "react";
import { shallow } from "enzyme";
import { ValidatorContainer } from "../sender";

describe("test ValidatorContainer", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render UserForm component", () => {
			const props = {
				isLoading: false,
				error: "",
				username: "username test",
				fetchValidateUserEmail: jest.fn(),
				token: "test token",
			};
			const component = shallow(<ValidatorContainer {...props} />);
			const UserForm = component.find("UserFormMock");

			expect(UserForm.length).toEqual(1);
		});
	});
	xdescribe("test props contract", () => {});
	xdescribe("test callback contract", () => {});
});
