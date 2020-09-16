import {cartActionTypes} from "./cartActionTypes";
import {addNewItemsToCart} from "./cartUtil";


const INITIAL_STATE={
    cartItems:[]
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {

        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addNewItemsToCart(state.cartItems,action.payload)
            };

        default:
            return state
    }
};
export default cartReducer;