import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
// import { Debug } from "./Debug";

const initialValues = {
	name: "test1",
	email: "test2",
};

export const SendForm = () => (
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
					{/* <Debug /> */}
				</Form>
			)}
		/>
	</div>
);
