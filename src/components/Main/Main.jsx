import React from "react";
import style from "./main.module.css"
import {InlineNavigation} from "./InlineNavigation/InlineNavigation";
import {Outlet} from "react-router-dom";
export const Main = () => {
    return (
        <div className={style.main}>
            <InlineNavigation />
            <div>
                <Outlet />
            </div>
        </div>
    )
}