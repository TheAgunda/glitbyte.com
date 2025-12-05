import React from "react";
import { JSX } from "react";
import { cn } from "@/utils/helper";
interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;              // optional extra classes
}
const baseStyles = "text-slate-900 leading-tight tracking-normal font-sync";
const sizeStyles: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
    1: "text-5xl md:text-6xl font-bold",
    2: "text-3xl md:text-4xl font-bold",
    3: "text-2xl md:text-3xl font-semibold",
    4: "text-xl md:text-2xl font-semibold",
    5: "text-lg md:text-xl font-medium",
    6: "text-base md:text-lg font-medium",
};
const Heading: React.FC<HeadingProps> = ({ children, level = 1, className }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <Tag className={cn(baseStyles, sizeStyles[level], className)}>
            {children}
        </Tag>
    );
}

export default Heading;


// <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-normal font-montserrat">
//   Heading 1
// </h1>
// <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-normal font-montserrat">
//   Heading 2
// </h2>
// <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight tracking-normal font-montserrat">
//   Heading 3
// </h3>
// <h4 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight tracking-normal font-montserrat">
//   Heading 4
// </h4>
// <h5 className="text-lg md:text-xl font-medium text-slate-900 leading-tight tracking-normal font-montserrat">
//   Heading 5
// </h5>
// <h6 className="text-base md:text-lg font-medium text-slate-900 leading-tight tracking-normal font-montserrat">
//   Heading 6
// </h6>