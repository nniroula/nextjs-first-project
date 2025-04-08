This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Next.js concepts:
1. Routing and Navigation = <Link />
2. Metadata
3. Styling - Tailwind CSS
4. <Image />
5. Client vs Server Components - 'use client' and 'use server'
    -- GET Request and fetch("URL"), fetch("URL", {cache: 'no-store}, fetch("URL", {next: {revalidate: 10}}))
6. Server actions (POST/PUT/DELETE)
7. Suspense and Streaming
8. Static(at build time) and Dynamic(at request time) rendering
9. Middleware
10. Folder Structure = folders and files are default server side routes. No need to write api/users like route. It is app routing. Traditionaly we are used to page routing (api/users/id)
11. ``npx create-next-app@lastest .`` (dot is optional for naming a project)
12. ``npm run build``
13. ``npm run dev``
14. ``Client side and Server side rendering``
15. Caching: fetch("URL", {cache: 'no-store}) OR fetch("URL", {next: {revalidate: 10}})
