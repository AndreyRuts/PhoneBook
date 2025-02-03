import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import s from './SearchBox.module.css';


const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredContacts);
    
    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={s.searchBoxWrapper}>
            <p className={s.text}>Find contacts by name</p>
            <input
                className={s.searchBoxInput}
                onChange={handleChange}
                value={filter}
            />
        </div>
    );
};


export default SearchBox;