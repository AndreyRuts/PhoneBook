import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { refreshUserThunk } from './redux/auth/operations';
import Layout from './components/Layout/Layout';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';
import RegistrationPage from './pages/RegistrationPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUserThunk());   
    }, [dispatch]);

    return (
        <>
            <Routes>
                
                <Route path='/' element={<Layout/>}>
                    <Route path='/login' element={
                        <RestrictedRoute>
                            <LoginPage />
                        </RestrictedRoute>} />
                    <Route path='/register' element={
                        <RestrictedRoute>
                            <RegistrationPage />
                        </RestrictedRoute>} />
                    <Route index element={<HomePage />}/>
                    <Route path='/contacts'
                        element={
                            <PrivateRoute>
                                <ContactsPage/>
                            </PrivateRoute>}/>
                    <Route path='*' element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </>
    );
};


export default App;