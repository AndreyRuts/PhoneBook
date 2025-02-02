import { Field, Form, Formik } from "formik";
import s from './RegistrForm.module.css';


const RegistrForm = () => {
    const initialValues = {
        password: '',
        email: '',
        name: ''
    };
    const handleSubmit = (values, options) => {
        console.log(values);
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
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default RegistrForm;