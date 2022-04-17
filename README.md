# MixBook

## Assignment

https://uuapp.plus4u.net/uu-dockit-maing02/4e68298f1658473e9bf5692272883290/document?documentId=61f38626a707d6002888ca86

## Trello

https://trello.com/b/IcagYj44/bcaa-projekt

## Local development

- Install dependencies.

`docker-compose run --no-deps app npm install`

- Run it.

`docker-compose up`

- Stop it.

`docker-compose down`

- Force rebuild if you need it.

`docker-compose up --build --force-recreate`

- See it.

`localhost:3001`

- Migrate it.
`docker-compose exec backend npx prisma migrate dev --name init --schema src/prisma/schema.prisma`