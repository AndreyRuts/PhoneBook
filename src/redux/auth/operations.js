import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        setAuthHeader(data.token);
        return data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
        
    }
});
export const logInThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        setAuthHeader(data.token);
        return data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);
    }
});
export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const {data} = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);