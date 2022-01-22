FROM ruby:3.1

ENV APP_ROOT /app/api

RUN apt-get -y update && \
    apt-get -y upgrade

# 言語設定
RUN apt-get -y install locales && \
    echo "ja_JP.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8

# 運用のために入れとく
RUN \
    # vim
    apt-get -y install vim

# gemに必要なライブラリをインストール
RUN \
    # for mysql
    apt-get -y install mariadb-client

WORKDIR $APP_ROOT
