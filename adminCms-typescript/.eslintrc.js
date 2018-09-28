module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'generator-star-spacing': 'off',
      // allow debugger during development
      "no-tabs": "off",
      "eol-last": 0,//文件以单一的换行符结束
      "indent": 0,//缩进风格
      "no-undef": "off",//不能有未定义的变量
      "arrow-parens": 0,//箭头函数用小括号括起来
      "arrow-spacing": 0,//=>的前/后括号
      "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
      "quotes": 0,//引号类型 `` "" ''
      "padded-blocks": 0,//块语句内行首行尾是否要空行
      "keyword-spacing": 0,
      "space-before-function-paren": 0,//函数定义时括号前面要不要有空格
      "spaced-comment": 0,//注释风格要不要有空格什么的
      "no-mixed-spaces-and-tabs": 0,//禁止混用tab和空格
      "no-return-assign": 0,//return 语句中不能有赋值表达式
      "space-infix-ops": 0,//中缀操作符周围要不要有空格
      "no-new": 0,//禁止在使用new构造一个实例后不赋值
      "space-in-parens": 0,//小括号里面要不要有空格
      "no-useless-constructor": 0,
      "comma-dangle": 0,//对象字面量项尾不能有逗号
      "block-spacing": 0,
      "object-curly-spacing": 0,
      //"no-useless-escape": 0,
      //"no-use-before-define": 0,//未定义前不能使用
      "no-extend-native": 0,//禁止扩展native对象
      "no-useless-call": 0,//禁止不必要的call和apply
      "no-callback-literal":0,
      "no-unused-vars" : 0,
	  "no-useless-escape":0,//转义字符串 \ 需要加 \
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
