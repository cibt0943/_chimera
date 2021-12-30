FROM cibt0943/centos7-ruby:3.0.3

ARG DOMAIN
ENV APP_ROOT /app


RUN yum -y update

# nginxのインストール
RUN yum -y install http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm && \
    yum -y install nginx

# SSL証明書作成
RUN mkdir /etc/nginx/ssl && \
    sh -c 'openssl genrsa 2048 > /etc/nginx/ssl/server.key' && \
    sh -c 'openssl req -new -batch -key /etc/nginx/ssl/server.key > /etc/nginx/ssl/server.csr' && \
    sh -c 'openssl x509 -req -days 3650 -signkey /etc/nginx/ssl/server.key < /etc/nginx/ssl/server.csr > /etc/nginx/ssl/server.crt'

# nginxのdefault.confファイルを作成
COPY ./docker/webapp/tpl/nginx-chimera.conf /etc/nginx/conf.d/default.conf
RUN sed -i -e "s/(NGINX_SERVER_NAME)/${DOMAIN}/g" /etc/nginx/conf.d/default.conf

# puma自動起動用ファイルをコピー
COPY ./docker/webapp/tpl/puma-chimera.service /usr/lib/systemd/system/puma-chimera.service
RUN sed -i -e "s/(rails_env)/$rails_env/g" /usr/lib/systemd/system/puma-chimera.service


# gemに必要なライブラリをインストール
RUN \
    # node for rails js runtime
    curl -sL https://rpm.nodesource.com/setup_16.x | bash - && \
    yum -y install nodejs && \
    # for mysql
    yum -y install mysql-devel && \
    # for front package manage
    curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo && \
    yum -y install yarn


RUN mkdir -p $APP_ROOT

WORKDIR $APP_ROOT

COPY . $APP_ROOT

# bundle installの実行
RUN rm -rf vendor/bundle && \
    mkdir -p vendor/bundle && \
    bundle install --path=vendor/bundle


CMD ["nginx", "-g", "daemon off;"]
