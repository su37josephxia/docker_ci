#!/bin/bash
ssh root@47.98.252.43 > /dev/null 2>&1 << eeooff
# 构建后端
cd /root/source/docker_ci
docker-compose

eeooff
echo done!


ssh root@47.98.252.43 "df -h"