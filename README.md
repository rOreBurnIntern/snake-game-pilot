# CrimeWire - True Crime News Aggregator

A modern web application for aggregating and sharing true crime news stories.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **NextAuth.js** - Authentication with Google OAuth
- **Jest** - Testing framework

## Features

- 🔐 Google OAuth authentication
- 📰 Top story display on home page
- 📖 Full story detail pages
- 🔗 Share functionality (copy link + native share)
- 📱 Mobile-responsive design
- ♿ Accessible touch targets (44px+)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-in-production
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

To generate a NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/  # NextAuth.js routes
│   │   └── news/                 # News API
│   ├── story/[id]/              # Story detail pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── providers.tsx            # Session provider
├── components/
│   ├── Header.tsx
│   ├── GoogleSignIn.tsx
│   ├── NewsCard.tsx
│   └── ShareButton.tsx
├── lib/
│   ├── auth.ts                  # NextAuth configuration
│   └── news.ts                  # Mock news data
└── styles/
    └── globals.css              # Tailwind styles
tests/
├── auth.test.tsx
├── story.test.tsx
└── share.test.tsx
```

## Mock Data

The application currently uses mock data defined in `src/lib/news.ts`. Each story includes:

- `id` - Unique identifier
- `headline` - Story title
- `summary` - Brief overview
- `content` - Full article text
- `source` - News outlet name
- `sourceUrl` - Original article URL
- `timestamp` - Publication date
- `category` - Story type (breaking, trial, investigation, cold-case, missing-person)
- `author` - Article author

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables for Production

- `NEXTAUTH_URL` - Your production URL
- `NEXTAUTH_SECRET` - Secure random string
- `GOOGLE_CLIENT_ID` - From Google Cloud Console
- `GOOGLE_CLIENT_SECRET` - From Google Cloud Console

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins (your domain)
6. Add authorized redirect URIs: `YOUR_DOMAIN/api/auth/callback/google`

## License

MIT