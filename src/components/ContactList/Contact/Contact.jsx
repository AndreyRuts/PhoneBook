import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/contacts/operations';


const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    
    return (
        <>
            <li className={s.listItem}>
                <div>
                    <p className={s.text}>{name}</p>
                    <p className={s.text}>{number}</p>
                </div>
                <button className={s.delBtn} onClick={() => dispatch(deleteContactThunk(id))}>Delete</button>
            </li>
        </>
    );
}; 

export default Contact;
