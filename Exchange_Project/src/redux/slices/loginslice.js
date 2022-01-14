import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        inLoginorRegis: false,
        auth: {
            token: ''
        },
        post: []
    },
    reducers: {
        setInLoginorRegis(state, action) {
            let newstate = {
                ...state,
                inLoginorRegis: action.payload
            }
            return newstate
        },
        setemail(state, action) {
            let newstate = {
                ...state,
                email: action.payload
            }
            return newstate
        },
        setpassword(state, action) {
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
export const { setemail, setpassword, setAuth, setInLoginorRegis } = actions
export default reducer;