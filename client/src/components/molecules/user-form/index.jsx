import React, { memo } from "react";
import classNames from "classnames";
import { Field, Form, FieldArray, withFormik } from "formik";
import { withTranslation } from "react-i18next";
import { OpenSansText, Button } from "../../../components";
import * as Yup from "yup";
import "./user-form.css";
import { Loader } from "../../atoms";
import { ErrorMessageCustom } from "./error-message-custom";

const UserSchema = Yup.object().shape({
	username: Yup.string()
		.min(10, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.email("Invalid email")
		.required("Required"),
});

export const WrappedForm = memo(({ values, isLoading, submissionError, errors, t: translate }) => {
	const usernameError = Boolean(errors) && errors.username;
	const emailError = Boolean(errors) && errors.email;

	console.log("test", usernameError);

	return (
		<div className={classNames("user-form-wrapper", { "user-form-wrapper--loading": isLoading })}>
			{isLoading ? (
				<Loader />
			) : (
				<Form>
					<FieldArray
						name="email-sender"
						render={() => (
							<div className="user-form">
								<div className="user-form__row">
									<OpenSansText text={translate("form.title")} />
								</div>
								<div className="user-form__row">
									<div className="user-form__field-block">
										<label htmlFor="username" className="user-form__label">
											<OpenSansText text={translate("form.labels.username")} />
										</label>
										<Field className="user-form__text-field" name="username" value={values.username} type="text" />
									</div>
									<div className="user-form__error">
										<ErrorMessageCustom error={usernameError} submissionError={submissionError} />
									</div>
								</div>
								<div className="user-form__row">
									<div className="user-form__field-block">
										<label htmlFor="email" className="user-form__label">
											<OpenSansText text={translate("form.labels.email")} />
										</label>
										<Field className="user-form__text-field" name="email" value={values.email} type="email" />
									</div>
									<div className="user-form__error">
										<ErrorMessageCustom error={emailError} submissionError={submissionError} />
									</div>
								</div>
								<div className="user-form__row user-form__row--button">
									<Button type="submit" text={translate("buttons.validate")} />
								</div>
							</div>
						)}
					/>
				</Form>
			)}
		</div>
	);
});

const TranslatedForm = withTranslation()(WrappedForm);

// TODO write a regular composition
export const UserForm = withFormik({
	handleSubmit: (values, { props, setStatus }) => {
		props.submitFunc(values);
	},
	mapPropsToValues: props => {
		return {
			email: "",
			username: "",
		};
	},
	validationSchema: UserSchema,
})(TranslatedForm);
