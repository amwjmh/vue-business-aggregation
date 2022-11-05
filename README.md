#
## 风格
**eslint**  
`eslint` js语法检查  [文档链接](https://eslint.bootcss.com/docs/rules/)  
`eslint-plugin-vue` vue语法检查  [文档链接](https://eslint.vuejs.org/rules/)  
`@typescript-eslint/parser` TS解析器  [文档链接](https://typescript-eslint.io/rules/)  
`@typescript-eslint/eslint-plugin` TS插件 
   
## 格式
**prettier**  
`prettier`  [文档链接](https://www.prettier.cn/docs/options.html)  
`eslint-config-prettier` 关闭所有不必要或可能与Prettier冲突的规则  
`eslint-plugin-prettier`

## 数据
`mock`  
`vite-plugin-mock`   
vite.config.ts配置
```ts
  import { viteMockServe } from 'vite-plugin-mock'
  viteMockServe({
      ignore: /^\_/,
      mockPath: 'mock',
      // localEnabled: !isBuild,
      // prodEnabled: isBuild,
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer'  
        setupProdMockServer()
        `
    }),
```

