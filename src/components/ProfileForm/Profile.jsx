import React, {useEffect, useState} from "react"
import profileService from "../../services/profile"
import {useNavigate, useNavigation} from "react-router-dom";
import style from "./profile.module.css"
import {PuffLoader} from "react-spinners";
export async function loader() {
    // const user = await profileService.getUser()
    const user = null
    return {user}
}
export const Profile = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const navigation = useNavigation()

    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedUser");
        if(loggedUser) {
            const user = JSON.parse(loggedUser)
            profileService.setToken(user.data.token)
            profileService.setUserId(user.data.userId)
            console.log(user.data.userId)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setUsername('')
            setEmail('')
            setImage('')
            navigate('profile')
        }catch (e) {
            console.error(e.message)
        }
    }

    return (
        <>
            {
                navigation.state === "loading" ? <span className={style.spinner}>
                <PuffLoader color="darkslateblue" />
            </span> : (
                    <form onSubmit={handleSubmit} className={style.form}>
                        <input type="text" name={`username`} value={username} placeholder={`username`} onChange={({target}) => setUsername(target.value)}/>
                        <input type="email" name={`email`} value={email} placeholder={`email`} onChange={({target}) => setEmail(target.value)}/>
                        <input type="url" name={`image`} value={image} placeholder={`image url`} onChange={({target}) => setImage(target.value)}/>
                        <button type={`submit`} className={style.updateButton}>Update Profile</button>
                    </form>
                )
            }
        </>
    )
}