import React from 'react';
import { Formik } from 'formik';

import '../../styles/form.css';

const Form = () => {
	return (
		<Formik
			initialValues={{ email: '' }}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = 'Invalid email address';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
					values.email = '';
				}, 400);
			}}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form className="flex form" onSubmit={handleSubmit}>
					<div className="flex flex-col form-input__wrapper">
						<input className="form-input" type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email Address" />
						<p className="form-error">{errors.email && touched.email && errors.email}</p>
					</div>
					<button type="submit" className="button form-button" disabled={isSubmitting}>
						Надіслати
					</button>
				</form>
			)}
		</Formik>
	);
};

export default Form;
