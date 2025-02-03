import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { addContactThunk } from '../../redux/contacts/operations';
import s from './ContactForm.module.css';


const ContactForm = () => {
    const initValues = { name: "", number: "" };
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContactThunk({ ...values}));
        actions.resetForm();
    };
    const schema = Yup.object().shape({
        name: Yup.string().min(3).max(50).required(),
        number: Yup.string().min(3).max(50).required()
    });
    
    return (
        <div className={s.wrapper}>
            <Formik onSubmit={handleSubmit} initialValues={initValues} validationSchema={schema}>
                <Form className={s.form}>
                    <label className={s.formLable}>
                        <span className={s.formSpan}>Name</span>
                        <Field className={s.input} type='text' name='name'>
                        </Field>
                        <ErrorMessage name='name' className={s.error} component='p'></ErrorMessage>
                    </label>
                    <label className={s.formLable}>
                        <span className={s.formSpan}>Number</span>
                        <Field className={s.input} type='text' name='number'>
                        </Field>
                        <ErrorMessage name='number' className={s.error} component='p'></ErrorMessage>
                    </label>
                    <button className={s.formBtn} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};


export default ContactForm;