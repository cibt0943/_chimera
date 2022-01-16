FROM ruby:3.1

ENV APP_ROOT /app/api

RUN apt update && \
    apt upgrade && \
    # 運用のために入れとく
    apt -y install vim

# gemに必要なライブラリをインストール
RUN \
    # for mysql
    apt -y install mariadb-client

WORKDIR $APP_ROOT
