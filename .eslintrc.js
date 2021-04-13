// https://github.com/typescript-eslint/typescript-eslint
module.exports = {
    parser: "@typescript-eslint/parser",
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    // https://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        browser: true,
        node: true,
        commonjs: true,
    },
    extends: [
        "plugin:prettier/recommended",
        "prettier/react",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        // 커밋 시 남아있지 않도록 console.log
        "no-console": ["warn", { allow: ["warn", "error"] }],
        // 커밋 시 남아있지 않도록 debugger
        "no-debugger": "warn",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    ignorePatterns: [
        "node_modules/",
        "mock/",
        "build/",
        "config/",
        ".idea/",
        "webpack.config.js",
    ],
};
