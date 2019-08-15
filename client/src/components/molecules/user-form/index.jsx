import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray, withFormik } from "formik";
import { withTranslation } from "react-i18next";
import { OpenSansText, Button } from "../../../components";
import "./user-form.css";

export class WrappedForm extends Component {
	componentDidUpdate(prevProps) {
		const { error, setErrors } = this.props;

		if (error && prevProps.error !== error) {
			setErrors({ name: error, email: error });
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
								<OpenSansText text="Введите ваши данные" />
							</div>
							<div className="user-form__row">
								<div className="user-form__field-block">
									<label htmlFor="name" className="user-form__label">
										<OpenSansText text="Логин" />
									</label>
									<Field className="user-form__text-field" name="name" value={values.name} type="text" />
								</div>
								<div className="user-form__error">
									<ErrorMessage name="name" component="div" className="user-form__error-text" />
								</div>
							</div>
							<div className="user-form__row">
								<div className="user-form__field-block">
									<label htmlFor="email" className="user-form__label">
										<OpenSansText text="Электронная почта" />
									</label>
									<Field className="user-form__text-field" name="email" value={values.email} type="email" />
								</div>
								<div className="user-form__error">
									<ErrorMessage name="email" component="div" className="user-form__error-text" />
								</div>
							</div>
							<div className="user-form__row user-form__row--button">
								<Button type="submit" text="Отправить" />
							</div>
						</div>
					)}
				/>
			</Form>
		);
	};
}

// TODO write a regular composition
export const FormikUserForm = withFormik({
	handleSubmit: (values, { props }) => {
		props.submitFunc(values);
	},
	mapPropsToValues: () => ({}),
})(WrappedForm);

export const UserForm = withTranslation()(FormikUserForm);
