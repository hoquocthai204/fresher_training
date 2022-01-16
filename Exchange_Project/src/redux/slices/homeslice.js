import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        coinList: [],
        otherOption: 'language',
        post: [],
        socketdata: [],
        language: JSON.parse(localStorage.getItem('lang')) || { code: "en", name: "English" },
        currency: JSON.parse(localStorage.getItem('curr')) || { code: "USD", symbol: "$" },
        showDownloadBox: false,
        showOptionBox: false,
        langList: []
    },
    reducers: {
        setLangList(state, action) {
            let newstate = {
                ...state,
                langList: action.payload
            }
            return newstate
        },
        setShowDownloadBox(state, action) {
            let newstate = {
                ...state,
                showDownloadBox: action.payload
            }
            return newstate
        },
        setShowOptionBox(state, action) {
            let newstate = {
                ...state,
                showOptionBox: action.payload
            }
            return newstate
        },
        setCoinList(state, action) {
            let newstate = {
                ...state,
                coinList: action.payload
            }
            return newstate
        },
        setOtherOption(state, action) {
            let newstate = {
                ...state,
                otherOption: action.payload
            }
            return newstate
        },
        setSocketData(state, action) {
            let newstate = {
                ...state,
                socketdata: action.payload
            }
            return newstate
        },
        setLanguage(state, action) {
            let newstate = {
                ...state,
                language: action.payload
            }
            return newstate
        },
        setCurrency(state, action) {
            let newstate = {
                ...state,
                currency: action.payload
            }
            return newstate
        },
        addPost(state, action) {
            let newstate = {
                ...state,
                post: [...state.post, action.payload]
            }
            return newstate
        },
        removePost(state, action) {
            state.splice(action.payload, 1)
        }
    }
});

const { actions, reducer } = homeSlice;
export const {
    setCoinList,
    setOtherOption,
    setSocketData,
    setLanguage,
    setCurrency,
    setShowDownloadBox,
    setShowOptionBox,
    setLangList } = actions;
export default reducer;