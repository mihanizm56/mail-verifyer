import React, { createElement } from "react";
import { shallow } from "enzyme";
import { LinkButton } from "../link-button";

describe("test LinkButton", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props", () => {
			const props = {
				to: "/test",
				text: "test_lnk_button",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<LinkButton {...props} />);

			expect(component).toMatchSnapshot();
		});
		it("render NavLink component", () => {
			const props = {
				to: "/test",
				text: "test_lnk_button",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<LinkButton {...props} />);

			expect(component.find("NavLinkMock").length).toEqual(1);
		});
		it("render OpenSansText component", () => {
			const props = {
				to: "/test",
				text: "test_lnk_button",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<LinkButton {...props} />);

			expect(component.find("OpenSansTextMock").length).toEqual(1);
		});
	});
	describe("test props contract", () => {
		describe("set props to NavLink", () => {
			it("set exact prop", () => {
				const props = {
					to: "/test",
					text: "test_lnk_button",
					handleButtonClick: jest.fn(),
				};
				const component = shallow(<LinkButton {...props} />);
				const NavLink = component.find("NavLinkMock");
				const exactProp = NavLink.prop("exact");

				expect(exactProp).toBeTruthy();
			});
			it("set to (path) prop", () => {
				const props = {
					to: "/test",
					text: "test_lnk_button",
					handleButtonClick: jest.fn(),
				};
				const component = shallow(<LinkButton {...props} />);
				const NavLink = component.find("NavLinkMock");
				const toProp = NavLink.prop("to");

				expect(toProp).toEqual(props.to);
			});
			it("set to onClick prop", () => {
				const props = {
					to: "/test",
					text: "test_lnk_button",
					handleButtonClick: jest.fn(),
				};
				const component = shallow(<LinkButton {...props} />);
				const NavLink = component.find("NavLinkMock");
				const onClickProp = NavLink.prop("onClick");

				expect(onClickProp).toEqual(props.handleButtonClick);
			});
		});
		describe("set props to OpenSansText", () => {
			it("set text prop", () => {
				const props = {
					to: "/test",
					text: "test_lnk_button",
					handleButtonClick: jest.fn(),
				};
				const component = shallow(<LinkButton {...props} />);
				const OpenSansText = component.find("OpenSansTextMock");
				const textProp = OpenSansText.prop("text");

				expect(textProp).toEqual(props.text);
			});
			it("set isButton prop", () => {
				const props = {
					to: "/test",
					text: "test_lnk_button",
					handleButtonClick: jest.fn(),
				};
				const component = shallow(<LinkButton {...props} />);
				const OpenSansText = component.find("OpenSansTextMock");
				const isButtonProp = OpenSansText.prop("isButton");

				expect(isButtonProp).toBeTruthy();
			});
		});
	});
	describe("test callback contract", () => {
		it("test handleButtonClick goes when onClick on the button is done", () => {
			const props = {
				to: "/test",
				text: "test_lnk_button",
				handleButtonClick: jest.fn(),
			};
			const component = shallow(<LinkButton {...props} />);
			const NavLink = component.find("NavLinkMock");
			NavLink.simulate("click", {});

			expect(props.handleButtonClick).toHaveBeenCalled();
		});
	});
});
