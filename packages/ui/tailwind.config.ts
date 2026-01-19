import type { Config } from "tailwindcss";

// Fintrust and Naandi Foundation Color Palette
export const sharedConfig: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx}" // generic path for apps to include UI package
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#117D6B", // Teal from "Save & Continue" button
                    hover: "#0E6859",
                    light: "#EDf7F6",
                },
                secondary: {
                    DEFAULT: "#0C4A6E", // Navy from "In Association With" / Sidebar
                    light: "#F0F9FF",
                },
                accent: {
                    DEFAULT: "#FCD34D", // Yellow/Gold from "Under Review" status
                    light: "#FEF3C7",
                },
                surface: {
                    DEFAULT: "#FFFFFF",
                    background: "#F3F4F6", // Light gray background
                    muted: "#9CA3AF",
                },
                status: {
                    success: "#10B981", // Green checkmarks
                    warning: "#F59E0B",
                    error: "#EF4444",
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    plugins: [],
};

export default sharedConfig;
