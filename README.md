# Explore My Mind

An immersive, futuristic portfolio experience designed as a **digital brain interface**.  
Instead of scrolling through a traditional resume site, visitors navigate interconnected mind regions that represent technical depth, creativity, growth, and long-term AI vision.

Live Link: https://explore-my-mind.vercel.app/

## Project Concept

`Explore My Mind` is built to feel like entering an intelligent system:

- **Logic Core** for projects and engineering mindset
- **Creative Cortex** for experimentation and idea generation
- **Skill Matrix** for structured technical strengths
- **Memory Vault** for education, experience, and leadership timeline
- **Future Vision** for mission and long-term direction
- **AI Core** as a premium conversational layer prepared for backend integration

## Inspiration

The project is inspired by the intersection of:

- AI systems and autonomous decision-making
- Robotics and real-world intelligence
- Cinematic, high-end interface design
- The idea that a portfolio can feel like a product experience, not a static document

## Key Features

- Immersive neural navigation map with interactive region nodes
- Distinct visual identity per region while preserving one cohesive design system
- Data-driven content architecture for easy customization
- Motion-rich UI with controlled, professional microinteractions
- Accessibility-aware interactions (focus states, smooth discovery flow)
- Frontend-first AI Core placeholder with prompt chips and conversational preview
- Vercel-friendly architecture with no required paid services

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Deployment:** Vercel Hobby

## Folder Structure Overview

```text
app/           # Routes, pages, layout, loading, route transitions
components/    # Reusable UI modules and interactive sections
data/          # Structured editable content (projects, skills, memory, AI prompts)
lib/           # UI/system utilities (visual tokens, motion config, identities)
public/        # Static assets
```

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open:

   ```text
   http://localhost:3000
   ```

4. Optional quality checks:

   ```bash
   npm run lint
   npm run build
   ```

## Deploy on Vercel (Hobby)

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and create a new project.
3. Import the GitHub repository.
4. Keep defaults (Next.js is auto-detected).
5. Click **Deploy**.

No environment variables are required for the current frontend-only version.

## Customize Portfolio Content

Most portfolio updates are content-only edits in `data/`:

- `data/personal.ts` - name, tagline, intro
- `data/hero.ts` - homepage headline, subtitle, CTAs
- `data/regions.ts` - region summaries, focus areas, highlights
- `data/sectionDescriptions.ts` - section intro/detail copy
- `data/projects.ts` - Logic Core project cards
- `data/skills.ts` - Skill Matrix categories and items
- `data/education.ts` - education entries
- `data/experience.ts` - experience entries
- `data/leadership.ts` - leadership entries
- `data/futureGoals.ts` - mission, interests, long-term direction
- `data/aiCore.ts` - AI Core intro, prompts, response placeholders
- `data/links.ts` - GitHub and LinkedIn URLs

## AI Core Roadmap

Current AI Core is frontend-first by design. Planned next steps:

1. Add a secure backend API route for real model inference
2. Connect prompt handling to LLM providers (OpenAI/Anthropic/Gemini)
3. Introduce context retrieval from portfolio data for grounded answers
4. Add conversation memory and personalization
5. Add rate limiting and observability for production reliability

---

Built to present technical ambition, creative clarity, and real-world AI/robotics direction in one cohesive experience.
