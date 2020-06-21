upstream deploy_discord_graphql_server {
  server 127.0.0.1:2001;
}

map $http_upgrade $connection_upgrade {
  default upgrade;
  '' close;
}

# REDIRECT HTTP www.example.com to HTTPS example.com
server {
  listen 80;
  listen [::]:80;
  server_name discord-graphl-server.neverfapdeluxe.com;

  location ~ /.well-known/acme-challenge {
    allow all;
    root /data/letsencrypt;
  }

  return 301 https://discord-graphl-server.neverfapdeluxe.com$request_uri;
}


server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name discord-graphl-server.neverfapdeluxe.com;

  server_tokens off;

  # INCLUDE SSL SNIPPETS
  # ssl_certificate /etc/letsencrypt/live/discord-graphl-server.neverfapdeluxe.com/fullchain.pem;
  # ssl_certificate_key /etc/letsencrypt/live/discord-graphl-server.neverfapdeluxe.com/privkey.pem;
  ssl_certificate /docker-volumes/etc/letsencrypt/live/discord-graphl-server.neverfapdeluxe.com/fullchain.pem;
  ssl_certificate_key /docker-volumes/etc/letsencrypt/live/discord-graphl-server.neverfapdeluxe.com/privkey.pem;

  ssl_buffer_size 8k;

  ssl_dhparam /docker/letsencrypt-docker-nginx/src/production/dh-param/dhparam-2048.pem;

  ssl_protocols TLSv1.2 TLSv1.1 TLSv1;
  ssl_prefer_server_ciphers on;

  ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

  ssl_ecdh_curve secp384r1;
  ssl_session_tickets off;

  # OCSP stapling
  ssl_stapling on;
  ssl_stapling_verify on;
  resolver 8.8.8.8;

	gzip on;
  gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
	gunzip on;

  # for LetsEncrypt certbot
  location /.well-known {
    alias /home/deploy/certbot/.well-known;
  }

	location / {
	  try_files $uri @proxy;
	}

  location @proxy {
    proxy_pass http://deploy_discord_graphql_server;

    proxy_hide_header X-powered-by;
    proxy_cache_bypass $http_upgrade;

    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header Host $host;
  }

}
