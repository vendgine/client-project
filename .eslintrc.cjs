module.exports = {
    "extends": ["./node_modules/@vngn/codestyle/.eslintrc.cjs"],
    "parserOptions": {
        // Use tsconfig from root directory:
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json",
    },
}
