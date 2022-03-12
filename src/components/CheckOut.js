import React from "react"
import CheckoutProduct from "./CheckoutProduct"
import "./CheckOut.css"
import Subtotal from "./Subtotal.js"


function CheckOut(){
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://i.pinimg.com/564x/18/cf/7f/18cf7fb5789d55db1bf6668197187ac1.jpg" alt="" className="checkout__ad"/>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default CheckOut