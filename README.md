# Snake Game Pilot

A simple Snake game built as a pilot project to validate the GSD workflow with Paperclip.

## Quick Start

1. **Local Development**: Open `index.html` in a browser
2. **Controls**: Arrow keys to move, Space to restart

## Deployment

This project is configured for automatic deployment via Vercel and GitHub.

### Vercel Setup

1. Go to [vercel.com](https://vercel.com)
2. Import the GitHub repository `rOreBurnIntern/snake-game-pilot`
3. Vercel will auto-detect this as a static site and deploy

### GitHub CI

The project includes a CI pipeline at `.github/workflows/ci.yml` that:
- Validates HTML files on every push/PR
- Checks for debug statements (console.log)

## Tech Stack

- Plain HTML/CSS/JavaScript
- No build tools required
- Static deployment via Vercel

## Project Structure

```
├── index.html          # Main game file
├── vercel.json         # Vercel configuration
└── .github/
    └── workflows/
        └── ci.yml      # GitHub Actions CI
```