module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        },
        "rules": {
            "no-use-before-define": "off",
            "import/no-unresolved": "off",
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    "js": "never",
                    "jsx": "never",
                    "ts": "never",
                    "tsx": "never"
                }
            ],
            "react/jsx-filename-extension": [1, { "extensions": [".jsx"] }],
            "import/extensions": [1, {
                ".jsx": "never"
            }]
        }
    }
}
