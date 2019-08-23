import React, { createElement } from "react";
import { shallow } from "enzyme";
import { SVGIcon } from "../svg-icon";

describe("test SVGIcon", () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props if is button", () => {
			const props = {
				path: "test-path",
			};
			const component = shallow(<SVGIcon {...props} />);

			expect(component).toMatchSnapshot();
		});
	});
	describe("test props contract", () => {
		it("render path value", () => {
			const props = {
				path: "test-path",
			};
			const component = shallow(<SVGIcon {...props} />);
			const object = component.find(".icon");
			const pathProp = object.prop("data");

			expect(pathProp).toEqual(props.path);
		});
	});
});
