import React, {useEffect, useState} from "react"
import {Navigation} from "../Navigation/Navigation";
import {Main} from "../Main/Main";
import {Grid} from "../Grid/Grid";
import {Loader} from "../Loader/Loader";

export const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {
                loading ? <Loader />: (
                    <Grid>
                        <Navigation />
                        <Main />
                    </Grid>
                )
            }
        </>
    )
}