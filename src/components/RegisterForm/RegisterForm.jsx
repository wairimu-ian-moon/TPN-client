import React, {useState} from "react"
import registerService from "../../services/register"
import style from "./registerForm.module.css"

export const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     async function handleSubmit(e) {
        e.preventDefault()
         await registerService.register({username, email, password})
         setUsername('')
         setEmail('')
         setPassword('')
    }

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type="text" name={`username`} placeholder={`username`} value={username} onChange={({target}) => setUsername(target.value)}/>
            <input type="email" name={`email`} placeholder={`email`} value={email} onChange={({target}) => setEmail(target.value)}/>
            <input type="password" name={`password`} placeholder={`password`} value={password} onChange={({target}) => setPassword(target.value)}/>
            <button type={`submit`}>Register</button>
        </form>
    )
}