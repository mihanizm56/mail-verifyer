import React from "react";
import { shallow } from "enzyme";
import { App } from "../app";

describe("test App", () => {
	describe("test render contract", () => {
		it("render snap with all props", () => {
			const component = shallow(<App />);

			expect(component).toMatchSnapshot();
		});
		it("render MainWrapperMock module", () => {
			const component = shallow(<App />);
			const MainWrapper = component.find("MainWrapperMock");

			expect(MainWrapper.length).toEqual(1);
		});
	});
});
