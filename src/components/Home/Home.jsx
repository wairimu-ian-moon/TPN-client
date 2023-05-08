import React, {useEffect, useState} from "react"
import {TopNavigation} from "./TopNavigation/TopNavigation";
import {Outlet} from "react-router-dom";
import {Footer} from "./footer/Footer";
import {Loader} from "../Loader/Loader";

export const Home = () => {
    const[loading, setLoading] = useState(true)
    useEffect(() =>  {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            {
                loading ? <Loader /> : (
                    <div>
                        <TopNavigation />
                        <div>
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                )
            }

        </>
    )
}