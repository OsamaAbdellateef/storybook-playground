import "./Input.css";

export interface InputProps {
    size: "small" | "medium" | "large"
}

const Input = ({ size, ...res }: InputProps) => {
    return (
        <input className={`input ${size}`} {...res} />
    )
}

export default Input