(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{506:function(e,t,s){"use strict";s.r(t);var a=s(6),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),s("p",[e._v("To nginx configuration installation directory, is nginx storage directory, general installation software is installed in the/usr/local, so we CD/usr/local, you create a new folder mkdir nginx")]),e._v(" "),s("h3",{attrs:{id:"_1-go-to-the-nginx-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-go-to-the-nginx-directory"}},[e._v("#")]),e._v(" 1.Go to the nginx directory")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("cd nginx")])]),e._v(" "),s("h3",{attrs:{id:"_2-download-the-nginx-resource-bundle-using-the-wget-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-download-the-nginx-resource-bundle-using-the-wget-command"}},[e._v("#")]),e._v(" 2.Download the NGINX resource bundle using the wget command")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("wget http://nginx.org/download/nginx-1.5.9.tar.gz")])]),e._v(" "),s("h3",{attrs:{id:"_3-unzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-unzip"}},[e._v("#")]),e._v(" 3.Unzip")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("tar -zxvf nginx-1.5.9.tar.gz")])]),e._v(" "),s("h3",{attrs:{id:"_4-execute-the-configure-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-execute-the-configure-command"}},[e._v("#")]),e._v(" 4.Execute the./configure command")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("cd nginx-1.5.9"),s("br"),e._v("\n./configure")])]),e._v(" "),s("p",[e._v("There may be some errors, so let's install other modules")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("yum -y install pcre-devel"),s("br"),e._v("\nyum -y install openssl openssl-devel")])]),e._v(" "),s("h3",{attrs:{id:"_5-compile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-compile"}},[e._v("#")]),e._v(" 5.Compile")]),e._v(" "),s("p",[e._v("make compile (The process of make is to convert source files written in various languages into executable files and various library files)")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("cd /usr/local/nginx/nginx-1.5.9\nmake")])]),e._v(" "),s("h3",{attrs:{id:"_6-make-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-make-install"}},[e._v("#")]),e._v(" 6.Make install")]),e._v(" "),s("p",[e._v("make install(make install copy the compiled executables and libraries to the appropriate places)")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("make install")])]),e._v(" "),s("h3",{attrs:{id:"_7-start-the-nginx-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-start-the-nginx-service"}},[e._v("#")]),e._v(" 7.Start the NGINX service")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("cd /usr/local/nginx/sbin"),s("br"),e._v("\n./nginx")])]),e._v(" "),s("h3",{attrs:{id:"_8-check-port-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-check-port-usage"}},[e._v("#")]),e._v(" 8.Check port usage")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("netstat -ntpl")])]),e._v(" "),s("p",[e._v("If you see port 8080 or any other port in addition to port 80, the configuration is successful")]),e._v(" "),s("p",[e._v("If the startup fails, kill the nginx process")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("killall -9 nginx")])]),e._v(" "),s("p",[e._v("Then start it again")]),e._v(" "),s("h3",{attrs:{id:"_9-my-nginx-conf-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-my-nginx-conf-configuration"}},[e._v("#")]),e._v(" 9.My nginx.conf configuration")]),e._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  server {\n      listen 8080; \n      server_name The domain name; # The IP of your PC or the domain name of your server charset utf-8; \n      root /home/public/; # The directory where the files are stored\n      location / { \n        try_files $uri $uri/ @router;\n        index  index.html;\n        autoindex on; # The index\n        autoindex_exact_size on; # Display file size\n        autoindex_localtime on; # Display file time\n      }\n      location @router {\n    \t  rewrite ^.*$ /index.html last;\n      } \n    }\n\n   server {\n        listen       8080;    # Listen on ports (the ports that people enter when they access your server)\n        server_name  mos-backend;\n        # 配置虚拟主机\n        location / {\n            proxy_pass http://域名;   # Reverse Proxy (IP of your own computer: port of your locally opened server)\n            add_header 'Access-Control-Allow-Origin' '*';\n            add_header 'Access-Control-Allow-Credentials' 'true';\n            add_header 'Access-Control-Allow-Methods' 'PUT, GET, POST, DELETE, OPTIONS';\n            add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-\tRequested-With,If-Modified-Since,Cache-Control,Content-Type,x-ijt';\n            \n        }\n    }\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);