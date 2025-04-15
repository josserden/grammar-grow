// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native/all",
    "prettier",
    "plugin:@tanstack/query/recommended",
  ],
  ignorePatterns: ["/dist/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "react-native/no-raw-text": "off",
    "react/prop-types": "off",
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/no-unstable-deps": "warn",
    "@tanstack/query/no-void-query-fn": "error"
  },
};
