/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens } from "fluid-tailwind";

module.exports = {
    content: {
        files: ["./src/**/*.{html,js}"],
        extract,
    },
    theme: {
        screens,
        extend: {},
    },
    plugins: [fluid],
};
