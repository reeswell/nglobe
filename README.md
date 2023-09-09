# [nglobe](https://nglobe.vercel.app/)

![nglobe](https://cdn.jsdelivr.net/gh/xxydrr/my_pic/img/image-20230819193814746.png)

<p align='center'>
<b>English</b> | <a href="https://github.com/reeswell/nglobe/blob/main/README.zh-CN.md">简体中文</a>
</p>

## Features

- Written in `TypeScript`
- Internationalization (I18n) using `Next-intl`
- Theme switching
- Responsive design
- Styled using `Tailwind CSS`
- UI Components built using `Shadcn UI`
- Server and Client Components
- Authentication using `NextAuth.js`
- Validations using `Zod`
- ORM using `Prisma`
- Database on `MongoDB`

## Running Locally

1.Cloning the repository

```shell
git clone https://github.com/reeswell/nglobe.git
```

2.Install dependencies using pnpm:

```shell
pnpm i
```

3.Setup Prisma

```shell
npx prisma db push
```

4.Copy `.env.example` to `.env.local` and update the variables.

```shell
cp .env.example .env.local
```

5.Start the development server:

```shell
pnpm dev
```
