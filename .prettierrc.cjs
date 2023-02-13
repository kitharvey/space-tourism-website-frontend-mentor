module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
        },
      },
    ],
    "trailingComma": "es5",
    "printWidth": 100,
    "semi": false,
    "tabWidth": 2
  };