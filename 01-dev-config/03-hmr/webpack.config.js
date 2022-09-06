const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./app.js',
    plugins:[
        new HtmlWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        hot:true,   //热替换，webpack5 默认引入插件
        liveReload:true  //热加载
    }
}