## Manual Installation
 - Install Node js Locally
 - Clone this repo
 - Install dependencies npm install
 - Start the DB loaclly
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
    - Go to neno.tech and get yourself a new DB
 - Change the .env file and updfate youir db credaitials
 - npx prisma migrate
 - npx prisma generate
 - npm run build
 - npm run start

## Docker Installation
 - Install Docker Desktop
 - Create a network - `docker network create user_project`
 - Start postgres
    - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - Build the Image - `docker build --network=host -t user-project .`
 - Start the Image - `docker run --network user_project -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres -p 3000:3000 user-project`