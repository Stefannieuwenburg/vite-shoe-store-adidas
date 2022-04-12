import style from "./css/NotFound.module.css";
import React from "react";
import { useNavigate } from "react-router";

const NotFound = (props) => {
    const navigate = useNavigate();

    const onClick = () => navigate("/");

    return (
        <div className={style.NotFound} id="notfound">
            <P className={style.p}>PAGE NOT FOUND</P>
            <Button className={style.button} onClick={onClick}>
                Retour Home
            </Button>
        </div>
    );
};

export default NotFound;
