import React, {useEffect, useState} from "react"
import style from "./blogForm.module.css"
import createBlogService from "../../services/createBlog"
import {useNavigate, useNavigation} from "react-router-dom";
import {PuffLoader} from "react-spinners";
export const BlogForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [blogImage, setBlogImage] = useState('')
    const [loggedInUser, setLoggedInUser] = useState('')
    const navigate = useNavigate()
    const navigation = useNavigation()

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser')
        if(loggedUser) {
            const user = JSON.parse(loggedUser)
            setLoggedInUser(user)
            createBlogService.setToken(user.data.token)
        }
    }, [])


   const handleSubmit = async (e) => {
       const userId = loggedInUser.data.userId
       const image = blogImage
        e.preventDefault()
       try {
           await createBlogService.createBlog({title, content, image, userId})
           setTitle('')
           setBlogImage('')
           setContent('')
           navigate('/dashboard')
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
                  <form className={style.form} onSubmit={handleSubmit}>
                      <input type="text" name={`title`} placeholder={`title`} value={title} onChange={({target}) => setTitle(target.value)}/>
                      <input type="url" name="image" content={blogImage} placeholder={`image url`} onChange={({target}) => setBlogImage(target.value)}/>
                      <textarea name="content" id="" cols="30" rows="10" value={content} placeholder={`content...`} onChange={({target}) => setContent(target.value)}></textarea>
                      <button type={`submit`}>Create Blog</button>
                  </form>
              )
          }
      </>
  )
}