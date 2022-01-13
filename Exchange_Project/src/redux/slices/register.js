import { createSlice } from "@reduxjs/toolkit";
const regisSlice = createSlice({
    name: 'register',
    initialState: {
        regisPayload: {}
    },
    reducer:{
        setRegisPayload(state, action){
            let newstate = {
                ...state,
                regisPayload: action.payload
            }
            return newstate
        }
    }
})

const { actions, reducer } = regisSlice;
export const { setRegisPayload } = actions
export default reducer;