import { configureStore } from '@reduxjs/toolkit';
import homeslice from '../../redux/slices/homeslice';
import loginslice from '../../redux/slices/loginslice'
import authslice from '../../redux/slices/authslice'
import regislice from '../../redux/slices/registerslice'

const store = configureStore({
    reducer: {
        home: homeslice,
        login: loginslice,
        auth: authslice,
        regis: regislice,
    },
})

export default store