import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, logOutThunk, refreshUserThunk, registerThunk } from "./operations";

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLogedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLogedIn = true;
                state.token = action.payload.token;
            })

            .addCase(logInThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLogedIn = true;
                state.token = action.payload.token;
                // console.log(`current token: ${state.token}`);
            })
            
            .addCase(logOutThunk.fulfilled, (state) => {
                state.user = {name: '', email: ''};
                state.isLogedIn = false;
                state.token = '';
            })
            
            
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogedIn = true;
                state.isRefreshing = false;        
            })
            .addCase(refreshUserThunk.pending, (state) => {
                state.isRefreshing = true;             
            })
            .addCase(refreshUserThunk.rejected, (state) => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = slice.reducer;