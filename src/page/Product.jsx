import styles from "./css/Product.module.css";
import React from "react";
// import Items
import Item1 from '../images/item1.jpg';
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";


const Product = () => {
    return (
        <div className={styles.Product}>
            <h1>Products</h1>
            <div className={styles.container_cards}>
            <section className={styles.cards}>
                <article className={styles.card}>
                    <picture>
                        <img className={styles.item} src={Item1} alt="image" />
                    </picture>
                    <div className={styles.card_content}>
                        <h2>Model nr</h2>
                        <p>Price</p>
                    </div>
                </article>
                <article className={styles.card}>
                    <picture>
                        <img className={styles.item} src={Item2} alt="image" />
                    </picture>
                    <div className={styles.card_content}>
                        <h2>Model nr</h2>
                        <p>Price</p>
                    </div>
                </article>
                <article className={styles.card}>
                    <picture>
                        <img className={styles.item} src={Item3} alt="image" />
                    </picture>
                    <div className={styles.card_content}>
                        <h2>Model nr</h2>
                        <p>Price</p>
                    </div>
                </article>
                <article className={styles.card}>
                    <picture>
                        <img className={styles.item} src={Item4} alt="image" />
                    </picture>
                    <div className={styles.card_content}>
                        <h2>Model nr</h2>
                        <p>Price</p>
                    </div>
                </article>
            </section>
            </div>
        </div>
    );
};

export default Product;
