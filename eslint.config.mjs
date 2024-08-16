/*
 * @Author: WangZhuoYi 13317149311@163.com
 * @Date: 2024-08-16 08:44:31
 * @LastEditors: WangZhuoYi 13317149311@163.com
 * @LastEditTime: 2024-08-16 10:32:27
 * @FilePath: /practice-code/eslint.config.mjs
 * @Description:
 */
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'no-useless-escape': 'off',
		},
	},
]
