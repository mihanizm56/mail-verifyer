import React from "react";
import { shallow } from "enzyme";
import { ValidatorContainer } from "../validator";

describe("test ValidatorContainer", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("snap test with all props", () => {
			const props = {
				fetchValidateUserToken: jest.fn(),
				token: "token",
				username: "test username",
				error: "",
				isLoading: false,
				t: value => value,
			};
			const component = shallow(<ValidatorContainer {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render ErrorModal when error prop was given", () => {
			const props = {
				fetchValidateUserToken: jest.fn(),
				token: "token",
				username: "test username",
				error: "test-error",
				isLoading: false,
				t: value => value,
			};
			const component = shallow(<ValidatorContainer {...props} />);
			const ErrorModal = component.find("ErrorModalMock");

			expect(ErrorModal.length).toEqual(1);
		});
		it("render SuccessModal when username prop was given", () => {
			const props = {
				fetchValidateUserToken: jest.fn(),
				token: "token",
				username: "test username",
				error: "",
				isLoading: false,
				t: value => value,
			};
			const component = shallow(<ValidatorContainer {...props} />);
			const SuccessModal = component.find("SuccessModalMock");

			expect(SuccessModal.length).toEqual(1);
		});
		it("render Loader when no username and no error was given", () => {
			const props = {
				fetchValidateUserToken: jest.fn(),
				token: "token",
				username: "",
				error: "",
				t: value => value,
			};
			const component = shallow(<ValidatorContainer {...props} />);
			const Loader = component.find("LoaderMock");

			expect(Loader.length).toEqual(1);
		});
	});
	describe("test props contract", () => {
		describe("test ErrorModal props", () => {
			it("set error prop", () => {
				const props = {
					fetchValidateUserToken: jest.fn(),
					token: "token",
					username: "",
					error: "test error",
					t: value => value,
				};
				const component = shallow(<ValidatorContainer {...props} />);
				const ErrorModal = component.find("ErrorModalMock");
				const errorProp = ErrorModal.prop("errorText");

				expect(errorProp).toEqual(props.error);
			});
		});
		describe("test SuccessModal props", () => {
			it("set buttonClickRedirectsTo prop", () => {
				const props = {
					fetchValidateUserToken: jest.fn(),
					token: "token",
					username: "test username",
					error: "",
					t: value => value,
				};
				const component = shallow(<ValidatorContainer {...props} />);
				const SuccessModal = component.find("SuccessModalMock");
				const buttonClickRedirectsToProp = SuccessModal.prop("buttonClickRedirectsTo");

				expect(buttonClickRedirectsToProp).toBeDefined();
			});
			it("set successText prop", () => {
				const props = {
					fetchValidateUserToken: jest.fn(),
					token: "token",
					username: "test username",
					error: "",
					t: value => value,
				};
				const component = shallow(<ValidatorContainer {...props} />);
				const SuccessModal = component.find("SuccessModalMock");
				const successTextProp = SuccessModal.prop("successText");

				expect(successTextProp).toBeDefined();
			});
		});
	});
	describe("test callback contract", () => {
		it("fetchValidateUserToken calls when component did mount", () => {
			const props = {
				fetchValidateUserToken: jest.fn(),
				token: "token",
				username: "test username",
				error: "",
				t: value => value,
			};
			const component = shallow(<ValidatorContainer {...props} />);

			expect(props.fetchValidateUserToken).toHaveBeenCalledWith(props.token);
		});
	});
});
