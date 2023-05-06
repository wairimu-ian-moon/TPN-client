import React from "react";
import style from "./navigation.module.css"
import Logo from "../../assets/logo.svg"
import {Button} from "../Button/Button";
import {Link, NavLink} from "react-router-dom";

const NavigationItems = () => {
    return (
        <ul className={style.navigationItems}>
            {
                ["Home", "Profile", "Messages", "Communities", "History"].map((v, i) => {
                    return <li className={style.item} key={i}>
                        <a className={style.link} href="#">{v}</a>
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
            <Link to={`login`}>
                <Button className={style.btn} name="Login" />
            </Link>
        </div>
    )
}