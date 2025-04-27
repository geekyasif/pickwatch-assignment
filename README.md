Backend setup
npm i
npx prisma migrate dev
npx prisma generate
npx prisma db seed
npm run dev

Primsa Reference
npm install prisma --save-dev
npm i @prisma/client

Postgres setup using docker
PORT=5432
POSTGRES_USER=admin
POSTGRES_PASSWORD=test123
POSTGRES_DB=mydb
