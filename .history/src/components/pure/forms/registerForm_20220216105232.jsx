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
        
    )

    const submit = (values) => {
        alert('Register User');
    }

    return (
        <div>
            
        </div>
    );
}

export default Registerform;
