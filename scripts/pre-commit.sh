echo "Running tests"
cd packages/web
yarn  lint
echo 'completed'
RESULT=$?
git stash pop -q
[ $RESULT -ne 0 ] && exit 1
exit 0
