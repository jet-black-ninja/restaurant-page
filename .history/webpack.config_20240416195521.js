 const path=require('path');
 const HtmlWebpackPlugin=require('html-webpack-plugin');

 module.exports = {
    entry:{
        index:'./src/index.js'
    },
    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
    }.
    plugins:[
        new HtmlWebpackPlugin({
            title:'restaurant page',
        }),
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,

    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/i,
                type:'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
            }
        ],
        
    },
 };
