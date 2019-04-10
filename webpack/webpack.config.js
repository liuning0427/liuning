const path = require('path');
const glob = require('glob');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const 
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
       path:path.resolve(__dirname,'dist'),
       filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },"postcss-loader"]
                        // "css-loader"
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'img/'
                    }
                }]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename:'xx.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('index.css')
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:8081,
        open:true
    }
}