import React from "react";
import style from "./css/Product.module.css";

// import Items
import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";

export default function Product(props) {
    

    return (
        <>
            <div className={style.card_imag_grid}>
                <div className={style.card_body}>
                    <img className={style.img} src={Item1} alt="img" />
                    <p>this is a card</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <button className={style.btn_primary}>At to Cart</button>
                </div>
                <div className={style.card_body}>
                    <img className={style.img} src={Item3} alt="img" />
                    <p>this is a card</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <button className={style.btn_primary}>At to Cart</button>
                </div>
                <div className={style.card_body}>
                    <img className={style.img} src={Item1} alt="img" />
                    <p>this is a card</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <button className={style.btn_primary}>At to Cart</button>
                </div>
                <div className={style.card_body}>
                    <img className={style.img} src={Item4} alt="img" />
                    <p>this is a card</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <button className={style.btn_primary}>At to Cart</button>
                </div>
                <div className={style.card_body}>
                    <img className={style.img} src={Item3} alt="img" />
                    <p>this is a card</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <button className={style.btn_primary}>At to Cart</button>
                </div>
                <div className={style.card_body}>
                    <img className={style.img} src={Item3} alt="img" />
                    <p>this is a card</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <button className={style.btn_primary}>At to Cart</button>
                </div>
            </div>
        </>
    );
}
