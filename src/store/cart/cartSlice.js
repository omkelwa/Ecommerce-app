import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: [],
    reducers : {
        add : (state, action) =>{
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )
            if(itemIndex >= 0){
                alert("This Product Already In Cart !!! If you want same more Product Then visit to Cart & Increase Product Quantity");
                
            }else{
                const tempProduct = {...action.payload, cartQuantity : 1}
                state.push(tempProduct)
            }
        },
        remove : (state, action) =>{
            return state.filter(item => item.id !== action.payload)
        },
        increment : (state, action) =>{
            const itemIndex = state.findIndex(
                (item)=> item.id === action.payload
            )
            state[itemIndex].cartQuantity += 1
        },
        decrement : (state, action) =>{
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload
            )
            if(state[itemIndex].cartQuantity > 0){
            state[itemIndex].cartQuantity -= 1
        }
        }
       
    },
})

export const {add , remove, increment, decrement} = cartSlice.actions
export default cartSlice.reducer