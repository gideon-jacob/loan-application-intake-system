"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    fullWidth?: boolean;
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const Button = ({
    children,
    className = "",
    fullWidth = false,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary",
        outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
        ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
