# 使用官方 Python 3 基础镜像
FROM python:3

# 设置工作目录
WORKDIR /app
RUN apt-get update && apt-get install -y default-libmysqlclient-dev


# 复制并安装依赖
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# 复制整个项目文件到工作目录
COPY ./app/ /app/
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh
RUN chmod +x /bin/docker-entrypoint.sh


# 设置环境变量
# ENV DJANGO_SETTINGS_MODULE=myproject.settings

ENTRYPOINT [ "/bin/bash", "docker-entrypoint.sh" ]

# 运行 Django 服务
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
