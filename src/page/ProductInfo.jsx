import React from "react";

import style from "./css/productInfo.module.css";

// import Items
import Item4 from "../images/item4.jpg";



const ProductInfo = () => (
    <header className={style.flex_block_center}>
        <div>
            <a href="#/">
                <h1>Schopping cart</h1>
            </a>
        </div>
        <div>
            <a href="#/Cart">Cart</a> <a href="#/Lognin">Login</a>
        </div>
    </header>
);
export default ProductInfo;
