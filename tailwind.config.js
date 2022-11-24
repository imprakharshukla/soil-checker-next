/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
    safelist: ['text-white', 'bg-violet-500', 'bg-gray-50'],
    theme: {
        extend: {},
    },
    plugins: [],
}