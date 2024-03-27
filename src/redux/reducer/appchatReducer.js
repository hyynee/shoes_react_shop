import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {name: "AnhHuy",content: " iu changg lam"},
        {name: "ThuyTrang",content: " iu hyy lam"}
    ]
}

const appchatReducer = createSlice({
  name: 'appchatReducer',
  initialState,
  reducers: {
    addCommentActione: (state,action) =>{
        // state.arrComment = [...state.arrComment,action.payload]
        let userComment = {...action.payload};
        state.arrComment.push(userComment)
    }
  }
});

export const {addCommentActione} = appchatReducer.actions

export default appchatReducer.reducer