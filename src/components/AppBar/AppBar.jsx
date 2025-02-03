import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/selectors';

import AuthNav from '../Navigation/AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../Navigation/UserMenu/UserMenu';
import s from './AppBar.module.css';


const AppBar = () => {
    const isLogedIn = useSelector(selectIsLogedIn);
    return (
        <>
            <div className={s.wrapper}>
                <Navigation />
                {isLogedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </>
    );
};


export default AppBar;