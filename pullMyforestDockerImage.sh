#!/bin/bash
DOCKER_IMAGE_ADDRESS=943061967341.dkr.ecr.ap-northeast-2.amazonaws.com/myforest-ecr:latest
REPO_NAME=myforest-ecr

#ecr login
LOGIN_INFO=$(aws ecr get-login --no-include-email --region ap-northeast-2)

#docker login
eval ${LOGIN_INFO}

#docker pull
docker pull ${DOCKER_IMAGE_ADDRESS}

#docker rm
docker rm -f $(docker ps -qa -f "name=backend")

#docker run
docker run -d --name backend -p 3000:80 --restart=always -e TZ=Asia/Seoul -v ~/myforest/public/icon:/app/public/icon -v ~/myforest/public/images:/app/public/images -v ~/myforest/public/img:/app/public/img -v ~/myforest/public/camp_image:/app/public/camp_image -v ~/myforest/upload/image:/app/upload/image ${DOCKER_IMAGE_ADDRESS}

#move .env
docker cp .env.admin backend:/app/.env.admin
docker cp .env.db backend:/app/.env.db
docker cp .env.naver_login backend:/app/.env.naver_login
docker cp .env.sms backend:/app/.env.sms

#docker restart
docker restart backend

#docker rmi
docker rmi $(docker images -f "dangling=true" -q)

#aws ecr remove
IMAGES=$(aws ecr list-images --region ap-northeast-2 --repository-name ${REPO_NAME} --filter "tagStatus=UNTAGGED" --query 'imageIds[*]' --output json)

aws ecr batch-delete-image --region ap-northeast-2 --repository-name ${REPO_NAME} --image-ids "$IMAGES" || true
