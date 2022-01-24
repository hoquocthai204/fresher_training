import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tranHisApi from "../../apis/tranHisApi";

const getTranHisApi = createAsyncThunk('tranHis/getTran', async (data) => {
    const json = tranHisApi.getTranHis(data)
    return json.data
})

const tranHistoryslice = createSlice({
    name: 'tranHis',
    initialState: {
        type: 'withdraw',
        time: '1day',
        asset: 'all',
        status: 'all',
        resApi: []
    },
    reducers: {
        setType(state, action) {
            state.type = action.payload
        },
        setTime(state, action) {
            state.time = action.payload
        },
        setAsset(state, action) {
            state.asset = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: {
        [getTranHisApi.fulfilled]: (state, action) => {
            state.resApi = action.payload
        }
    }
})

const { actions, reducer } = tranHistoryslice;
export const { setType, setTime, setAsset, setStatus } = actions;
export default reducer;
export { getTranHisApi }