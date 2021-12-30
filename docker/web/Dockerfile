FROM nginx

ENV RAILS_ROOT /app
ENV NGINX_SERVER_NAME aaa
WORKDIR $RAILS_ROOT

RUN apt update && \
    apt upgrade

# SSL証明書作成
RUN mkdir /etc/nginx/ssl && \
    sh -c 'openssl genrsa 2048 > /etc/nginx/ssl/server.key' && \
    sh -c 'openssl req -new -batch -key /etc/nginx/ssl/server.key > /etc/nginx/ssl/server.csr' && \
    sh -c 'openssl x509 -req -days 3650 -signkey /etc/nginx/ssl/server.key < /etc/nginx/ssl/server.csr > /etc/nginx/ssl/server.crt'

# nginxのdefault.confファイルを作成
COPY ./docker/web/tpl/nginx.conf /tmp/docker.nginx
RUN envsubst '$NGINX_SERVER_NAME' < /tmp/docker.nginx > /etc/nginx/conf.d/default.conf

RUN mkdir log

CMD ["nginx", "-g", "daemon off;"]
