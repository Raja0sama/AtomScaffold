module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ios.js", ".android.js"],
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
          }
        }
      ]
    ]
};
