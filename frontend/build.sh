docker build -t taro .
docker run -v $PWD/dist:/usr/src/app/dist taro
