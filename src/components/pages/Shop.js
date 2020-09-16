import React,{useState,useEffect} from "react";
import ShopProduct from "../ShopProducts";
import Cart from "../SmallCart";
import {Link} from "react-router-dom";
import {Products} from "../../data/Products";

const Shop= ()=>{
    const [products,setProduct]=useState(Products)
    const [run,setRun]=useState(false)
    useEffect(()=>{

    },[run])
    const sortByPriceAsc=()=>{
        setProduct(products.sort((a,b)=>a.price-b.price))
        setRun(!run);
    }
    const sortByPriceDesc=()=>{
        setProduct(products.sort((a,b)=>b.price-a.price))
        setRun(!run);
    }


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="text-left">Shop</h2>
                    <div>
                        <p className="text-left">Showing 1-9 of 16 results</p>
                        <div className="d-flex justify-content-end">
                            <button onClick={()=>sortByPriceAsc()}>
                                Low to High
                            </button>
                            <button onClick={()=>sortByPriceDesc()}>
                                High To Low
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        {products.map(product=>(<ShopProduct key={product._id} product={product}/>))}
                    </div>
                </div>
                <Cart/>
            </div>
        </div>
    )
}
export default Shop;