 const path=require('path');

 module.exports = {
    entry:{
        index:'./src/index.js'
    },
    devtool:'inline-source-map',
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),

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
        ],
        
    },
 };
