import { createSlice } from '@reduxjs/toolkit'
import { customNavigate } from '../..';
import { getStorageJSON, https, saveStorageJSON, USERLOGIN } from '../../util/config';

const initialState = {
    userLogin: getStorageJSON(USERLOGIN),
    userProfile: {

    }
}   
const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    loginAction: (state,action) => {
        const userLogin = action.payload
        state.userLogin = userLogin;
    },
    getProfileAction: (state,action) => {
        state.userProfile = action.payload;
    }
  }
});
export const {loginAction,getProfileAction} = userReducer.actions
export default userReducer.reducer
export const loginActionApi = (userLogin) => {
    return async (dispatch) => {
        try {
            const res = await https.post('/Users/signin',userLogin);
            const action = loginAction(res.data.content);
            dispatch(action);
            // thanh cong luu vao store
            saveStorageJSON(USERLOGIN,res.data.content);
            // customNavigate.push('/profile')
        }
        catch(err) {
            alert(err.response?.data.message);
        }
    }
}
export const profileActionApi = () => {
    return async (dispatch) => {
        try {
            const res = await https.post('/Users/getProfile')
            // dua len storeRedux
            const action = getProfileAction(res.data.content);
            dispatch(action)
        } 
        catch(err) {
            if(err.response?.status === 401) {
                customNavigate.push('/login')
            }
        }
    }
}
