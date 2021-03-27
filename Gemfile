source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1.0'
# Use mysql as the database for Active Record
gem 'mysql2'
# Use Puma as the app server
gem 'puma'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder'
# Use Redis adapter to run Action Cable in production
# gem 'redis'
# Use ActiveModel has_secure_password
# gem 'bcrypt'

# Use Active Storage variant
# gem 'image_processing'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

## Add Gem ##

# View Template
gem 'slim-rails'

# Session Store
gem 'redis-rails'

# Seed Data
gem 'seed-fu'

# env
gem 'dotenv-rails'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]

  ## Add Gem ##

  # デバッガ
  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'

  # N+1問題検出
  gem 'bullet'

  # RSpec本体
  gem 'rspec-rails'

  # テスト用データの生成
  gem 'factory_bot_rails'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen'
  gem 'web-console'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen'

  ## Add Gem ##

  # エラー画面の高機能化
  gem 'better_errors'
  gem 'binding_of_caller'

  # コーディングルールチェック
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false

  # ER図の生成
  gem 'rails-erd', require: false

  # モデルにテーブル情報のコメントをつける
  gem 'annotate'
  # ソースコード中のコメントからドキュメント生成
  gem 'yard'
  # yardで生成するドキュメントにannotateのテーブル情報を反映
  gem 'kramdown'
  # yardで生成するドキュメントにconcernを反映
  gem 'yard-activesupport-concern'

  # 言語ファイル(ja.yml)生成
  gem 'i18n_generators'
end
