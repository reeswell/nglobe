# [nglobe](https://nglobe.vercel.app/)

![nglobe](https://cdn.jsdelivr.net/gh/xxydrr/my_pic/img/image-20230819193814746.png)

<p align='center'>
<a href="https://github.com/reeswell/nglobe/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

## 特性

- 采用 `TypeScript` 编写
- 使用 `Next-intl`进行国际化（I18n）
- 主题切换
- 响应式设计
- 使用 `Tailwind CSS` 进行样式设计
- 使用 `Shadcn UI` 构建 UI 组件
- 服务器端和客户端组件
- 使用 `NextAuth.js` 进行身份认证
- 使用 `Zod` 进行验证
- 使用 `Prisma` 进行 `ORM`
- 数据库采用 `MongoDB`

## 本地运行

1.克隆仓库

```shell
git clone https://github.com/reeswell/nglobe.git
```

2.使用 pnpm 安装依赖：

```shell
pnpm i
```

3.将 Prisma 数据库迁移应用到实际的数据库中

```shell
npx prisma db push
```

4.将`.env.example`复制为`.env.local`并更新变量.

```shell
cp .env.example .env.local
```

5.启动开发服务器：

```shell
pnpm dev
```
