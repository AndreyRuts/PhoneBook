import { useDispatch } from 'react-redux';

import { deleteContactThunk } from '../../../redux/contacts/operations';
import s from './Contact.module.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            m: 1,
        },
      }}
    >
</Box>

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
 
    return (
        <>
            <li className={s.listItem}>
                <div className={s.textContainer}>
                    <input className={s.text} type="text" readOnly value={name} />             
                    <input className={s.text} type="text" readOnly value={number} />                 
                </div>
                <ButtonGroup color='black' variant="text" aria-label="Basic button group">
                    <Button>Edit</Button>
                    <Button onClick={() => dispatch(deleteContactThunk(id))}>Del</Button>
                </ButtonGroup>
            </li>
        </>
    );
}; 


export default Contact;
