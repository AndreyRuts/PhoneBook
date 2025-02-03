import { useSelector } from 'react-redux';
import { selectAllConatacts } from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/filters/selectors';

import Contact from './Contact/Contact'
import s from './ContactList.module.css'


const ContactList = () => {
    const contacts = useSelector(selectAllConatacts);
    const inputValue = useSelector(selectFilteredContacts);
    const filteredContacts = contacts.filter(
        (contact) => contact.name.toLowerCase().includes(inputValue?.toLowerCase()));

    return (
        <ul className={s.contactList}>
            {filteredContacts.map(item => (<Contact
                key={item.id} {...item}
            />))}
        </ul>
    );
};


export default ContactList;