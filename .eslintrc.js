module.exports = {
    env: {
        "browser": true,
        "amd": true,
        "node": true,
        "es2021": true
    },
    extends: [
        "prettier", 
        "eslint:recommended",
        "plugin:react/recommended"
        ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          }
    },
    plugins: [ "prettier", "react"],
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "prettier/prettier": "error",
		"no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
	}
}