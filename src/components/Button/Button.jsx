import React from "react"

export const Button = ({className, onClick, name, type}) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {name}
        </button>
    )
}