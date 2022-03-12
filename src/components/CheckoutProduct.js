import React from "react";
import "./CheckoutProduct.css"

function CheckoutProduct() {
    return (

        <div className="checkoutProduct">
            <img src="https://i.pinimg.com/564x/20/33/f0/2033f076f90d992b5e675fbede18bd40.jpg" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title ">f type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className="checkoutProduct__rating">
                ⭐
                </div>
                <button>Remove from basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
