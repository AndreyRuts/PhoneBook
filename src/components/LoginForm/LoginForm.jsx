import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { logInThunk } from "../../redux/auth/operations";
import s from './LoginForm.module.css';


const LoginForm = () => {
    const initialValues = {
        password: '',
        email: ''
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, options) => {
        dispatch(logInThunk(values)).unwrap().then(() => navigate('/'));
        options.resetForm();
    };

    return (
        <>
            <div className={s.wrapper}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className={s.loginForm}>
                        <label className={s.loginLable}>
                            <span className={s.loginSpan}>Email:</span>
                            <Field className={s.loginField} name='email'/>
                        </label>
                        <label className={s.loginLable}>
                            <span className={s.loginSpan}>Password:</span>
                            <Field className={s.loginField} name='password' type='password'/>
                        </label>
                        <button className={s.btn} type="submit">Login</button>
                        <p className={s.redirect}>You do not have account?
                            <Link className={s.link} to='/register'>Create</Link>
                        </p>  
                    </Form>
                </Formik>
            </div>
        </>
    );
};


export default LoginForm;