import React from "react"
import {createBrowserRouter} from "react-router-dom";
import {App} from "./App";
import {ErrorPage} from "./utils/error-page";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {Default, loader as defaultLoader} from "./components/Default/Default";
import {RegisterForm} from "./components/RegisterForm/RegisterForm";
import {BlogForm} from "./components/BlogForm/BlogForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Default />,
                loader: defaultLoader,
            },
            {
                path: "login",
                element: <LoginForm />
            },
            {
                path: "register",
                element: <RegisterForm />,
            },
            {
                path: "create-blog",
                element: <BlogForm />
            }
        ]
    }
])

export default router