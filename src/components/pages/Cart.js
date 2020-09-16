import React from "react";
import {connect} from "react-redux";
import CartItem from "../cartItems";
const mapStateToProps=state=>({
    cartItems:state.cart.cartItems
})
const Cart=({cartItems})=>{
    const accumulatedTotal=cartItems.reduce((accumulateTotal,cartItem)=>
        accumulateTotal+(cartItem.price*cartItem.quantity),0);
    return(
        <div className="container">
            <div className="row" style={{marginTop:"200px"}}>
                <table className="table table-bordered">
                    <thead className="">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item=>(<CartItem item={item}/>))}
                    </tbody>
                </table>
            </div>
            <div className="card" style={{float:"right",width:"50%"}}>
                <div className="card-body">
                    <h6 className="mb-2 text-muted"> SubTotal:{accumulatedTotal}</h6>
                    <h6 className="mb-2 text-muted">Shipping:Free shipping</h6>
                    <h6 className="mb-2 text-muted">Total:{accumulatedTotal}</h6>

                </div>
            </div>
        </div>


    )
}
export default connect(mapStateToProps)(Cart);