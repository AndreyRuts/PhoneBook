import { createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, deleteContactThunk, addContactThunk } from "./operations";


const initialState = {
  contacts: {
        items: [],
        isLoading: false,
        error: null,
    }
};
const statusRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}
const statusPending = (state) => {
    state.loading = true;
    state.error = null;
}


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.contacts.contacts.items = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchContactsThunk.rejected, statusRejected)
            .addCase(fetchContactsThunk.pending, statusPending)

            .addCase(deleteContactThunk.fulfilled, (state, action) => {
               state.contacts.items = state.contacts.items.filter(
                    (contact) => contact.id !== action.payload.id);
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteContactThunk.rejected, statusRejected)
            .addCase(deleteContactThunk.pending, statusPending)
        
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.contacts.items.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(addContactThunk.rejected, statusRejected)
            .addCase(addContactThunk.pending, statusPending);
    },
});

export const contactsReducer = contactsSlice.reducer;