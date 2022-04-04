import style from "./css/NotFound.module.css";
import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = () => navigate("/");

    return (
        <div className={style.NotFound}>
            <P className={style.p}>PAGE NOT FOUND</P>
            <Button className={style.button} onClick={onClick}>Retour Home</Button>
        </div>
    );
};

export default NotFound;
