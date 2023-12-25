module.exports = {
  plugins: {
    "postcss-pxtorem": {
      //根元素字体大小
      rootValue: 16,
      //匹配CSS中的属性，* 代表启用所有属性
      propList: ["*"],
      //转换成rem后保留的小数点位数
      unitPrecision: 5,
      //小于12px的样式不被替换成rem
      minPixelValue: 5,
      //selectorBlackList: ['.qz-'],// 要忽略的选择器并保留为px。
      //忽略一些文件，不进行转换，比如我想忽略 依赖的UI框架
      exclude: ["node_modules"],
    },
  },
};
