import React, { createElement } from "react";
import { shallow } from "enzyme";
import { MainWrapper } from "../main-wrapper-app";

describe("test MainWrapper", () => {
	describe("test render contract", () => {
		it("render snap with all props", () => {
			const component = shallow(<MainWrapper />);

			expect(component).toMatchSnapshot();
		});
		it("render MainRouterLayout module", () => {
			const component = shallow(<MainWrapper />);
			const Sender = component.find("MainRouterLayout");

			expect(Sender.length).toEqual(1);
		});
	});
});
