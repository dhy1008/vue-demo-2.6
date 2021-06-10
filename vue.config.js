const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = 'DHY-TEST' // page title
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    lintOnSave: false,
    devServer: {
        //端口号
        port: '8080',
        //启动时是否自动默认浏览器
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        disableHostCheck: true,
    },
    productionSourceMap: process.env.NODE_ENV === 'development',
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        devtool:
            process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
    },
    // 文件处理
    chainWebpack(config) {
        config.module
            .rule('swf')
            .test(/\.swf$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 10000,
            })
    },
    //favicon.ico图标设置
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico',
        },
    },
}
