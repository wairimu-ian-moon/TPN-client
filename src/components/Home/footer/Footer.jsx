import React from "react";
import style from "../home.module.css"
export const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                © Copyright {new Date().getFullYear()} by Ian Wairimu
            </footer>
        </>
    )
}