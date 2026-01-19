import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    padding?: "none" | "sm" | "md" | "lg";
}

export const Card = ({ children, className = "", padding = "md" }: CardProps) => {
    const paddingClass = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    }[padding];

    return (
        <div className={`bg-surface rounded-2xl shadow-card ${paddingClass} ${className}`}>
            {children}
        </div>
    );
};
