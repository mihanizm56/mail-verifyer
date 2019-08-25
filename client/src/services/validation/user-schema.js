import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, "short")
		.max(50, "long")
		.required("required"),
	email: Yup.string()
		.min(2, "short")
		.max(50, "long")
		.email("email")
		.required("required"),
});
