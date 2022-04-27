module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@src': './src/',
          '@app': './src/app/',
          '@assets': './assets/',
          '@theme': './src/ui/theme/',
          '@api': './src/api/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
