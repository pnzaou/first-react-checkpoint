import React from "react";
import product from '../product.js'

const Image = () => {
    return <img src={product.product_url_picture} alt="Image du produit" height={200}/>
}

export default Image