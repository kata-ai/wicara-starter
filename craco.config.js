const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const { paths } = require('@craco/craco');

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ],
  webpack: {
    alias: {
      '~': `${paths.appSrc}/`
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src/assets$1'
      }
    }
  },
  babel: {
    plugins: [
      'babel-plugin-styled-components',
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '~': './src'
          }
        }
      ]
    ]
  }
};
