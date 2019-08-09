import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Debug } from "./Debug";

const initialValues = {
	email_sender: [
		{
			name: "test1",
			email: "test2",
		},
	],
};

const SendForm = () => (
	<div>
		<Formik
			initialValues={initialValues}
			onSubmit={values => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
				}, 2000);
			}}
			render={({ values }) => (
				<Form>
					<FieldArray
						name="email-sender"
						render={({ insert, remove, push }) => (
							<div>
								<div className="col">
									<label htmlFor={email_sender.name}>Name</label>
									<Field name={email_sender.name} type="text" />
									<ErrorMessage name={email_sender.name} component="div" className="field-error" />
								</div>
								<div className="col">
									<label htmlFor={email_sender.email}>Email</label>
									<Field name={email_sender.email} type="email" />
									<ErrorMessage name={email_sender.email} component="div" className="field-error" />
								</div>
							</div>
						)}
					/>
					<button type="submit">Validate</button>
					<Debug />
				</Form>
			)}
		/>
	</div>
);
