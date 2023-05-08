import React from 'react';
import style from '../main.module.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../Button/Button";

const TopNavigation = () => {
    const navigate = useNavigate()
    function logout () {
        window.localStorage.removeItem("loggedUser")
        return navigate('/')
    }
    return (
        <div className={style.topNavigation}>
            <div className={style.topNavigationLeft}>
                <SearchIcon className={style.searchIcon} />
                <input type="search" placeholder="Search"/>
            </div>
            <div className={style.topNavigationRight}>
                <div className={style.notificationBox}>
                    <NotificationsNoneIcon className={style.notificationIcon} />
                    <span className={style.notificationCount}>5</span>
                </div>
                <Button onClick={logout} className={style.buttonLogout} name={`Logout`}/>
                <Link className={style.button} to={`create-blog`}>
                    Create BLog
                </Link>
                <Link to={`profile`}>
                    <img loading="lazy" className={style.profile} src="https://images.pexels.com/photos/16653814/pexels-photo-16653814.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profile"/>
                </Link>
            </div>
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