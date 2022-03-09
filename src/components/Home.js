import React from 'react';
import Product from "./Product"
import "./home.css"


function Home(){
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    
                    <img src="https://wallpapercave.com/wp/wp7672261.jpg" alt="irelia" className="home__image"/>

                    <div className="home__row">
                        <Product />
                        <Product />
                    </div>

                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <div className="home__row">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home