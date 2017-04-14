#!/bin/bash

rm -rf output
MOD_NAME="ldap"
TAR="$MOD_NAME.tar.gz"


#编译module.conf指定模块
for m in `cat ./module.conf`; do
    if [[ "$m" != "#"* ]]; then
        cd ./$m;
        echo "start build $m module";
        yog2 release  --fis3 -cud ../output;
        cd - ;
    fi
done

# 文件打包
cd output :
tar czvf ./ldap.tar.gz  ./*

# 删除output内的其他文件
find ./output/*   -maxdepth 0  -type d  -exec rm -fr {} \;
