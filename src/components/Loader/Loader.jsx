import React from "react";
import style from "./loader.module.css"
import {GridLoader} from "react-spinners";

export const Loader = () => {
    return (
        <div className={style.spinner}>
            <GridLoader color="darkslateblue" />
        </div>
    )
}