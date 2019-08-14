import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray, withFormik } from "formik";
import { withTranslation } from "react-i18next";

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
			<div>
				<Form>
					<FieldArray
						name="email-sender"
						render={() => (
							<div>
								<div className="col">
									<label htmlFor="name">{translate("mail.send-form.name")}</label>
									<Field name="name" value={values.name} type="text" />
									<ErrorMessage name="name" component="div" className="field-error" />
								</div>
								<div className="col">
									<label htmlFor="email">{translate("mail.send-form.email")}</label>
									<Field name="email" value={values.email} type="email" />
									<ErrorMessage name="email" component="div" className="field-error" />
								</div>
							</div>
						)}
					/>
					<button type="submit">{translate("mail.send-form.validate")}</button>
				</Form>
			</div>
		);
	};
}

// TODO write a regular composition
export const FormikUserForm = withFormik({
	handleSubmit: (values, { props }) => {
		props.submitFunc(values);
	},
	mapPropsToValues: props => {
		return {
			name: "test",
			email: "test@mail.ru",
		};
	},
})(WrappedForm);

export const UserForm = withTranslation()(FormikUserForm);
