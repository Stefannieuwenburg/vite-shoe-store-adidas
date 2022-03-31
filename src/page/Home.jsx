
import { useNavigate } from "react-router";
import styles from "./css/Home.module.css";
import React from "react";

import Sobako from "../images/Adidas_fullhd.jpg";

const Home = () => {
    const navigate = useNavigate();
    const onClick = () => navigate("/shopCart");

    return (
        <div className={styles.Home}>
            <picture className={styles.img_home}>
                <img src={Sobako} alt="home_image"
                />
            </picture>
            <button className={styles.button} onClick={onClick}>
                Buy Now
            </button>
        </div>
    );
};

export default Home;
