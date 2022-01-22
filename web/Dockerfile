FROM nginx

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


# SSL証明書作成
RUN mkdir /etc/nginx/ssl && \
    sh -c 'openssl genrsa 2048 > /etc/nginx/ssl/server.key' && \
    sh -c 'openssl req -new -batch -key /etc/nginx/ssl/server.key > /etc/nginx/ssl/server.csr' && \
    sh -c 'openssl x509 -req -days 3650 -signkey /etc/nginx/ssl/server.key < /etc/nginx/ssl/server.csr > /etc/nginx/ssl/server.crt'

# nginxのdefault.confファイルを作成
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
