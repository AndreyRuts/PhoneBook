import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../redux/contacts/operations";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    return (
        <>
            <h2>Phonebook</h2>
            <ContactForm />
            <SearchBox />
            <div>{isLoading && 'Loading...'}</div>
            <ContactList />
        </>
    );
};

export default ContactsPage;