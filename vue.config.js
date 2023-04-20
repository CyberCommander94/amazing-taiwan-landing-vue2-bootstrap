const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const loader = {
  loader: "sass-resources-loader",
  options: {
    resources: path.resolve(__dirname, "./src/assets/styles/main.scss"),
  },
};

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["sass-loader", loader],
        },
      ],
    },
  },
});
