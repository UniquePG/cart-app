import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: function(state, action) {
            state.push(action.payload)
        },
        remove: function (state, action){
            return state.filter((item)=> item.id !== action.payload)

        }
    }
})

export const {add, remove } = CartSlice.actions;
export default CartSlice.reducer