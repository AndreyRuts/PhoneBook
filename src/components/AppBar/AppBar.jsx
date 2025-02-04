import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../../redux/auth/selectors';

import AuthNav from '../Navigation/AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../Navigation/UserMenu/UserMenu';
import s from './AppBar.module.css';


const AppBar = () => {
    const isLoggedIn = useSelector(selectisLoggedIn);
    return (
        <>
            <div className={s.wrapper}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </>
    );
};


export default AppBar;