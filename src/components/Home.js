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
                        <Product 
                            title="eaeaeaeaeaeaeaeaeaeaeaeaeaeeaeaeaeaeaeaeaeaeaaeaeaeaeaeaea"
                            price={11.50}
                            rating={5}
                            image="https://i.pinimg.com/564x/34/25/bd/3425bd90c47964fbd363feb48a13c5f3.jpg"
                        />
                        <Product 
                            title="fkjasdlfjsapdiofjioasdpfjspafpodsajfpjsaodjfposdafjopsadkfposd"
                            price={12.50}
                            rating={5}
                            image="https://i.pinimg.com/564x/14/0f/67/140f67c8be82150fa0df5bebfd175233.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            title="vaivaiviaviviaviaviavaiviaiviaiviaiviaiviaviaviiavaiviaiviaviaivi"
                            price={14.50}
                            rating={5}
                            image="https://i.pinimg.com/564x/5e/00/3f/5e003fd98e44673d1bdc099bad8fcd7f.jpg"
                        />
                        <Product 
                            title="oidoasidoasoidoiasidosidisoidoisdsidosiodiosidosidoisoidosidoisoido"
                            price={141.50}
                            rating={5}
                            image="https://i.pinimg.com/564x/ca/c8/0a/cac80affadd1f10dc36ef7462b835d20.jpg"
                        />
                        <Product 
                            title="dskjdksjdksjdsjdkjskdjakkajkjakaaaaajkajakjaaiiaiaaiiaiiaiaiwiiwiwi"
                            price={146.50}
                            rating={5}
                            image="https://i.pinimg.com/564x/02/43/b8/0243b8b4793dee9c387f32abeeb0b374.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            title="fdhbdsdghhhhhhhhhhhhhhhhhhdioasfidsiygsdufysudfyuadnjnabrwnvbrwevrw"
                            price={1488.50}
                            rating={5}
                            image="https://i.pinimg.com/564x/0b/0c/e1/0b0ce1eba8110ae42e66ee8d1f98f586.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home