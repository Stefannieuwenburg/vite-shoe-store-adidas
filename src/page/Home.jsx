
import { useNavigate } from "react-router";
import styles from "./css/Home.module.css";
import React from "react";


const Home = (props) => {
    const navigate = useNavigate();
    const onClick = () => navigate("/ShopCart");

    return (
        <div className={styles.Home} id="home">
            <h1>Adidas lanceert</h1>
            <button className={styles.button} onClick={onClick}>
                Buy Now
            </button>
        </div>
    );
};

export default Home;
