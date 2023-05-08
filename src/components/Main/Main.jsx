import React from "react";
import style from "./main.module.css"
import {InlineNavigation} from "./InlineNavigation/InlineNavigation";
import {Outlet} from "react-router-dom";
import {Footer} from "../Home/footer/Footer";
export const Main = () => {
    return (
        <div className={style.main}>
            <InlineNavigation />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}