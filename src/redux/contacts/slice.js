import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, deleteContactThunk, addContactThunk } from "./operations";


const initialState = {
        items: [],
        isLoading: false,
        error: null,  
};
const statusRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}
const statusPending = (state) => {
    state.isLoading = true;
    state.error = null;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchContactsThunk.rejected, statusRejected)
            .addCase(fetchContactsThunk.pending, statusPending)
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
               state.items = state.items.filter(
                    (contact) => contact.id !== action.payload.id);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteContactThunk.rejected, statusRejected)
            .addCase(deleteContactThunk.pending, statusPending)
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addContactThunk.rejected, statusRejected)
            .addCase(addContactThunk.pending, statusPending);
    },
});


export const contactsReducer = contactsSlice.reducer;