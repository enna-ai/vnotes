<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emoji_u1f4dd.svg/1200px-Emoji_u1f4dd.svg.png" alt="icon" width="100">
  <h1 align="center">Vnotes</h1>
  <p>a user friendly Notion clone designed for productivity and seamless note taking</p>
  <a href="https://vnotes-net.vercel.app">vnotes.app</a>
</div>
<br>

## Installation
1. clone repository

```sh
  git clone
```

2. install packages

```sh
  pnpm install
```

## Configure .env Variables
create a `.env.local` file and configure variables

```
EDGE_STORE_SECRET_KEY=
EDGE_STORE_ACCESS_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
```

## Setup Convex

```sh
npx convex dev
```

## Run

```sh
  pnpm run dev
```

> ensure both convex and client are running

## At a glance
<img src="https://i.imgur.com/si8esqG.png" alt="example" width="600">
