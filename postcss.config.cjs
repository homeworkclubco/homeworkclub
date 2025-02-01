module.exports = {
  plugins: {
    "postcss-import": {},
    // "tailwindcss/nesting": {},
    // tailwindcss: {},
    "postcss-custom-media": {},
    autoprefixer: {},
    // mistcss: {},
    "postcss-utopia": {
      minWidth: 320,
      maxWidth: 1760,
    },
    // 'postcss-sorting': {
		// 	order: [
		// 		'custom-properties',
		// 		'dollar-variables',
		// 		'declarations',
		// 		'at-rules',
		// 		'rules',
		// 	],

		// 	'properties-order': 'alphabetical',
		// 	'unspecified-properties-position': 'bottom',
		// },
  },
};
