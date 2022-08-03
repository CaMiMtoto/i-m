/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                brand: {

                    "500": "#003281"
                }
            }
        },
    },
    plugins: [],
    important: true,
    prefix: "tw-",
    corePlugins: {
        preflight: false,
    }

}
