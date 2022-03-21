echo "Running prisma migrations"
cd packages/api
npx prisma migrate deploy
echo "**DONE**"