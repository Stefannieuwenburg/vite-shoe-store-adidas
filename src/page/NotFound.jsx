import styles from "./css/NotFound.module.css";
import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = () => navigate("/");

    return (
        <div className={styles.NotFound}>
            <P className={styles.p}>PAGE NOT FOUND</P>
            <Button className={styles.button} onClick={onClick}>Retour Home</Button>
        </div>
    );
};

export default NotFound;
