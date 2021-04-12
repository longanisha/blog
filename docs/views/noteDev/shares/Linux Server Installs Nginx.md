---
title: Linux Server Installs Nginx
date: 2020-05-29
tags:
 - Learning Notes
categories:
 -  Learning Notes
permalink: /20200529
---

## Steps

To nginx configuration installation directory, is nginx storage directory, general installation software is installed in the/usr/local, so we CD/usr/local, you create a new folder mkdir nginx

### 1.Go to the nginx directory
::: tip
cd nginx
:::
### 2.Download the NGINX resource bundle using the wget command
::: tip
wget http://nginx.org/download/nginx-1.5.9.tar.gz
:::
### 3.Unzip
::: tip
tar -zxvf nginx-1.5.9.tar.gz
:::
### 4.Execute the./configure command
::: tip
cd nginx-1.5.9</br>
./configure
:::
There may be some errors, so let's install other modules
::: tip
yum -y install pcre-devel</br>
yum -y install openssl openssl-devel
:::
### 5.Compile 

make compile (The process of make is to convert source files written in various languages into executable files and various library files)
::: tip
cd /usr/local/nginx/nginx-1.5.9
make
:::
### 6.Make install

make install(make install copy the compiled executables and libraries to the appropriate places)
::: tip
make install
:::
### 7.Start the NGINX service
::: tip
cd /usr/local/nginx/sbin</br>
./nginx
:::
### 8.Check port usage
::: tip
netstat -ntpl
:::
If you see port 8080 or any other port in addition to port 80, the configuration is successful

If the startup fails, kill the nginx process
::: tip
killall -9 nginx
:::
Then start it again

### 9.My nginx.conf configuration

```conf
  server {
      listen 8080; 
      server_name The domain name; # The IP of your PC or the domain name of your server charset utf-8; 
      root /home/public/; # The directory where the files are stored
      location / { 
        try_files $uri $uri/ @router;
        index  index.html;
        autoindex on; # The index
        autoindex_exact_size on; # Display file size
        autoindex_localtime on; # Display file time
      }
      location @router {
    	  rewrite ^.*$ /index.html last;
      } 
    }

   server {
        listen       8080;    # Listen on ports (the ports that people enter when they access your server)
        server_name  mos-backend;
        # 配置虚拟主机
        location / {
            proxy_pass http://域名;   # Reverse Proxy (IP of your own computer: port of your locally opened server)
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
            add_header 'Access-Control-Allow-Methods' 'PUT, GET, POST, DELETE, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-	Requested-With,If-Modified-Since,Cache-Control,Content-Type,x-ijt';
            
        }
    }
```
