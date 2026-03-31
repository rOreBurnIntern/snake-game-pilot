# True Crime News Aggregator - PRD

## Overview

Build a True Crime News Aggregator web app using Next.js 14 with Google OAuth, story display, and sharing functionality.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- NextAuth.js (Google OAuth)
- Jest + React Testing Library

## Tasks

### Project Setup

- [ ] Initialize Next.js 14 project with TypeScript and Tailwind CSS
- [ ] Delete old Snake game files (index.html, README.md content about snake)
- [ ] Update package.json with required dependencies
- [ ] Configure tsconfig.json for Next.js
- [ ] Configure tailwind.config.js
- [ ] Update vercel.json for Next.js framework

### Authentication

- [ ] Install next-auth package
- [ ] Create /api/auth/[...nextauth]/route.ts with Google OAuth provider
- [ ] Create auth.ts configuration with session provider
- [ ] Create SessionProvider wrapper in layout.tsx
- [ ] Create GoogleSignIn component

### News Data

- [ ] Create lib/news.ts with mock true crime stories data
- [ ] Create /api/news/route.ts API endpoint
- [ ] Define Story interface with id, headline, summary, source, timestamp

### UI Components

- [ ] Create Header component with logo and auth state
- [ ] Create NewsCard component for story display
- [ ] Create ShareButton component with copy link and native share
- [ ] Create loading skeleton components

### Pages

- [ ] Create src/app/page.tsx (home - shows top story)
- [ ] Create src/app/layout.tsx with proper metadata and providers
- [ ] Create src/app/story/[id]/page.tsx for story detail
- [ ] Add mobile-responsive styling throughout

### Styling

- [ ] Update globals.css with Tailwind directives
- [ ] Create polished, modern UI with proper typography
- [ ] Ensure mobile responsiveness (375px, 768px, 1440px)
- [ ] Ensure touch targets are >= 44px

### Testing

- [ ] Create tests/auth.test.tsx for authentication tests
- [ ] Create tests/story.test.tsx for story display tests
- [ ] Create tests/share.test.tsx for share functionality tests
- [ ] Configure jest.config.js
- [ ] Configure jest.setup.js

### CI/CD

- [ ] Update .github/workflows/ci.yml for Next.js
  - npm run lint
  - npm run typecheck
  - npm run test:coverage
  - npm run build

### Documentation

- [ ] Update README.md with True Crime News Aggregator content
- [ ] Add environment variables documentation

## Acceptance Criteria

1. Google OAuth sign-in works and persists
2. Top true crime story displays on home page
3. Story detail page shows full content
4. Share button works (copy link + native share)
5. Mobile responsive on all viewports
6. Tests pass with >= 80% coverage
7. TypeScript compiles without errors
8. ESLint passes with no warnings
9. Production build succeeds

## Environment Variables Needed

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generated-secret>
GOOGLE_CLIENT_ID=<from-google-console>
GOOGLE_CLIENT_SECRET=<from-google-console>
```

## Notes

- For MVP, use mock data instead of real News API
- Focus on polished UI per board requirements
- All touch targets must be >= 44px for accessibility