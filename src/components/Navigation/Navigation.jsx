import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectisLoggedIn } from '../../redux/auth/selectors';
import s from '../Navigation/Navigation.module.css';


const Navigation = () => {
    const isLoggedIn = useSelector(selectisLoggedIn);

    return (
        <nav className={s.wrapper}>
            <NavLink to='/' className={s.links}>Home</NavLink>
            {isLoggedIn && (<NavLink to='/contacts' className={s.links}>Contacts</NavLink>)}
        </nav>
    );
};


export default Navigation;