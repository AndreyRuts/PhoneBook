import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { registerThunk } from "../../redux/auth/operations";
import s from './RegistrForm.module.css';


const RegistrForm = () => {
    const initialValues = {
        password: '',
        email: '',
        name: ''
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values)).unwrap().then(() => navigate('/'));
        options.resetForm();
        
    };

    return (
        <>
            <div className={s.wrapper}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className={s.registrForm}>
                        <label className={s.registrLable}>
                            <span className={s.registrSpan}>Name:</span>
                            <Field className={s.registrField} name='name' />
                        </label>
                        <label className={s.registrLable}>
                            <span className={s.registrSpan}>Email:</span>
                            <Field className={s.registrField} name='email'/>
                        </label>
                        <label className={s.registrLable}>
                            <span className={s.registrSpan}>Password:</span>
                            <Field className={s.registrField} name='password' type='password'/>
                        </label>
                        <button className={s.btn} type="submit">Registr</button>
                        <p className={s.redirect}>Already have account?
                            <Link className={s.link} to='/login'> Log in</Link>
                        </p>
                    </Form>
                </Formik>
            </div>
        </>
    );
};


export default RegistrForm;