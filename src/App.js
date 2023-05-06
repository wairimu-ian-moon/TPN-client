import React from "react";
import {Grid} from "./components/Grid/Grid";
import {Navigation} from "./components/Navigation/Navigation";
import {Main} from "./components/Main/Main";

export const App = () => {
    return (
        <>
            <Grid>
                <Navigation />
                <Main />
            </Grid>
        </>
    )
}