import React from "react";
import { shallow } from "enzyme";
import { SenderContainer } from "../sender";
import { REDIRECTION_URL_FOR_LINK_BUTTON } from "../../constants";

describe("test SenderContainer", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render UserForm component", () => {
			const props = {
				username: "test",
				error: "test error",
				fetchSendUserEmail: jest.fn(),
				isLoading: false,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const UserForm = component.find("UserFormMock");

			expect(UserForm.length).toEqual(1);
		});
		it("render UserForm component if message wasnt sent", () => {
			const props = {
				username: "test",
				error: "test error",
				fetchSendUserEmail: jest.fn(),
				isLoading: false,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const UserForm = component.find("UserFormMock");

			expect(UserForm.length).toEqual(1);
		});
		it("render SuccessModal component if message was successfully sent", () => {
			const props = {
				username: "username test",
				error: "",
				fetchSendUserEmail: jest.fn(),
				isLoading: false,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const SuccessModalMock = component.find("SuccessModalMock");

			expect(SuccessModalMock.length).toEqual(1);
		});
		it("render UserForm component if message wasnt successfully sent", () => {
			const props = {
				username: "username test",
				error: "error",
				fetchSendUserEmail: jest.fn(),
				isLoading: false,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const UserForm = component.find("UserFormMock");

			expect(UserForm.length).toEqual(1);
		});
		it("render UserForm component if is loading", () => {
			const props = {
				username: "username test",
				error: "",
				fetchSendUserEmail: jest.fn(),
				isLoading: true,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const UserForm = component.find("UserFormMock");

			expect(UserForm.length).toEqual(1);
		});
		it("render UserForm component if no username was provided from the store", () => {
			const props = {
				username: "",
				error: "",
				fetchSendUserEmail: jest.fn(),
				isLoading: false,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const UserForm = component.find("UserFormMock");

			expect(UserForm.length).toEqual(1);
		});
	});
	describe("test props contract", () => {
		describe("set props to the UserForm", () => {
			it("set submissionError prop", () => {
				const props = {
					username: "test username",
					error: "submissionError test",
					fetchSendUserEmail: jest.fn(),
					isLoading: false,
					createNewMail: jest.fn(),
				};
				const component = shallow(<SenderContainer {...props} />);
				const UserForm = component.find("UserFormMock");
				const submissionErrorProp = UserForm.prop("submissionError");

				expect(submissionErrorProp).toBeDefined();
			});
			it("set isLoading prop", () => {
				const props = {
					username: "test username",
					error: "submissionError test",
					fetchSendUserEmail: jest.fn(),
					isLoading: true,
					createNewMail: jest.fn(),
				};
				const component = shallow(<SenderContainer {...props} />);
				const UserForm = component.find("UserFormMock");
				const isLoadingProp = UserForm.prop("isLoading");

				expect(isLoadingProp).toEqual(props.isLoading);
			});
			it("set submitFunc prop", () => {
				const props = {
					username: "test username",
					error: "submissionError test",
					fetchSendUserEmail: jest.fn(),
					isLoading: true,
					createNewMail: jest.fn(),
				};
				const component = shallow(<SenderContainer {...props} />);
				const UserForm = component.find("UserFormMock");
				const submitFuncProp = UserForm.prop("submitFunc");

				expect(submitFuncProp).toEqual(props.fetchSendUserEmail);
			});
		});
		describe("set props to the SuccessModal", () => {
			it("set buttonClickRedirectsTo prop", () => {
				const props = {
					username: "username test",
					error: "",
					fetchSendUserEmail: jest.fn(),
					isLoading: false,
					createNewMail: jest.fn(),
				};
				const component = shallow(<SenderContainer {...props} />);
				const SuccessModal = component.find("SuccessModalMock");
				const buttonClickRedirectsToProp = SuccessModal.prop("buttonClickRedirectsTo");

				expect(buttonClickRedirectsToProp).toEqual(REDIRECTION_URL_FOR_LINK_BUTTON);
			});
			it("set handleButtonClick prop", () => {
				const props = {
					username: "username test",
					error: "",
					fetchSendUserEmail: jest.fn(),
					isLoading: false,
					createNewMail: jest.fn(),
				};
				const component = shallow(<SenderContainer {...props} />);
				const SuccessModal = component.find("SuccessModalMock");
				const handleButtonClickProp = SuccessModal.prop("handleButtonClick");

				expect(handleButtonClickProp).toEqual(props.createNewMail);
			});
			it("set successText prop", () => {
				const props = {
					username: "username test",
					error: "",
					fetchSendUserEmail: jest.fn(),
					isLoading: false,
					createNewMail: jest.fn(),
				};
				const component = shallow(<SenderContainer {...props} />);
				const SuccessModal = component.find("SuccessModalMock");
				const successTextProp = SuccessModal.prop("successText");

				expect(successTextProp).toBeDefined();
			});
		});
	});
	describe("test callback contract", () => {
		it("calls fetchSendUserEmail when submitFunc prop was called ", () => {
			const props = {
				username: "test username",
				error: "submissionError test",
				fetchSendUserEmail: jest.fn(),
				isLoading: true,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const UserForm = component.find("UserFormMock");
			UserForm.prop("submitFunc")({ name: "test name", value: "test value" });

			expect(props.fetchSendUserEmail).toHaveBeenCalledWith({ name: "test name", value: "test value" });
		});
		it("calls createNewMail when handleButtonClick prop was called ", () => {
			const props = {
				username: "username test",
				error: "",
				fetchSendUserEmail: jest.fn(),
				isLoading: false,
				createNewMail: jest.fn(),
			};
			const component = shallow(<SenderContainer {...props} />);
			const SuccessModal = component.find("SuccessModalMock");
			SuccessModal.prop("handleButtonClick")();

			expect(props.createNewMail).toHaveBeenCalled();
		});
	});
});
