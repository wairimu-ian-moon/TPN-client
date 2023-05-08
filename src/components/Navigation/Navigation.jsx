import React from "react";
import style from "./navigation.module.css"
import Logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";

const NavigationItems = () => {
    return (
        <ul className={style.navigationItems}>
            {
                ["Home","Notifications", "Messages", "Communities", "History"].map((v, i) => {
                    return <li className={style.item} key={i}>
                        <Link className={style.link} to={`/dashboard`}>{v}</Link>
                    </li>
                })
            }
        </ul>
    )
}
export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <span className={style.logoContainer}>
                <img className={style.logo} src={Logo} alt="logo"/>
                <h1>TPN-App</h1>
            </span>
            <NavigationItems />

            <Link className={style.linkBtn} to={`profile`}>
                Profile
            </Link>
        </div>
    )
}