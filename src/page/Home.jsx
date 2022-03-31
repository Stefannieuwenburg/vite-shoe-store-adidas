
import { useNavigate } from "react-router";
import styles from "./css/Home.module.css";
import React from "react";


const Home = () => {
    const navigate = useNavigate();
    const onClick = () => navigate("/shopCart");

    return (
        <div className={styles.Home}>
            <button className={styles.button} onClick={onClick}>
                Buy Now
            </button>
        </div>
    );
};

export default Home;
