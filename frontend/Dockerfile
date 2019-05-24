FROM node:10-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
# Npm
RUN npm config set registry https://registry.npm.taobao.org/ && \  
   npm install -g @tarojs/cli && \
   npm i 
# Yarn
# RUN yarn config set registry https://registry.npm.taobao.org && \
#     yarn global add @tarojs/cli && \
#     yarn
#执行构建
CMD ["npm", "run", "build:h5"]
