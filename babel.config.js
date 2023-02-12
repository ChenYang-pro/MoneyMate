// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: true,
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: "src/",
        alias: {
          "@": `./src`,
          "@api": `./src/api`,
          "@common": `./src/common`,
          "@components": `./src/components`,
        },
        extensions: [".tsx", ".ts", ".js", ".jsx"],
      },
    ],
  ],
};
