import React from 'react';
import style from '../main.module.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const TopNavigation = () => {
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
                <p className={style.name}>Ian Moon</p>
                <img loading="lazy" className={style.profile} src="https://images.pexels.com/photos/16653814/pexels-photo-16653814.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profile"/>
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