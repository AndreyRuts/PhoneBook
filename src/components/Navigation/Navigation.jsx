import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.wrapper}>
            <NavLink to='/' className={s.links}>Home</NavLink>
            <NavLink to='/contacts' className={s.links}>Contacts</NavLink>
        </nav>
    );
};

export default Navigation;