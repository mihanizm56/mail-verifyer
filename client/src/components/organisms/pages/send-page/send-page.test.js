import React, { createElement } from "react";
import { shallow } from "enzyme";
import { SendPage } from "../send-page";

describe("test SendPage", () => {
	beforeEach(() => {
		jest.resetModules();
		jest.clearAllMocks();
	});

	describe("test render contract", () => {
		it("render snap with all props", () => {
			const component = shallow(<SendPage />);

			expect(component).toMatchSnapshot();
		});
		it("render Sender module", () => {
			const component = shallow(<SendPage />);
			const Sender = component.find("Sender");

			expect(Sender.length).toEqual(1);
		});
	});
});
