import React from "react"

export const Button = ({className, onClick, name}) => {
    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    )
}