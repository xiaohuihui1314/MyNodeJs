/**
 * Created by Administrator on 2016/10/26.
 */
var webpack = require('webpack');
module.exports = {
    /*    //插件项
     plugins: [commonsPlugin],*/
    //页面入口文件配置
    entry: {
        index: './dist/index'
    },
    //入口文件输出配置
    output: {
        path: './js/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
             /*
            //使用ES6
            //# npm install babel-loader --save-dev
            //# npm install babel-core --save
            //# npm install babel-preset-es2015 --save-dev
            //使用ES7
            //# npm install --save-dev babel-preset-stage-0
            //# npm install --save-dev babel-preset-stage-1
            //# npm install --save-dev babel-preset-stage-2
            //# npm install --save-dev babel-preset-stage-3
            */
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //npm install node-sass --save-dev
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            //npm install url-loader --save-dev
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&name=[hash].[ext]'
            }
          /*  {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}*/
        ]
    },
    // //其它解决方案配置
    // resolve: {
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};
