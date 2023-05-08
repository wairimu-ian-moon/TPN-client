import React from "react"
import {createBrowserRouter} from "react-router-dom";
import {App} from "./App";
import {ErrorPage} from "./utils/error-page";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {Default, loader as defaultLoader} from "./components/Default/Default";
import {RegisterForm} from "./components/RegisterForm/RegisterForm";
import {BlogForm} from "./components/BlogForm/BlogForm";
import {Dashboard} from "./components/Dashboard/Dashboard";
import {Profile, loader as profileLoader} from "./components/ProfileForm/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LoginForm />
            },
            {
                path: "register",
                element: <RegisterForm />,
            },
            {
                path: "login",
                element: <LoginForm />
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Default />,
                loader: defaultLoader
            },
            {
                path: "create-blog",
                element: <BlogForm />
            },
            {
                path: "profile",
                element: <Profile />,
                loader: profileLoader
            },
        ]
    },
])

export default router