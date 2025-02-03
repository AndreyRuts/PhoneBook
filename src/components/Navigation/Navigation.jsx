import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLogedIn } from '../../redux/auth/selectors';
import s from '../Navigation/Navigation.module.css';


const Navigation = () => {
    const isLogedIn = useSelector(selectIsLogedIn);

    return (
        <nav className={s.wrapper}>
            <NavLink to='/' className={s.links}>Home</NavLink>
            {isLogedIn && (<NavLink to='/contacts' className={s.links}>Contacts</NavLink>)}
        </nav>
    );
};


export default Navigation;