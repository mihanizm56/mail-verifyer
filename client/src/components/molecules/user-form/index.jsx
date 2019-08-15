import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray, withFormik } from "formik";
import { withTranslation } from "react-i18next";
import { OpenSansText, Button } from "../../../components";
import { errorCreator } from "../../../utils";
import "./user-form.css";

export class WrappedForm extends Component {
	componentDidUpdate(prevProps) {
		const { error, setErrors } = this.props;

		if (error && prevProps.error !== error) {
			const errorText = errorCreator(error);
			console.log("//////////////////", errorText);

			setErrors({ username: errorText, email: errorText });
		}
	}

	render = () => {
		const { values, t: translate } = this.props;

		return (
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
									<Field className="user-form__text-field" name="username" value={values.name} type="text" />
								</div>
								<div className="user-form__error">
									<ErrorMessage name="username" component="div" className="user-form__error-text" />
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
									<ErrorMessage name="email" component="div" className="user-form__error-text" />
								</div>
							</div>
							<div className="user-form__row user-form__row--button">
								<Button type="submit" text={translate("buttons.validate")} />
							</div>
						</div>
					)}
				/>
			</Form>
		);
	};
}

const TranslatedForm = withTranslation()(WrappedForm);

// TODO write a regular composition
export const UserForm = withFormik({
	handleSubmit: (values, { props }) => {
		props.submitFunc(values);
	},
	mapPropsToValues: props => ({
		name: "123",
	}),
})(TranslatedForm);
