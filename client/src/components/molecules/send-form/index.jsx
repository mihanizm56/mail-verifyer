import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray, withFormik } from "formik";

export class InnerForm extends Component {
	componentDidUpdate(prevProps) {
		const { error, setErrors } = this.props;

		if (error && prevProps.error !== error) {
			setErrors({ name: "test-name-error" });
		}
	}

	render = () => {
		const { values } = this.props;

		return (
			<div>
				<Form>
					<FieldArray
						name="email-sender"
						render={() => (
							<div>
								<div className="col">
									<label htmlFor="name">Name</label>
									<Field name="name" value={values.name} type="text" />
									<ErrorMessage name="name" component="div" className="field-error" />
								</div>
								<div className="col">
									<label htmlFor="email">Email</label>
									<Field name="email" value={values.email} type="email" />
									<ErrorMessage name="email" component="div" className="field-error" />
								</div>
							</div>
						)}
					/>
					<button type="submit">Validate</button>
				</Form>
			</div>
		);
	};
}

export const SendForm = withFormik({
	handleSubmit: (values, { props }) => {
		props.submitFunc(values);
	},
	mapPropsToValues: props => {
		return {
			name: "test",
			email: "test@mail.ru",
		};
	},
})(InnerForm);
