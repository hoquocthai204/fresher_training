import { configureStore } from '@reduxjs/toolkit';
import homeslice from './slices/homeslice';
import loginslice from './slices/loginslice'

const store = configureStore({
    reducer: {
        home: homeslice,
        login: loginslice
    },
})

export default store