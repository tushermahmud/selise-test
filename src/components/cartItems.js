import React from "react";

const CartItem=({item})=>{
    return(
        <tr>
            <td>
                <img src={item.picture} style={{width:"100px",height:"100px"}} alt=""/>
            </td>
            <td>
                {item.title}
            </td>
            <td>
                {item.price}
            </td>
            <td>
                {item.quantity}
            </td>
            <td>
                {item.price*item.quantity}
            </td>
        </tr>
    )
}
export default CartItem;