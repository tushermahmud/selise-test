import React from "react";
import {connect} from "react-redux";

const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
})
const SmallCart=({cartItems})=>{
    const accumulatedTotal=cartItems.reduce((accumulateTotal,cartItem)=>
        accumulateTotal+(cartItem.price*cartItem.quantity),0);
    const all_items=item=>(
        <div className="cart" key={item._id}>
            <div className="cart-info">
                <span className="text-justify">{item.title.toUpperCase()}</span>
                <p>{`${item.quantity}X${item.price}`}</p>
            </div>
            <div className="cart-image">
                <img src={item.picture} alt=""/>
            </div>
        </div>
    )
    return(
        <div className="col-md-4">
            <h2 className="text-left">Cart</h2>
            <div className="text-left">{cartItems.length>0?(
                <div className="list-group">
                    {cartItems.map(item=>(all_items(item)))}
                </div>
            ):"no product found !"}</div>
            <h6>{accumulatedTotal>0?(<div>
                <hr/>
                <p className="text-left">subTotal:{accumulatedTotal}</p>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark mr-1">View Cart</button>
                    <button type="button" className="btn btn-dark">Checkout</button>
                </div>

            </div>):""}</h6>
        </div>
    )
}
export default connect(mapStateToProps)(SmallCart);