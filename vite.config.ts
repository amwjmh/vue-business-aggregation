import { defineConfig } from 'vite'
import { resolve } from 'path'
import EslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/

const root = process.cwd()

function pathResolve (dir: string) {
    return resolve(root, '.', dir)
}
export default defineConfig({
    plugins: [
        vue(),
        EslintPlugin({
            cache: false,
            include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx'] // 检查的文件
        }),
        viteMockServe({
            ignore: /^\_/,
            mockPath: 'mock',
            // localEnabled: !isBuild,
            // prodEnabled: isBuild,
            injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer'
        setupProdMockServer()
        `
        })
    ],
    resolve: {
        // 设置src下路径别名
        alias: [
            {
                find: /\@\//,
                replacement: `${pathResolve('src')}/`
            }
        ]
    },
    server: {
        port: 4000,
        proxy: {
            // 选项写法
            '/api': {
                target: 'http://127.0.0.1:4000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
