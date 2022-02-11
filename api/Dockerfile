FROM ruby:3.1

ENV APP_ROOT /app/api

RUN apt -y update && \
    apt -y upgrade

# 言語設定
RUN apt -y install locales && \
    echo "ja_JP.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8

# 運用のために入れとく
RUN \
    # vim
    apt -y install vim

# gemに必要なライブラリをインストール
RUN \
    # for mysql
    apt -y install mariadb-client

WORKDIR $APP_ROOT
