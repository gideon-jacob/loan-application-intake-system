import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 placeholder-gray-400 ${error ? "border-status-error focus:ring-status-error/50" : ""
                            } ${icon ? "pr-10" : ""} ${className}`}
                        {...props}
                    />
                    {icon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {icon}
                        </div>
                    )}
                </div>
                {error && <p className="mt-1 text-sm text-status-error">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";
