import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            indent: ["error", 4], // Cambia 2 por 4 para 4 espacios o "tab" para tabulaciones
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
