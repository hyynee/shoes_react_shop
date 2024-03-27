import { createSlice } from '@reduxjs/toolkit'
import { getStorageJSON, saveStorageJSON, USERLOGIN } from '../../util/config';



const getCartItems = (state) => {
    try {
        const cartItems = getStorageJSON(state.userCard);
        if (cartItems === null) return [];
        return JSON.parse(cartItems);
    } catch (err) {
        return [];
    }
}
const initialState = {
    userCard: '',
    cartList: getCartItems(),
}

const itemReducer = createSlice({
    name: 'itemReducer',
    initialState,
    reducers: {
        addItemAction: (state, action) => {
            const { user, item } = action.payload;
            const itemClick = state.cartList.find(sp => sp.id === item.id);
            if (!state.userCard) {
              state.userCard = user;
            }
            if (itemClick) {
                itemClick.quantity += 1;
            } else {
              state.cartList.push({ ...item, quantity: 1 });
            }
            saveStorageJSON(state.userCard, state);
        },
        delItemAction: (state, action) => {
            const indexDel = state.cartList.findIndex(sp => sp.id === action.payload);
            if (indexDel !== -1) {
                state.cartList.splice(indexDel, 1)
            }
            state.userCard = state.cartList;
            saveStorageJSON(state.userCard, state);
        },
    }
});



export const { addItemAction, delItemAction, updateCartListAction } = itemReducer.actions

export default itemReducer.reducer