import React, {useEffect, useState} from "react";
import loginService from "../../services/login";
import style from "./loginForm.module.css";
import {useNavigate, useNavigation} from "react-router-dom";
import {PuffLoader} from "react-spinners";

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const navigation = useNavigation()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
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
            setUsername('')
            setPassword('')
            navigate("/dashboard")
        }catch (e) {
            console.error(e.message)
        }
    }
    return (
        <div>
            {navigation.state === "loading" ? <span className={style.spinner}>
                <PuffLoader color="darkslateblue" />
            </span> : (
                <form onSubmit={handleLogin} className={style.form}>
                    <input type="text" name="username" placeholder={`username`} value={username} onChange={({target}) => {setUsername(target.value)}}/>
                    <input type="password" name="password" placeholder={`password`} value={password} onChange={({target}) => {setPassword(target.value)}}/>
                    <button className={style.buttonLogin} type="submit">Login</button>
                </form>
            )}
        </div>
    )
}