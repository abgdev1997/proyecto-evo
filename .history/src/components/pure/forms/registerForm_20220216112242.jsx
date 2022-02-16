import React from 'react';
import { User } from '../../../models/user.class.js'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterForm = () => {

    let user = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object.shape(
        {
            userName: Yup.string()
                .min(6, 'UserName too short')
                .max(12, 'UserName too long')
                .required('UserName is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Password must match!'
                    )
                }).required('You must confirm the password'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')               
        }
    )

    const submit = (values) => {
        alert('Register User');
    }

    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                    {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="userName">UserName</label>
                            <Field id="userName" type="text" name="userName" placeholder="Insert your new UserName" />
                            
                            {
                                errors.userName && touched.userName && 
                                (
                                    <ErrorMessage name="userName" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="Insert your Email" />
                            
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type='password'
                            />
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            
                            <label htmlFor="confirm">Confirm Password</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="Confirm password"
                                type='password'
                            />
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                            }
                        
                            <button type="submit">Register</button>
                            {isSubmitting ? (<p>Register your credentials...</p>): null}
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default RegisterForm;
