import React from "react";
import {Products} from "../../data/Products";

const SingleProduct=(props)=>{
    const product=Products.filter(item=>item._id===props.match.params.productId)
    return(
        <div className="container">

            <div className="row" style={{marginTop:"100px"}}>
                <div className="col-md-5">
                    <img className="img-fluid" src={product[0].picture} alt=""/>
                </div>
                <div className="col-md-7">
                    <h5>
                        {product[0].title}
                    </h5>
                    <p style={{color:"red"}}>{`$ ${product[0].price}`}</p>
                    <p>{product[0].description.substr(0,100)}{"......."}</p>
                    <div className="input-group">
                        <input type="number" value={1} id="inputGroupSelect04"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h2>Description</h2>
                <p>{product[0].description}</p>
            </div>
        </div>
    )
}
export default SingleProduct;