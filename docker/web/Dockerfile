FROM nginx

ARG NGINX_SERVER_NAME

RUN apt update && \
    apt upgrade && \
    # 運用のために入れとく
    apt -y install vim

# SSL証明書作成
RUN mkdir /etc/nginx/ssl && \
    sh -c 'openssl genrsa 2048 > /etc/nginx/ssl/server.key' && \
    sh -c 'openssl req -new -batch -key /etc/nginx/ssl/server.key > /etc/nginx/ssl/server.csr' && \
    sh -c 'openssl x509 -req -days 3650 -signkey /etc/nginx/ssl/server.key < /etc/nginx/ssl/server.csr > /etc/nginx/ssl/server.crt'

# nginxのdefault.confファイルを作成
COPY ./docker/web/tpl/nginx.conf /etc/nginx/conf.d/default.conf
