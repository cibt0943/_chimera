const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'

  const dotenvParseOutput = dotenv.config().parsed

  return {
    entry: './frontend/index.tsx',
    output: {
      path: path.resolve(__dirname, process.env.ASSET_ROOT, process.env.ASSET_DIR),
      filename: '[name]-[contenthash].js',
    },

    devtool: isDevelopment ? 'eval-source-map' : false,

    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'frontend')],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    },

    module: {
      rules: [
        {
          test: /\.(css|sass|scss)$/,
          use: [
            // CSSを別ファイルとして出力する
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              },
            },
            // CSSをJSバンドルするための設定
            {
              loader: 'css-loader',
              options: {
                // CSS内のurl()メソッドの取り込み
                // url: false,
                // ソースマップの作成
                sourceMap: isDevelopment,
                // 0 => no loaders (default);
                // 1 => postcss-loader;
                // 2 => postcss-loader, sass-loader
                importLoaders: 2,
              },
            },
            // PostCSSのための設定
            {
              loader: 'postcss-loader',
              options: {
                // PostCSS側でもソースマップを有効にする
                sourceMap: isDevelopment,
              },
            },
            // SassをCSSへ変換
            {
              loader: 'sass-loader',
              options: {
                // ソースマップの作成
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.(jpe|png|gif|svg|ico)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name]-[contenthash][ext]',
          },
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name]-[contenthash][ext]',
          },
        },
      ],
    },

    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
          common: {
            test: /common/,
            chunks: 'initial',
            name: 'common',
            enforce: true,
          },
        },
      },
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenvParseOutput),
      }),
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
      }),
      new WebpackManifestPlugin({
        // fileName: 'manifest.json',
        // publicPath: プロダクトにて実際にJSへアクセスする際のパスと同様になるように指定
        publicPath: `/${process.env.ASSET_DIR}/`,
        writeToFileEmit: true,
      }),
      // new BundleAnalyzerPlugin(),
    ],

    // Configuration for dev server
    devServer: {
      static: {
        // directory: 公開するリソースのルートディレクトリ。未指定の場合はカレントディレクトリが起点になる。
        directory: path.resolve(__dirname, process.env.ASSET_ROOT, process.env.ASSET_DIR),
      },
      devMiddleware: {
        // publicPath: プロダクトにて実際にJSへアクセスする際のパスと同様になるように指定
        publicPath: `/${process.env.ASSET_DIR}/`,
      },
      https: {
        key: '/etc/nginx/ssl/server.key',
        cert: '/etc/nginx/ssl/server.crt',
      },
      host: process.env.ASSET_HOST,
      // port: ポート番号。未指定の場合は8080が初期値になる。
      port: process.env.ASSET_PORT,
      // inline: ライブリロードを行うための設定。true or falseで指定。未指定の場合はtrue
      // inline: true,
      // hot: Hot Module Replacement(HMR)を有効にします。true or falseで指定。未指定の場合はtrue。
      // hot: true,
      // allowedHosts: 'all',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      // gzip圧縮を行うか否か
      compress: true,
    },
    // vagrantだとファイルシステムの違いから変更を検知できないらしいのでポーリングする
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  }
}
