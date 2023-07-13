import tailwindcss from "tailwindcss"
import postcssPresetEnv from "postcss-preset-env"
import autoprefixer from "autoprefixer"

module.exports = {
    plugins: [
        autoprefixer,
        postcssPresetEnv,
        tailwindcss
    ],
};