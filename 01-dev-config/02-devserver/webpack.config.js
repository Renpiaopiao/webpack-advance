
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./app.js',
    devServer:{
        static:path.resolve(__dirname,'./dist'),
        compress:true,   //是否开启压缩，gzip方式传输
        port:3000,
        proxy:{  //代理
            '/api':'http://localhost:9000'
        },
        // https:true
        http2:true,
        historyApiFallback:true,   //history模式下刷新不报错
        host:'0.0.0.0'  //局域网内可访问
    },

    plugins:[
        new HtmlWebpackPlugin()
    ]
}