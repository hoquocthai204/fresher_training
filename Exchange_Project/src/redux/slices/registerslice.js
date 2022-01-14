import { createSlice } from "@reduxjs/toolkit";

const regisSlice = createSlice({
    name: 'register',
    initialState: {
        email: '',
        firstName: '',
        langCode: '',
        lastName: '',
        password: '',
        registered: false
    },
    reducer: {
        setRegistered(state, action) {
            let newstate = {
                ...state,
                registered: action.payload
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
        setfirstName(state, action) {
            let newstate = {
                ...state,
                firstName: action.payload
            }
            return newstate
        },
        setlangCode(state, action) {
            let newstate = {
                ...state,
                langCode: action.payload
            }
            return newstate
        },
        setlastName(state, action) {
            let newstate = {
                ...state,
                lastName: action.payload
            }
            return newstate
        },
        setpassword(state, action) {
            let newstate = {
                ...state,
                password: action.payload
            }
            return newstate
        }
    }
})

const { actions, reducer } = regisSlice;
export const { setemail,
    setfirstName,
    setlangCode,
    setlastName,
    setpassword,
    setRegistered } = actions
export default reducer;