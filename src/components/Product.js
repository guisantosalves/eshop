import React from "react"
import "./product.css"

function Product(){
    return(
        <div>
            <div className="product">

                <div className="product__info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac volutpat lectus. Proin nibh dui, ultricies non vehicula et, laoreet eu enim. Aenean eu volutpat neque. 
                        um porta sollicitudin vel</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>30</strong>
                    </p>
                    <div className="product__rating">⭐⭐⭐</div>
                </div>

                <img src="https://i.pinimg.com/564x/34/25/bd/3425bd90c47964fbd363feb48a13c5f3.jpg" alt="amumu" />

                <button>Add to basket</button>
            </div>
        </div>
    )
}

export default Product