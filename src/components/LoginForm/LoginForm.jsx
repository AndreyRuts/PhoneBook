import { Field, Form, Formik } from "formik";
import s from './LoginForm.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInThunk } from "../../redux/auth/operations";


const LoginForm = () => {
    const initialValues = {
        password: '',
        email: ''
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, options) => {
        console.log(values);
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