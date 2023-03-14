import React from 'react';
import "./Button.css"

export interface ButtonProps {
    variant: "primary" | "secondary" | "success" | "danger";
    children: React.ReactNode
}

const Button = ({ variant, children, ...res }: ButtonProps) => {
    return (
        <button className={`button ${variant}`} {...res}>
            {children}
        </button>
    )
}

export default Button