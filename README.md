This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# dependencies

- react-icons
  - react的一个图标库
- react-markdown
- react-syntax-highlighter
- react-textarea-autosize
- remark-gfm
- clsx
  - 优化对于类名的条件语句写法，可以将类名转换为对象的形式
- tailwind-merge
  - 解决tailwindCss的样式冲突问题，使后传入的类名优先级更高
  - tailwindCSS默认情况下类名的优先级跟class写的顺序没有关系，不可控
- class-variance-authority
  - 多个遍体可以提取成函数
  - 官网[https://cva.style/docs/getting-started/variants]

# devDependencies

- prettier-plugin-tailwindcss
  - 格式化tailwind

# vscode Extensions

- Tailwind Fold
  - 折叠tailwind 代码
  - shortKey：ctl + alt + a
