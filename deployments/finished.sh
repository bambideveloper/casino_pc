#!/bin/bash

docker login  -u casino -p casinoEHAcf6pTU https://docker.flct.io/

if [ "${EVN}" = "pre" ];then
    docker tag pre-casino-pc:${VERSION}-${BUILD_ID} docker.flct.io/casino/pre-casino-pc:${VERSION}-${BUILD_ID}
    docker push docker.flct.io/casino/pre-casino-pc:${VERSION}-${BUILD_ID}
else
    docker tag casino-pc:${VERSION}-${BUILD_ID} docker.flct.io/casino/casino-pc:${VERSION}-${BUILD_ID}
    docker push docker.flct.io/casino/casino-pc:${VERSION}-${BUILD_ID}
fi