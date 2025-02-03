import { NavLink } from "react-router-dom";

import s from './AuthNav.module.css';


const AuthNav = () => {
    return (
        <div className={s.wrapper}>
            <NavLink to='/register' className={s.links}>Register</NavLink>
            <NavLink to='/login' className={s.links}>Log in</NavLink>
        </div>
    );
};


export default AuthNav;