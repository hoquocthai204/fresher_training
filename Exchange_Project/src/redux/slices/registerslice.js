import { createSlice } from "@reduxjs/toolkit";

const regisSlice = createSlice({
    name: 'register',
    initialState: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        langCode: 'en',
        registered: false,
        checkCondition: false
    },
    reducers: {
        setCheckCondition(state, action) {
            let newstate = {
                ...state,
                checkCondition: action.payload
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
        setfirstName(state, action) {
            let newstate = {
                ...state,
                firstName: action.payload
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
        setlangCode(state, action) {
            let newstate = {
                ...state,
                langCode: action.payload
            }
            return newstate
        },
        setRegistered(state, action) {
            let newstate = {
                ...state,
                registered: action.payload
            }
            return newstate
        }
    }
})

const { actions, reducer } = regisSlice;
export const {
    setemail,
    setpassword,
    setfirstName,
    setlastName,
    setlangCode,
    setRegistered,
    setCheckCondition } = actions
export default reducer;