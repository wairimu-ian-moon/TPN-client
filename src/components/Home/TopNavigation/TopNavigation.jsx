import React from 'react'
import style from "../home.module.css"
import Logo from "../../../assets/logo.svg"
import {Link} from "react-router-dom";
export const TopNavigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.navigationLeft}>
                <img className={style.logo} src={Logo} alt="logo"/>
                <h1>TPN-App</h1>
            </div>
            <div className={style.navigationRight}>
                <Link className={style.link} to={'login'}>
                    Login
                </Link>
                <Link className={style.link} to={'register'}>
                    Register
                </Link>
            </div>
        </div>
    )
}