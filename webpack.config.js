const path = require('path')
const fs = require('fs')
const jsYaml = require('js-yaml')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const glob = require('glob')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'
  const config = jsYaml.safeLoad(fs.readFileSync('config/webpack.yml', 'utf-8'))[argv.mode]
  const pages = {}
  glob.sync('./frontend/pages/*/index.{ts,tsx}').forEach(function (e) {
    // {key:value}の連想配列を生成
    // pages[path.basename(e, '.tsx')] = e
    pages[path.basename(path.dirname(e))] = e
  })

  return {
    entry: pages,
    output: {
      path: path.resolve(__dirname, config.public_root_path, config.output_path),
      filename: '[name]-[contenthash].js',
    },

    devtool: isDevelopment ? 'source-map' : 'false',

    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'frontend')],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
      }),
      new WebpackManifestPlugin({
        // fileName: 'manifest.json',
        // publicPath: プロダクトにて実際にJSへアクセスする際のパスと同様になるように指定
        publicPath: `/${config.output_path}/`,
        writeToFileEmit: true,
      }),
    ],

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
            // CSSをバンドルするための設定
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
                postcssOptions: {
                  plugins: [
                    // Autoprefixerを有効化
                    // ベンダープレフィックスを自動付与する
                    require('autoprefixer')({ grid: true }),
                  ],
                },
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
          type: "asset/resource",
          generator: {
            filename: 'images/[name]-[contenthash][ext]'
          }
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          type: "asset/resource",
          generator: {
            filename: 'fonts/[name]-[contenthash][ext]'
          }
        },
      ],
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            test: /common/,
            chunks: 'initial',
            name: 'common',
            enforce: true,
          },
          defaultVendors: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },

    // Configuration for dev server
    devServer: {
      // publicPath: プロダクトにて実際にJSへアクセスする際のパスと同様になるように指定
      publicPath: `/${config.output_path}/`,
      // contentBase: 公開するリソースのルートディレクトリ。未指定の場合はカレントディレクトリが起点になる。
      contentBase: path.resolve(__dirname, config.public_root_path, config.output_path),
      // watchContentBase: コンテンツの変更監視をする
      // watchContentBase: true,
      host: config.dev_server.host,
      // port: ポート番号。未指定の場合は8080が初期値になる。
      port: config.dev_server.port,
      // inline: ライブリロードを行うための設定。true or falseで指定。未指定の場合はtrue
      // inline: true,
      // hot: Hot Module Replacement(HMR)を有効にします。true or falseで指定。未指定の場合はtrue。
      // hot: true,
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      // vagrantだとファイルシステムの違いから変更を検知できないらしいのでポーリングする
      watchOptions: {
        poll: true,
      },
    },
  }
}
