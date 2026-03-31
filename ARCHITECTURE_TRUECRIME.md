# True Crime News Aggregator - Execution Architecture

## Product Brief (Signed)

**Product:** True Crime News Aggregator
**Outcome:** Get the latest news on active true crime stories
**Primary User:** People interested in active true crime cases who don't have time to follow individually
**Core Flow:**
1. Signup/login with Google auth
2. See top true crime update for last 24 hours
3. Share the story with someone

**Delivery Target:** Web app (public release, mobile-ready)
**Quality Bar:** Polished and modern
**Constraints:** GitHub, Vercel, modern tools, mobile-ready

---

## Tech Stack

### Frontend
- **Framework:** React with Next.js 14 (App Router)
- **Styling:** Tailwind CSS for modern, polished UI
- **Authentication:** NextAuth.js with Google OAuth
- **State:** React Context / useState for simple state management

### Backend
- **API Routes:** Next.js API routes (serverless on Vercel)
- **Database:** Vercel Postgres or Supabase (for user preferences)
- **News Source:** NewsAPI or curated RSS feeds (mock for MVP)

### Hosting
- **Platform:** Vercel (auto-deploy from GitHub main branch)
- **Domains:** Vercel-provided or custom domain
- **CI:** GitHub Actions (lint, typecheck, test, build)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     User Browser                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Home Page  │  │ Auth Screen │  │  Story Detail/Share  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js App (Vercel)                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Pages: / (home), /auth/signin, /story/[id]         │    │
│  │  Components: NewsCard, ShareButton, GoogleSignIn    │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  API Routes: /api/news, /api/auth/[...nextauth]     │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Vercel Postgres │  │  NextAuth.js    │  │  News API       │
│  (user prefs)    │  │  (Google OAuth) │  │  (curated feeds) │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## Project Structure

```
true-crime-news/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home - top story display
│   │   ├── layout.tsx            # Root layout with auth provider
│   │   ├── story/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Story detail + share
│   │   └── api/
│   │       ├── news/
│   │       │   └── route.ts      # GET /api/news
│   │       └── auth/
│   │           └── [...nextauth]/
│   │               └── route.ts # NextAuth handlers
│   ├── components/
│   │   ├── NewsCard.tsx          # Story display card
│   │   ├── ShareButton.tsx       # Share functionality
│   │   ├── GoogleSignIn.tsx      # Auth button
│   │   └── Header.tsx             # Navigation
│   ├── lib/
│   │   ├── auth.ts               # NextAuth configuration
│   │   ├── news.ts               # News API client
│   │   └── db.ts                 # Database client
│   └── styles/
│       └── globals.css           # Global styles + Tailwind
├── public/
│   ├── logo.svg                  # App logo/branding
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── ci.yml                # CI pipeline
├── tests/
│   ├── story.test.tsx            # Story display tests
│   ├── auth.test.tsx             # Auth flow tests
│   └── share.test.tsx            # Share functionality tests
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── README.md
```

---

## Acceptance Criteria

### Must Have (Ship Blockers)

**AC-1: Google Authentication**
```
GIVEN a new user visits the app
WHEN they click "Sign in with Google"
THEN they are redirected to Google OAuth
AND after successful auth, they see the home page with their profile
AND they remain logged in on refresh
```

**AC-2: Top Story Display**
```
GIVEN an authenticated user
WHEN they visit the home page
THEN they see the top true crime story from the last 24 hours
AND the story includes: headline, summary, source, timestamp
AND the display is mobile-responsive
```

**AC-3: Story Sharing**
```
GIVEN a user viewing a story
WHEN they click the share button
THEN they can share via:
  - Copy link to clipboard
  - Share to Twitter (web share API)
  - Share to other apps (mobile native share)
```

**AC-4: Mobile Responsiveness**
```
GIVEN the app on any device
WHEN viewed on mobile (375px), tablet (768px), desktop (1440px)
THEN all content is readable and functional
AND no horizontal scroll on mobile
AND touch targets are >= 44px
```

**AC-5: Deployment**
```
GIVEN the production deployment
WHEN a user visits the Vercel URL
THEN the app loads successfully
AND all features work as expected
AND the app is accessible from any machine
```

### Should Have

**AC-6: Loading States**
- Show skeleton/skeleton while content loads
- Show clear error messages for failures

**AC-7: Polished UI**
- Modern typography (Inter or system fonts)
- Subtle animations on interactions
- Consistent spacing using Tailwind

---

## Test Strategy

### Unit Tests
- Component rendering (NewsCard, ShareButton, Header)
- Auth state handling
- News data formatting

### Integration Tests
- Google OAuth flow (mocked)
- News API integration
- Share functionality

### E2E Tests
- Full auth flow: visit → sign in → see story
- Share flow: view story → share → verify link copied

### Coverage Requirements
- Minimum 80% code coverage on new code
- All acceptance criteria must have corresponding test

---

## Release Gates

### Gate 1: Code Quality (Lead Developer)
- [ ] TypeScript compiles without errors
- [ ] ESLint passes with no warnings
- [ ] All tests pass
- [ ] Coverage >= 80%

### Gate 2: Feature Verification (CTO)
- [ ] AC-1: Google Auth works
- [ ] AC-2: Top story displays correctly
- [ ] AC-3: Share functionality works
- [ ] AC-4: Mobile responsive
- [ ] AC-5: Production deployment successful

### Gate 3: Production Readiness (CTO)
- [ ] No console errors in production
- [ ] Performance: page load < 3s on 4G
- [ ] Accessibility: Lighthouse score >= 90
- [ ] SEO: Basic meta tags present

---

## CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run typecheck

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test:coverage

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
```

---

## Deliverables for Board Review

### Required Artifacts

1. **Live Application URL** (Vercel deployment)
2. **GitHub Repository** (source code)
3. **acceptance-criteria.yaml** (exact criteria compliance)
4. **Executive Summary** (what was built, how to use)

### Artifact Locations

| Artifact | Location |
|----------|----------|
| Live URL | Vercel deployment (auto-deploy) |
| Source Code | GitHub repository |
| Acceptance Criteria | `/acceptance-criteria.yaml` |
| Executive Summary | Issue completion comment |

---

## Handoff to Lead Developer

### Task: GSD-17

**Context:** Build the True Crime News Aggregator based on this architecture document.

**Requirements:**
- Implement Google OAuth authentication
- Display top true crime story (mock data acceptable for MVP)
- Add share functionality
- Ensure mobile responsiveness
- Deploy to Vercel

**Acceptance Criteria:** See AC-1 through AC-5 above

**Dependencies:**
- Google Cloud Console project for OAuth (use existing or create new)
- News API key (mock data acceptable if API unavailable)

**Notes:**
- Use existing project workspace
- Creates branding assets as needed
- Focus on polished UX as specified by board