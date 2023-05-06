import React from "react";
import style from "./default.module.css"
import getBlogService from "../../services/createBlog";
import {useLoaderData} from "react-router-dom";

export async function loader () {
    const response = await getBlogService.getBlogs()
    return {response}
}

export const Default = () => {
    const response = useLoaderData()
    return (
        <div className={style.default}>
            {
                response.response.blogs.map((v) => {
                return <div key={v.id} className={style.content}>
                        <img src={v.Image} alt={v.title}/>
                        <span>createdAt: {v.createdAt}</span>
                        <div className={style.textContent}>
                            <h1>{v.title}</h1>
                            <p>{v.content}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}