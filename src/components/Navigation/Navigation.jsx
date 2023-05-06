import React, {useEffect, useState} from "react";
import style from "./navigation.module.css"
import Logo from "../../assets/logo.svg"
import {Button} from "../Button/Button";
import {Link} from "react-router-dom";

const NavigationItems = () => {
    return (
        <ul className={style.navigationItems}>
            {
                ["Home","Notifications", "Messages", "Communities", "History"].map((v, i) => {
                    return <li className={style.item} key={i}>
                        <a className={style.link} href="/">{v}</a>
                    </li>
                })
            }
        </ul>
    )
}
export const Navigation = () => {
    const[appUser, setAppUser] = useState('')
    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedUser")
        if(loggedUser) {
            const user = JSON.parse(loggedUser)
            setAppUser(user)
        }
    }, [])
    return (
        <div className={style.navigation}>
            <span className={style.logoContainer}>
                <img className={style.logo} src={Logo} alt="logo"/>
                <h1>TPN-App</h1>
            </span>
            <NavigationItems />
            {
                appUser ? (
                    <Link to={`profile`}>
                        <Button className={style.btn} name="Profile" />
                    </Link>
                ) : (
                    <Link to={`login`}>
                        <Button className={style.btn} name="Profile" />
                    </Link>
                )
            }
        </div>
    )
}