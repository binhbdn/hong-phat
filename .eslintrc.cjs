/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    semi: [1, "always"],
    quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    // "max-len": ["error", { code: 300 }],
    "max-len": "off",
    "no-unused-vars": "warn",
    eqeqeq: ["error", "always"],
    "prefer-destructuring": "warn",
    "no-undef": ["error"],
    "no-var": "error",
    "prefer-const": "error",
    "no-useless-escape": "error",
    "prefer-template": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-expressions": "off",
    "vue/attribute-hyphenation": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/require-prop-types": "off",
    "vue/component-tags-order": [
      "warn",
      {
        order: ["script", "template", "style"]
      }
    ],
    "vue/multi-word-component-names": [
      "off",
      {
        ignores: ["default"]
      }
    ],
    "no-console": ["warn", { allow: ["error", "info", "warn"] }],
    camelcase: ["warn", { properties: "never", ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false }],
    "prefer-arrow-callback": "warn",
    "no-else-return": "error",
    "no-redeclare": "error",
    "no-duplicate-imports": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/valid-template-root": "error",
    "vue/no-duplicate-attributes": [
      "error",
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    "vue/no-export-in-script-setup": "error",
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: true
      }
    ],
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        allowUsingIterationVar: false
      }
    ],
    "vue/first-attribute-linebreak": "off",
    // indent: ["warn", "space", { SwitchCase: 1 }], // tabbed indentation
    "vue/no-reserved-component-names": "off",
    "vue/require-default-prop": "off"
  }
};
