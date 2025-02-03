import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner'

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

    const styles = {
        loadContainer: {
            display: 'flex',
            gap: '30px',
        },  
    }

    return (
        <>
            <div style={styles.loadContainer}>
                <ContactForm />
                {isLoading && <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#c4c4c4"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
            />}
            </div>
            <SearchBox />
            
            <ContactList />
        </>
    );
};


export default ContactsPage;