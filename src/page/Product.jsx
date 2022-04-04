
import style from "./css/Product.module.css";

// import Items
import Item1 from "../images/item1.jpg";
import Item2 from "../images/item2.jpg";
import Item3 from "../images/item3.jpg";
import Item4 from "../images/item4.jpg";

function product() {
    return (
        <>
            <header className={style.flex_block_center}>
                <div>
                    <a href="#/">
                        <h1>Schopping cart</h1>
                    </a>
                </div>
                
            </header>
        </>
    );
}

export default product;