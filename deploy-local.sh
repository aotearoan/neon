# Path to project you want to install the library into
PROJECT=$1
if [ -z "$PROJECT" ]; then
  echo "No project path provided, just building, Please provide the project path, e.g. ./deploy-local.sh ../my-project if you want to install it automatically"
fi
APP_VERSION=$(node -p -e "require('./package.json').version")
if [ -z "$APP_VERSION" ]; then
  echo "Version not found in package.json"
  exit 1
fi
BUILD_PATH="${PWD}/arcual-lib-app-neon-${APP_VERSION}.tgz"
echo "build path is: ${BUILD_PATH}"
rm -r ./dist
npm run build
npm pack

if [ -z "$PROJECT" ]; then
  echo "No project path provided, navigate to application directory and run the following command to install the build"
  echo "npm i -S $BUILD_PATH"
  exit 1
fi
cd $PROJECT || exit
npm i -S $BUILD_PATH
