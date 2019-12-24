const path = require('path');

const SRC = path.resolve(__dirname, 'src');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {

    mode: 'development',

    entry: {
        "main": './src/index.js',
    },


    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },


    module: {
        rules: [

            // SCSS
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer'),
                            ];
                        },
                    },
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                }],
            },

            // CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },

            // JS
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // Vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            // Images
            {
                include: SRC,
                test: /\.(eot|gif|otf|png|jpeg|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader'],
            },

        ],
    },


    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },


    plugins: [
        new VueLoaderPlugin(),
    ],


    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

};
