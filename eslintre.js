
module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import'],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          alias: {
            "_scene": "./src/scene",
            "_router": "./src/router",
            "_models": "./src/models",
            "_components": "./src/components",
            "_utils": "./src/utils",
            "_services": "./src/services",
            "_assets": "./src/assets",
            "_actions": "./src/actions",
            "app" : './src/'
          },
        },
      },
    },
  };