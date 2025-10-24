import React from "react";
import { twMerge } from "tailwind-merge";
const Button: React.FC<{ title: string, className?: string }> = ({ title, className }) => {
    return (
        <button className={twMerge(`${className} bg-white text-black flex gap-2 py-3 px-6 rounded-2xl`)}>
            <span className="font-bold text-base font-nunito capitalize">{title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="#212121" />
            </svg>
        </button>
    )

}
export default Button;