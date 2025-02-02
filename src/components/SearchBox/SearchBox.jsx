// import { useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/contactsSlice'; //onChange={(e) => dispatch(changeFilter(e.target.value))}
import s from './SearchBox.module.css';


const SearchBox = () => {
    // const dispatch = useDispatch();

    return (
        <div className={s.searchBoxWrapper}>
            <p>Find contacts by name !UNDER CONSTRUCTION!</p>
            <input className={s.searchBoxInput}/>
        </div>
    );
};

export default SearchBox;