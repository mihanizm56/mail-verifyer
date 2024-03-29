import React, { memo } from "react";
import classNames from "classnames";
import { compose } from "ramda";
import { Field, Form, FieldArray, withFormik } from "formik";
import { withTranslation } from "react-i18next";
import * as i18next from "i18next";
import { OpenSansText, Button } from "../..";
import "./user-form.css";
import { Loader } from "../../atoms";
import { ErrorMessageCustom } from "./components/error-message-custom";
import { UserSchema } from "../../../services/validation";

type FormValues = {
	username?: string,
	email?: string,
};

type FormErrors = {
	username?: string,
	email?: string,
};

interface IWrappedFormProps {
	values: FormValues;
	isLoading: boolean;
	submissionError: string;
	errors: FormErrors;
	t: i18next.TFunction;
}

export const WrappedForm: any = memo(
	({ values, isLoading, submissionError, errors, t: translate }: IWrappedFormProps) => {
		const usernameError =
			Boolean(errors) && Boolean(errors.username) && translate(`validation-errors.username.${errors.username}`);

		const emailError = Boolean(errors) && Boolean(errors.email) && translate(`validation-errors.email.${errors.email}`);

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
	}
);

const TranslatedForm = withTranslation()(WrappedForm);

export const UserForm = compose(
	withFormik({
		handleSubmit: (values, { props }: { props: any }) => {
			props.submitFunc(values);
		},
		mapPropsToValues: props => {
			return {
				email: "",
				username: "",
			};
		},
		validationSchema: UserSchema,
	}),
	withTranslation()
)(WrappedForm);
