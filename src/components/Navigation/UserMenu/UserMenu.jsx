import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../../redux/auth/selectors";
import { logOutThunk } from "../../../redux/auth/operations";

import s from './UserMenu.module.css';
import { Link } from "react-router-dom";


const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <p>Welcome, {user.name}</p>
            <Link to='/'>
                <button className={s.btn} type="button" onClick={() => dispatch(logOutThunk())}>
                    Logout
                </button>
            </Link>
        </div>
    );
};


export default UserMenu;