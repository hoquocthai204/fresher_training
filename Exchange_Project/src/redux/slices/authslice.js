import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        showUserInfo: false,
        showNotificationBox: false,
        unreadNotification: 0,
        listNotification: []
    },
    reducers: {
        setListNotification(state, action) {
            let newstate = {
                ...state,
                listNotification: action.payload
            }
            return newstate
        },
        setUnreadNotification(state, action) {
            let newstate = {
                ...state,
                unreadNotification: action.payload
            }
            return newstate
        },
        setShowUserInfo(state, action) {
            let newstate = {
                ...state,
                showUserInfo: action.payload
            }
            return newstate
        },
        setShowNotificationBox(state, action) {
            let newstate = {
                ...state,
                showNotificationBox: action.payload
            }
            return newstate
        }
    }
})

const { actions, reducer } = authSlice;
export const { setShowUserInfo, setShowNotificationBox, setUnreadNotification, setListNotification } = actions
export default reducer;