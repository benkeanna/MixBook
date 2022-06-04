# MixBook

## Assignment

https://uuapp.plus4u.net/uu-dockit-maing02/4e68298f1658473e9bf5692272883290/document?documentId=61f38626a707d6002888ca86

## Trello

https://trello.com/b/IcagYj44/bcaa-projekt

## Local development

- Install dependencies.

`docker-compose run --no-deps backend npm install`

- Run it.

`./fe-build-prod.sh`

`docker-compose up`

- Stop it.

`docker-compose down`

- Force rebuild if you need it.

`docker-compose up --build --force-recreate`

- Prepare db.
  

`docker-compose exec backend npx prisma migrate dev --name init --schema src/prisma/schema.prisma`


  `docker-compose exec backend npx prisma generate --schema src/prisma/schema.prisma`


  `docker-compose exec backend npx prisma db seed`

- Delete and reseed db.

`docker volume rm mixbook_pgdata`

`docker-compose up --renew-anon-volumes`

`docker-compose exec backend npx prisma db seed`

- See it.

`localhost:3001`
