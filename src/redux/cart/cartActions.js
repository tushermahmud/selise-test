import {cartActionTypes} from "./cartActionTypes";

export const addCartItems=product=>({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:product
})
