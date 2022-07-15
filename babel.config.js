module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["module-resolver", {
      root: '.',
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".android.js",
        ".ios.js",
        ".ios.tsx"
      ],
      alias: {
        "@components": './src/components',
        "@screens": './src/screens'
      }
    }]]
  };
};
