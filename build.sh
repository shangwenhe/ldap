#!/etc/bash
set -e

rm -fr output
npm install

tar czvf ./ldapserver.tar.gz --exclude=build.sh --exclude=LICENSE --exclude=README.md --exclude=package.json ./*

mkdir output;

mv ldapserver.tar.gz ./output/
