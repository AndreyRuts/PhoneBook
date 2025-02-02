import AuthNav from '../Navigation/AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
// import UserMenu from '../Navigation/UserMenu/UserMenu';
import s from './AppBar.module.css';

const AppBar = () => {
    return (
        <>
            <div className={s.wrapper}>
                <Navigation />
                <AuthNav />
                {/* <UserMenu /> */}
            </div>
        </>
    );
};

export default AppBar;