/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    important: true,
    prefix: "tw-",
    corePlugins: {
        preflight: false,
    }

}
