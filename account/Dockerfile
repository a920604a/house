# 使用官方MongoDB 3.6.3映像作為基礎映像
FROM mongo:3.6.3

# 設置環境變數以配置MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=admin

# 暴露MongoDB的默認端口
EXPOSE 27017

# 將初始化腳本複製到容器中
COPY ./mongo-init.js /docker-entrypoint-initdb.d/
