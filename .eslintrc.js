module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@react-native-community'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false }
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
}
