# Adarsh — Personal Portfolio Website

A modern, high-performance, dark-themed personal portfolio website built for **Adarsh**, Data Science postgraduate student based in Berlin, Germany.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Key Features

- **Hero & Profile Branding:** High-impact Space Grotesk headline featuring **Data Science • Machine Learning • Artificial Intelligence**, subtle violet ambient gradients, and quick-access navigation badges.
- **Interactive AI Presenter Introduction Persona:**
  - Futuristic holographic avatar persona with audio-reactive speech synthesis (Web Speech API).
  - Synchronized live captions, chapter selection (*Education in Berlin*, *Master's Thesis*, *Data Engineering & ML*, *GDPR Compliance & Availability*), playback controls, and copy-script functionality.
- **Dedicated Education & Academic Excellence Section:**
  - Highlights M.Sc. in Data Science at the **University of Europe for Applied Sciences (Berlin)**.
  - Spatio-temporal GNN thesis spotlight, key coursework (Deep Learning, Cloud Computing, Big Data), and GDPR Fundamentals certification.
- **Interactive Research Lab (Thesis Demonstration):**
  - Positioned further down the page to let academic and technical recruiters explore live thesis simulations.
  - Real-time animated **Spatio-Temporal Graph Neural Network (ST-GNN)** highway sensor simulation (METR-LA dataset).
  - Interactive network graph canvas with pulsing traffic flows, active sensor speed telemetry, and dynamic MAE tracking (3.8 → 3.1, -18.4% error reduction).
  - Multi-scene switcher: *Network Graph*, *Speed Forecast Curve*, and *GNN Architecture Pipeline*.
- **Futuristic AI Aesthetic:**
  - Midnight-black background (`#030508`), electric-blue (`#2563EB`/`#3B82F6`), bright-cyan (`#00F0FF`/`#38BDF8`), and soft violet glows (`#8B5CF6`).
  - Space Grotesk headings, Inter body typography, subtle neon borders, and refined glassmorphism.
- **Curated Projects Showcase:**
  - Real verified repositories: **Short-Term Traffic Speed Forecasting (GNN)**, **Logistics Operations Intelligence** (with live Streamlit deployment), **DataForge Event-Driven Platform**, **Bike Dashboard**, **Product Pricing Strategies**, and **Chinook SQL Analytics**.
  - Interactive keyword search, category filter pills, and modal deep-dives.
- **Verified Skills Matrix:**
  - 5 core categories: Programming, Data Analysis, Machine Learning, Visualization, Tools & Technologies.
- **Direct Contact Hub:**
  - Verified email (`mamidalaadarsh99@gmail.com`) with 1-click clipboard copy, client-side message composer, and LinkedIn & GitHub profiles.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Glassmorphism, custom dark neon palette, responsive typography)
- **Typography:** Space Grotesk (Headings) & Inter (Body) via `next/font/google`
- **Icons:** Lucide React & Custom SVG Social Icons
- **Animation & Transitions:** Framer Motion & CSS Smooth Scroll (respects `prefers-reduced-motion`)

---

## 📁 Project Structure

```
adarsh-portfolio/
├── public/
│   └── videos/                     # Drop MP4 video files here if adding custom offline clips
│       └── README.md
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind styling, dark theme, neon borders, and glassmorphism
│   │   ├── layout.tsx              # Space Grotesk & Inter font setup, SEO metadata, Open Graph
│   │   └── page.tsx                # Main single-page application assembling all 8 sections
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with mobile drawer & brand monogram
│   │   ├── Hero.tsx                # Bold Space Grotesk headline, glowing CTA buttons & badges
│   │   ├── AIPresenterSection.tsx  # Animated AI persona with audio-reactive speech & captions
│   │   ├── AboutSection.tsx        # Professional background & engineering philosophy
│   │   ├── EducationSection.tsx    # UE Berlin M.Sc., thesis highlight, and coursework
│   │   ├── ResearchLabSection.tsx  # Dedicated thesis simulation laboratory
│   │   ├── IntroductionAnimation.tsx # SVG & canvas METR-LA Spatio-Temporal GNN simulator
│   │   ├── ProjectsSection.tsx     # Filterable project cards with modal deep-dives
│   │   ├── SkillsSection.tsx       # 5 verified skill categories
│   │   ├── ContactSection.tsx      # Email copy card & contact composer (mamidalaadarsh99@gmail.com)
│   │   ├── Footer.tsx              # Dynamic copyright, social links, back-to-top button
│   │   └── Icons.tsx               # Crisp SVGs for GitHub and LinkedIn
│   └── data/
│       └── portfolioData.ts        # Central single source of truth for all content
├── scripts/
│   └── test-browser.js             # Puppeteer desktop & mobile screenshot automation
├── package.json
└── tsconfig.json
```

---

## ⚙️ How to Update Your Information

All profile information, project details, skills, social links, and video configurations are centralized in a single file:
👉 `src/data/portfolioData.ts`

### 1. Adding Your Finished AI Video
1. Place your video file in `public/videos/` (e.g. `public/videos/adarsh-ai-intro.mp4`).
2. Open `src/data/portfolioData.ts` and update the `video` block:
   ```ts
   video: {
     ...
     videoUrl: "/videos/adarsh-ai-intro.mp4",
     isPlaceholder: false,
     ...
   }
   ```
3. Update or refine the transcript items in `transcripts` as desired.

### 2. Updating Contact Information or Social Links
Edit the `social` object in `src/data/portfolioData.ts`:
```ts
social: {
  github: "https://github.com/Adarsh8688",
  linkedin: "https://www.linkedin.com/in/mamidala-adarsh-1519a62a2/",
  email: "your.new.email@example.com",
}
```

### 3. Adding or Updating Projects
Add new entries to the `projects` array in `src/data/portfolioData.ts` following the `Project` interface.

---

## 💻 Local Development Setup

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm or yarn

### Installation
```bash
# Clone or navigate to the project directory
cd adarsh-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build & Verification

```bash
# Type check and build optimized static output
npm run build

# Start the production server
npm run start
```

---

## 🚢 Free Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Complete portfolio website"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and select `adarsh-portfolio`.
4. Vercel automatically detects Next.js. Click **Deploy**.
5. Your live site will be ready in under 60 seconds with a free `.vercel.app` domain or custom domain.

### Deploying to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build Command to `npm run build` and Publish Directory to `.next`.
3. Deploy!
