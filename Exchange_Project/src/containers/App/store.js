import { configureStore } from '@reduxjs/toolkit';
import homeslice from '../../redux/slices/homeslice';
import loginslice from '../../redux/slices/loginslice'
import authslice from '../../redux/slices/authslice'
import regisslice from '../../redux/slices/register'

const store = configureStore({
    reducer: {
        home: homeslice,
        login: loginslice,
        auth: authslice,
        regis: regisslice
    },
})

export default store