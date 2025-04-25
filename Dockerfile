# 使用旧版 Node.js 官方镜像（例如 Node.js 6.x）
FROM node:6.17.1

# 设置工作目录
WORKDIR /app

# 安装 Python 2.7（如果项目需要）
RUN apt-get update && apt-get install -y \
    python2.7 \
    && ln -s /usr/bin/python2.7 /usr/bin/python

# 复制 package.json 并安装依赖
COPY package.json .
RUN npm install

# 复制所有文件到容器
COPY . .

# 暴露端口（根据项目实际端口修改）
EXPOSE 3000

# 启动命令（根据项目实际启动命令修改）
CMD ["npm", "start"]