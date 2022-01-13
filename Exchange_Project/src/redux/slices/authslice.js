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
        setShowUserInfo(state) {
            let newstate = {
                ...state,
                showUserInfo: !state.showUserInfo
            }
            return newstate
        },
        setShowNotificationBox(state) {
            let newstate = {
                ...state,
                showNotificationBox: !state.showNotificationBox
            }
            return newstate
        }
    }
})

const { actions, reducer } = authSlice;
export const { setShowUserInfo, setShowNotificationBox, setUnreadNotification, setListNotification } = actions
export default reducer;