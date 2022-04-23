module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    plugins: [
        require('tw-elements/dist/plugin')
    ],
    theme: {
        extend: {},
    }
}