const path = require('path')

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',

	parserOptions: {
		sourceType: 'module',

		babelOptions: {
			configFile: path.join(__dirname, 'babel.config.js'),
		},
	},

	extends: [
		'@react-native-community',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/babel',
		'prettier/react',
	],

	plugins: ['simple-import-sort', 'auto-import'],

	rules: {
		'simple-import-sort/sort': 'error',

		'auto-import/auto-import': [
			'error',
			{
				rootPath: '.',
				packages: {},
			},
		],
	},
}
