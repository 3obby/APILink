import {Config} from 'tailwindcss'

import config from '@rubriclab/tailwind-config'

const tailwindConfig = {
	content: ['./app/**/*.tsx', './components/**/*.tsx'],
	presets: [config],
	theme: {
		colors: {
			...config.theme.colors,
			'off-white': '#E2DCDB',
			'pale-olive': '#93A470',
			'weak-tan': '#FDFFE5'
		},
		extend: {
			fontFamily: {
				'cal-sans': ['var(--font-cal-sans)']
			}
		}
	}
} satisfies Config

export default tailwindConfig
