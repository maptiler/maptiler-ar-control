module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ["**/*.js", "src/platform-constants.ts"],

  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off', // Disable the TypeScript directive rule
        'no-constant-condition': 'off',
      },
    },
  ],
};