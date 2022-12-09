#!/usr/bin/env sh

echo "change directory"
cd a428-cicd-labs

echo "pull repository"
git pull origin react-app

echo "install all package"
npm install

echo "build react-app"
npm run build

echo "restart server"
pm2 restart react-app

echo "wait 1 minutes"
sleep 1m