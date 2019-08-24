import React, { createElement } from "react";
import { shallow } from "enzyme";
import { Loader } from "../loader";

describe("test Loader", () => {
	describe("test render contract", () => {
		it("render snap with all props", () => {
			const component = shallow(<Loader />);

			expect(component).toMatchSnapshot();
		});
	});
});
