---
title: "Why Stars"
description: "A much needed upgrade for students to plan their timetable properly"
type: "App"
link: "https://mods.yuzwen.com"
source: "https://github.com/yuzhengwen/whystars"
skills:
  [
    React,
    Next.js,
    Zustand,
    Auth.js,
    TailwindCSS,
    Shadcn,
    Neon,
    PrismaORM,
    Vercel,
    Cheerio,
    Cloudflare,
    S3
  ]
coverImg: "../images/WhyStars-Timetable.jpeg"
---

## Features
- All information **automatically kept up to date** every semester
- View all module information, timings
- One click to generate **all possible combinations** of indexes to take, with optional constraints such as blacklisted/whitelisted days/time periods, locking specific indexes, etc.
- **Intuitive timetable interface** to manually select each mod index
- Local save without logging in. Data is saved in browser
- Optional cloud save (cross-device sync) and timetable loadouts
  
## Tools Used
#### Frontend Stack
- Next.js for Static Site Generation (SSG), Server Side Rendering (SSR), Incremental Static Regeneration (ISR), caching etc.
  - Static pages such as "About" or "Feedback" statically generated at build time so that HTML is directly served when requested
  - Mod pages are statically generated at build time, but also periodically updated using ISR
- Zustand for global state management
- Tailwind/Shadcn components used for styling 

#### Auth Stack
- Auth.js
- Neon with Prisma DB Connector

#### Backend (Data Collection)
- Cheerio for HTML parsing and extracting information
- Vercel Functions to run CRON job periodically to keep information up to date
- S3 compatible storage (Cloudflare R2) for storing data 