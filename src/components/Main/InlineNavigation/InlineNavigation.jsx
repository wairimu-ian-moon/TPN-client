import React, {useEffect, useState} from 'react';
import style from '../main.module.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link, redirect} from "react-router-dom";
import {Button} from "../../Button/Button";

function logout () {
    window.localStorage.removeItem("loggedUser")
    return redirect('login')
}
const TopNavigation = () => {
    const [appUser, setAppUser] = useState('')
    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedUser")
        if(loggedUser) {
            const user = JSON.parse(loggedUser)
            setAppUser(user)
        }
    }, [])
    return (
        <div className={style.topNavigation}>
            <div className={style.topNavigationLeft}>
                <SearchIcon className={style.searchIcon} />
                <input type="search" placeholder="Search"/>
            </div>
            {
                appUser ?  (
                    <div className={style.topNavigationRight}>
                        <div className={style.notificationBox}>
                            <NotificationsNoneIcon className={style.notificationIcon} />
                            <span className={style.notificationCount}>5</span>
                        </div>
                        <img loading="lazy" className={style.profile} src="https://images.pexels.com/photos/16653814/pexels-photo-16653814.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profile"/>
                        <Link className={style.link} to={`login`}>
                            <Button className={style.buttonLogout} onClick={logout()} name="Logout" />
                        </Link>
                    </div>
                ) : (
                    <div className={style.topNavigationRight}>
                        <Link className={style.link} to={`login`}>
                            <Button className={style.button} name="Login" />
                        </Link>
                        <Link className={style.link} to={`register`}>
                            <Button className={style.button} name="Register" />
                        </Link>
                    </div>

                )
            }

        </div>
    )
}
export const InlineNavigation = () => {
    return (
        <div className={style.navigation}>
            <TopNavigation />
        </div>
    )
}