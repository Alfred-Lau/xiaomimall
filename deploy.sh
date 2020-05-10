#! /bin/bash

mv dist xiaomimall
scp -r ./xiaomimall root@aliyun:/usr/local/nginx/html
