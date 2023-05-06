import React, {useEffect, useState} from "react";
import loginService from "../../services/login";
import style from "./loginForm.module.css"
import {Button} from "../Button/Button";

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedInUser, setLoggedInUser] = useState('')

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setLoggedInUser(user)
            loginService.setToken(user.data.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({username, password})
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )
            loginService.setToken(user.data.token)
            setLoggedInUser(user)
            setUsername('')
            setPassword('')
        }catch (e) {
            console.error(e.message)
        }
    }
    return (
        <>
            <form onSubmit={handleLogin} className={style.form}>
                <input type="text" name="username" placeholder={`username`} value={username} onChange={({target}) => {setUsername(target.value)}}/>
                <input type="password" name="password" placeholder={`password`} value={password} onChange={({target}) => {setPassword(target.value)}}/>
                {/*<button type="submit">Login</button>*/}
                <Button type={`submit`} className={style.buttonLogin} name="Login" />
            </form>
        </>
    )
}