module.exports = {
  plugins: [
    require('./postcss/postcss-flutopolis.cjs'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-custom-media'),
    require('autoprefixer'),
    require('postcss-utopia')({
      minWidth: 320,
      maxWidth: 1760,
    }),
    require('postcss-sorting')({
      order: ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],
      'properties-order': 'alphabetical',
      'unspecified-properties-position': 'bottom',
    }),
  ],
}