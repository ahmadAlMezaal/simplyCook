module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': ['.'],
        'extensions': [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        'alias': {
          '#navigation': './src/navigation',
          '#components': './src/components',
          '#screens': './src/screens',
          '#services': './src/services',
          '#types': './src/types',
          '#assets': './assets',
          '#root': './',
        },
      },
    ],
  ],
};
