import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

import { selectLoading } from "../redux/contacts/selectors";
import { fetchContactsThunk } from "../redux/contacts/operations";


const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    return (
        <>
            <ContactForm />
            <SearchBox />
            <div>{isLoading && <p>Loading...</p>}</div>
            <ContactList />
        </>
    );
};


export default ContactsPage;