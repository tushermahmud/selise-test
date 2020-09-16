import React,{Fragment} from "react";
import {addCartItems} from "../redux/cart/cartActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const ShopProduct=({product,addCartItems})=>{
    return(
        <Fragment>
            <div className="col-md-4" style={{marginTop:"30px"}}>
                <div className="card" style={{width: "100%"}}>
                    <img src={product.picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link to={`/product/${product._id}`}><h5 className="card-title text-uppercase text-center">{product.title}</h5></Link>
                        <p className="card-subtitle mb-2 text-muted text-center">{`$ ${product.price}`}</p>
                        <button className="btn btn-secondary" onClick={()=>addCartItems(product)}>
                            Add To Cart
                        </button>
                        <Link className="btn btn-secondary" to="/cart">
                            View cart
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps=dispatch=>({
    addCartItems:(product)=>dispatch(addCartItems(product))
})

export default connect(null,mapDispatchToProps)(ShopProduct);