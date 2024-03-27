import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrPhim: [],
}

const movieReducer = createSlice({
  name: 'movieReducer',
  initialState,
  reducers: {
    getAllPhim: (state,action) => {
        state.arrPhim = action.payload;
    }
  }
});

export const {getAllPhim} = movieReducer.actions

export default movieReducer.reducer

export const getAllPhimAPI = () => {
    return async dispatch => {
        const res = await http.get(`/QuanLyPhim/LayDanhSachPhim`);
        const action = getAllPhim(res.data.content)
        dispatch(action)
    }
}