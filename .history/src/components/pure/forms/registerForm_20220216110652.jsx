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
                }).required('You must confirm the password')           
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

            </Formik>
        </div>
    );
}

export default Registerform;
