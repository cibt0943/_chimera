FROM ruby:3.1

ENV APP_ROOT /app

RUN apt update && \
    apt upgrade && \
    # 運用のために入れとく
    apt -y install vim

# gemに必要なライブラリをインストール
RUN \
    # for mysql
    apt -y install mariadb-client && \
    # node for rails js runtime
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt -y install nodejs && \
    # for front package manage
    #curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    #apt -y install yarn
    npm install -g yarn

WORKDIR $APP_ROOT
