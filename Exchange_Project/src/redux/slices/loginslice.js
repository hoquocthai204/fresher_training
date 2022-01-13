import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        inLogin: false,
        auth: {
            token: ''
        },
        post: []
    },
    reducers: {
        setInLogin(state, action) {
            let newstate = {
                ...state,
                inLogin: action.payload
            }
            return newstate
        },
        setEmail(state, action) {
            let newstate = {
                ...state,
                email: action.payload
            }
            return newstate
        },
        setPassword(state, action) {
            let newstate = {
                ...state,
                password: action.payload
            }
            return newstate
        },
        setIsLogin(state, action) {
            let newstate = {
                ...state,
                isLogin: action.payload
            }
            return newstate
        },
        setAuth(state, action) {
            let newstate = {
                ...state,
                auth: action.payload
            }
            return newstate
        }
    }
})

const { actions, reducer } = loginSlice;
export const { setIsLogin, setEmail, setPassword, setAuth, setInLogin } = actions
export default reducer;