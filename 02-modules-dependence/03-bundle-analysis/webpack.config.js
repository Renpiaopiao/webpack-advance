
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'developent',
    entry:{
        app:'./src/app.js',
        app2:'./src/app2.js'
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]   
}