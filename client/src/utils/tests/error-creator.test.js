import { errorCreator } from "../helpers/error-creator";
import { ERROR_INTERNAL_SERVER, ERROR_NOT_VALID_DATA, ERROR_INVALID_TOKEN } from "../../constants";

describe("test errorCreator", () => {
	it("returns errors.server when ERROR_INTERNAL_SERVER error was given", () => {
		const result = errorCreator(ERROR_INTERNAL_SERVER);

		expect(result).toEqual("errors.server");
	});
	it("returns errors.userdata when ERROR_NOT_VALID_DATA error was given", () => {
		const result = errorCreator(ERROR_NOT_VALID_DATA);

		expect(result).toEqual("errors.userdata");
	});
	it("returns errors.server when ERROR_INVALID_TOKEN error was given", () => {
		const result = errorCreator(ERROR_INVALID_TOKEN);

		expect(result).toEqual("errors.server");
	});
	it("returns errors.server when not fixed error error was given", () => {
		const result = errorCreator("test error");

		expect(result).toEqual("errors.server");
	});
});
