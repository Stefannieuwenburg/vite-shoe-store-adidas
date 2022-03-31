import React from "react";
import styles from "./css/productInfo.module.css";

// import Items
import Item4 from "../images/item4.jpg";

const ProductInfo = () => {
    return (
        <div className={styles.ProductInfo}>
            <section>
                <div className={styles.card_body}>
                    <img src={Item4} alt="" />
                    <div className={styles.info_card}></div>
                    <p>adidas</p>
                    <p>price</p>
                    <button className={styles.button}>BUY NOW</button>
                </div>
            </section>
        </div>
    );
};

export default ProductInfo;
