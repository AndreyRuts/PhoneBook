import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { logOutThunk } from "../../../redux/auth/operations";
import s from './UserMenu.module.css';


const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <p>Welcome, {user.name}</p>
            <button className={s.btn} type="button" onClick={() => dispatch(logOutThunk())}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;