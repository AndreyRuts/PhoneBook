import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll',
    async (_, thukAPI) => {
        try {
            const { data } = await axios.get('/contacts');   
            return data;
        } catch (error) {
            return thukAPI.rejectWithValue(error.message);
        }
    },
);

export const addContactThunk = createAsyncThunk('contacts/addContact',
    async (newContact, thukAPI) => {
        try {
            const { data } = await axios.post('/contacts', newContact);           
            return { ...data, id: Number(data.id) };
        } catch (error) {
            return thukAPI.rejectWithValue(error.message);
        }
    },
);

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact',
    async (contactId, thukAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${contactId}`);
            return data;
        } catch (error) {
            return thukAPI.rejectWithValue(error.message);
        }
    },
);