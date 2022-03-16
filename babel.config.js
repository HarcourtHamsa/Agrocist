module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          interface: './src/interface',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
