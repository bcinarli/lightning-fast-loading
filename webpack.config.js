const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const makeConfig = (env) => {
  const targetEnv = env?.legacy || env === 'legacy' ? 'legacy' : 'modern';

  return {
    mode: isDev ? 'development' : 'production',
    name: `config:${targetEnv}`,
    target: `browserslist:${targetEnv}`,
    entry: {
      app: './src/web-entry.tsx'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss'],
      alias: {
        ...(targetEnv === 'modern' ? { url: 'native-url' } : {})
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `[name].js`,
      assetModuleFilename: `[name][ext]`,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.png/,
          type: 'asset/resource'
        },
        {
          test: /\.ts?/,
          exclude: [/node_modules/],
          use: {
            loader: 'babel-loader',
            options: {
              envName: [targetEnv, isDev && 'development']
                .filter(Boolean)
                .join(' ')
                .trim()
            }
          }
        },
        {
          test: /\.scss?/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[local]--[hash:base64:5]'
                },
                importLoaders: 1,
                sourceMap: isDev
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { sourceMap: isDev }
            }
          ]
        }
      ]
    },
    plugins: [
      isDev && new webpack.HotModuleReplacementPlugin(),
      isDev && new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new webpack.DefinePlugin({
        API: JSON.stringify('https://607c19c267e6530017573aa0.mockapi.io'),
        IMAGE_API: JSON.stringify('http://api.lightning-fast.pwa/data/images')
      }),
      new HTMLWebpackPlugin({
        inject: true,
        favicon: path.join(__dirname, './src/assets/favicon.png'),
        template: path.join(__dirname, './src/templates/template.html')
      }),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: `[name].css`
        })
    ].filter(Boolean),
    optimization: {
      minimize: !isDev,
      minimizer: ['...', new CssMinimizerPlugin()]
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 174080, // 170kb
      maxEntrypointSize: 174080 // 170kb
    },
    stats: 'normal',
    ...(isDev && {
      devtool: 'eval-cheap-module-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
        port: 3000,
        overlay: true
      }
    })
  };
};

module.exports = makeConfig;
