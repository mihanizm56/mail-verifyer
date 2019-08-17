import React, { Component } from "react";
import classNames from "classnames";
import { Field, Form, ErrorMessage, FieldArray, withFormik } from "formik";
import { withTranslation } from "react-i18next";
import { OpenSansText, Button } from "../../../components";
import "./user-form.css";
import { Loader } from "../../atoms";

export class WrappedForm extends Component {
	componentDidUpdate(prevProps) {
		const { error, setErrors } = this.props;

		if (error && prevProps.error !== error) {
			console.log("//////////////////", error);

			setErrors({ name: error, email: error });
		}
	}

	render = () => {
		const { values, isLoading, t: translate } = this.props;

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
											<label htmlFor="name" className="user-form__label">
												<OpenSansText text={translate("form.labels.username")} />
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
				)}
			</div>
		);
	};
}

const TranslatedForm = withTranslation()(WrappedForm);

// TODO write a regular composition
export const UserForm = withFormik({
	handleSubmit: (values, { props }) => {
		props.submitFunc(values);
	},
	mapPropsToValues: () => ({}),
})(TranslatedForm);
