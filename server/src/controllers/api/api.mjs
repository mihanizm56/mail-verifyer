import path from "path";
import { readFile } from "../../utils/promisify/index.mjs";

const get = async (req, res) => {
	// const pathToHTML = path.join(process.cwd(), "public", "index.html");
	res.status(200).json({ message: "success" });
};

export default { get };
