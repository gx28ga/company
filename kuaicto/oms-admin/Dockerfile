FROM 172.19.71.11:5000/vue-starter

USER root

ENV WORKPATH /root/workspace


WORKDIR $WORKPATH

ADD app/ $WORKPATH/app/
ADD build/ $WORKPATH/build/
ADD config.js $WORKPATH
ADD package.json $WORKPATH
ADD .babelrc $WORKPATH

RUN npm install
RUN npm run build

RUN rm -rf /usr/share/nginx/html/* 
RUN cp -rf app/release/* /usr/share/nginx/html/

