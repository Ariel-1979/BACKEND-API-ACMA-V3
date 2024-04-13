module.exports = {
	env: {
		browser: true,
		es6: true,
		es2021: true
	},
	extends: ['standard', 'eslint-config-prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		semi: 'error',
		'prefer-const': 'error'
	}
};
