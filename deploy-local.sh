PROJECT=$1
VERSION=$(jq -r .version package.json)
npm run build
npm pack
rm -rf $PROJECT/node_modules/\@aotearoan/neon/
tar -xvzf aotearoan-neon-$VERSION.tgz -C $PROJECT/node_modules/\@aotearoan
mv -f $PROJECT/node_modules/\@aotearoan/package $PROJECT/node_modules/\@aotearoan/neon
rm aotearoan-neon-$VERSION.tgz
