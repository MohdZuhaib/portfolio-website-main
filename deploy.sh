echo "Pulling Repo"
git pull
echo "Installing Modules"
yarn
echo "Building"
yarn run build
echo "Restarting PM2"
pm2 restart deedz
