import React from 'react'
import Product from "../product/Product"
import {products} from "../../data"


export const ProductList = () => {
    return (
        <div className="flex flex-col items-center text-center py-14 md:px-10 px-5" id="Work">  
            <div className="md:w-4/6 w-full">
                <h1 className="md:text-5xl text-4xl font-bold">Create & inspire your world</h1>
                <p className="md:mt-5 hidden md:block">
                    Lama is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portf                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                    olio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="w-full flex flex-wrap justify-between">
                {products.map((data) => (
                    <Product  key={data.id} img={data.img} link={data.link}/>
                ))}

            </div>
        </div>
    )
}
