module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@assets': './assets/',
          '@core': './src/core',
          '@navigation': './src/navigation/',
          '@store': './src/store',
          '@theme': './src/ui/theme',
          '@api': './src/api/',
          '@src': './src/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
