import s from './ContactList.module.css'
// import Contact from './Contact/Contact'
import { useSelector } from 'react-redux';
import { selectAllConatacts } from '../../redux/contacts/selectors';


const ContactList = () => {
    const contacts = useSelector(selectAllConatacts);
    console.log(contacts);
    
    
    return (
        <ul className={s.contactList}>
            {/* {contacts.map(item => (<Contact
                key={item.id} {...item}
                
            />))} */}
        </ul>
    );
};

export default ContactList;