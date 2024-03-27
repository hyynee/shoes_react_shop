import {configureStore} from '@reduxjs/toolkit'
import appchatReducer from './reducer/appchatReducer'
import itemReducer from './reducer/itemReducer'
import movieReducer from './reducer/movieReducer'
import userReducer from './reducer/userReducer'
export const store = configureStore({
    reducer: {
        appchatReducer: appchatReducer,
        userReducer: userReducer,
        movieReducer: movieReducer,
        itemReducer: itemReducer,
    }
})