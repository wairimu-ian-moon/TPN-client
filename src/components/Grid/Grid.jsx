import React from "react";
import style from "./grid.module.css"
export const Grid = ({children}) => {
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}