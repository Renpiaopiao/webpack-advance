
module.exports = {
    mode:'development',
    entry:'./src/app.js',
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src')
        },  
        extensions:['.json','.js','.vue']  //顺序会对应优先级
    }
}