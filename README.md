# Knucklebones

This is Knucklebones, a web application inspired to the mini-game [Knucklebones](https://en.wikipedia.org/wiki/Knucklebones) from the game [Cult Of The Lamb](https://www.cultofthelamb.com/).

[Here](https://www.youtube.com/watch?v=y4PfvZiEs5E) you can find a video demo of the game.

## Stack

To develop the app I used the [T3 Stack](https://create.t3.gg/), bootstrapped with `create-t3-app`.

## Deployed version
You can find a live version of the app [here](https://knucklebones-delta.vercel.app/).

## How to run it locally
- create an `.env` file based on the `.env.example` file and add the following secrets:
  - POSTGRES_PRISMA_URL: the url of the postgres database
  - POSTGRES_URL_NON_POOLING: the url of the postgres database without pooling
  - NEXTAUTH_SECRET: a secret string used by next-auth (you can use a string with a space `" "` at the moment since auth is not used)
  - NEXTAUTH_URL: the url of the app (you can use http://localhost:3000)
- add in the `.npmrc` file the following line: `//npm.pkg.github.com/:_authToken=[YOUR_GITHUB_TOKEN]` replacing [YOUR_GITHUB_TOKEN] with a generated GitHub token
- run `pnpm install` to install all the dependencies
- run `pnpm run dev` to start the project locally
