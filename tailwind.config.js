/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {},
        colors: {
            black: "#1C1C1C",
            primary: "#F0C45A",
            primaryLight: "#fff8d7",
            primaryHover: "#a8963f",
            secondary: "#905AF0",
            secondaryDark: "#653fa8",
        },
    },
    plugins: [flowbite.plugin()],
};
