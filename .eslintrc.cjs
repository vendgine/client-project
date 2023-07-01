module.exports = {
    "extends": ["./node_modules/@vngn/codestyle/.eslintrc.cjs"],
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "extends": [
                // Use plugin for tsx files:
                "plugin:react/recommended",
            ],
            "rules": {
                // Prevent importing the submodules of other modules
                "import/no-internal-modules": "off",
                // Forbid importing modules from parent directories
                "import/no-relative-parent-imports": "off",
                // Forbid default exports
                "import/no-default-export": "off",
                // Forbid namespace (a.k.a. "wildcard" *) imports
                "import/no-namespace": "off",
            },
        },
    ],
    "parserOptions": {
        // Use tsconfig from root directory:
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json",
    },
    "settings": {
        "react": {
            "version": "18",
        }
    }
}
