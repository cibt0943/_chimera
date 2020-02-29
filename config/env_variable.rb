# frozen_string_literal: true

# 環境によって値が変わるものを定義
module EnvVariable
  # case Rails.env
  # when 'development' then ローカル開発環境
  # when 'test'        then spec環境
  # when 'staging'     then 動作確認環境
  # when 'production'  then 本番環境
  # end


  ## ap
  AP_SERVER_GLOBAL_DOMAIN =
    case Rails.env
    when 'development' then "tamechimera.com"
    when 'test'        then "tamechimera.com"
    when 'staging'     then "tamechimera.com"
    when 'production'  then "tamechimera.com"
    end

  AP_SERVER_LOCAL_DOMAIN =
    case Rails.env
    when 'development' then "tamechimera.lan"
    when 'test'        then "tamechimera.lan"
    when 'staging'     then "tamechimera.lan"
    when 'production'  then "tamechimera.lan"
    end


  ## db
  DB_HOST =
    case Rails.env
    when 'development' then "db.tamechimera.lan"
    when 'test'        then "db.tamechimera.lan"
    when 'staging'     then "db.tamechimera.lan"
    when 'production'  then "db.tamechimera.lan"
    end

  DB_USERNAME =
    case Rails.env
    when 'production'  then "chimera"
    else "mysql"
    end

  DB_PASSWORD =
    case Rails.env
    when 'production'  then ENV['CHIMERA_DATABASE_PASSWORD']
    else "mysql"
    end

  DB_NAME = "chimera_#{Rails.env}"


  ## assets
  ASSET_HOST =
    case Rails.env
    when 'development' then "cdn.tamechimera.com"
    when 'test'        then "cdn.tamechimera.com"
    when 'staging'     then "cdn.tamechimera.com"
    when 'production'  then "cdn.tamechimera.com"
    end


  ## cache
  CACHE_HOST =
    case Rails.env
    when 'development' then "cache.tamechimera.lan"
    when 'test'        then "cache.tamechimera.lan"
    when 'staging'     then "cache.tamechimera.lan"
    when 'production'  then "cache.tamechimera.lan"
    end

  CACHE_PORT = 6379

  CACHE_DB = 1

  CACHE_NAMESPACE = 'cache'

  CACHE_URL = "redis://#{CACHE_HOST}:#{CACHE_PORT}/#{CACHE_DB}/#{CACHE_NAMESPACE}"


  ## session
  SESSION_HOST = CACHE_HOST

  SESSION_PORT = CACHE_PORT

  SESSION_DB = CACHE_DB

  SESSION_NAMESPACE = 'sessions'

  SESSION_URL = "redis://#{SESSION_HOST}:#{SESSION_PORT}/#{SESSION_DB}/#{SESSION_NAMESPACE}"


  ## queue
  QUEUE_HOST = CACHE_HOST

  QUEUE_PORT = CACHE_PORT

  QUEUE_DB = CACHE_DB

  QUEUE_NAMESPACE = 'queue'

  QUEUE_URL = "redis://#{QUEUE_HOST}:#{QUEUE_PORT}/#{QUEUE_DB}/#{QUEUE_NAMESPACE}"
end
