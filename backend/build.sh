#! /bin/bash

docker build -t house/backend:1.0.0 .

# docker run -d -p 8000:8000 --name backend house/backend:1.0.0
# docker exec -ti backend /bin/bash