# Adarsh — Personal Portfolio Website

A modern, high-performance, dark-themed personal portfolio website built for **Adarsh**, Data Science postgraduate student based in Berlin, Germany.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Key Features

- **Hero & Profile Branding:** Direct academic and research introduction highlighting M.Sc. Data Science studies at the University of Europe for Applied Sciences in Berlin.
- **AI Introduction Video Player:**
  - Responsive video player with custom playback controls (Play/Pause, Seek bar, Time counter, Mute/Unmute, Fullscreen, and Restart).
  - Built-in polished interactive placeholder mode with animated waveform visualizer while awaiting the final AI presenter video.
  - Strictly **no autoplay audio** for an accessible, professional user experience.
  - Interactive transcript reader with timestamp indexing, search filtering, and 1-click clipboard copying.
- **Curated Projects Showcase:**
  - Prioritizes public GitHub repositories: **Short-Term Traffic Speed Forecasting (GNN)**, **Logistics Operations Intelligence**, and **DataForge Event-Driven Platform**.
  - Verified benchmark metrics: Highlighted Master's thesis achievement reducing MAE from 3.8 to 3.1 (~18% error reduction on METR-LA dataset).
  - Search filter by keyword/technology and category filter pills.
  - Direct repository links and live Streamlit deployment buttons.
- **Verified Skills Matrix:**
  - Organized into the 5 core categories: Programming, Data Analysis, Machine Learning, Visualization, Tools & Technologies.
  - Each skill includes proficiency level and real-world project context.
- **About Me & Credentials:**
  - Academic background, Master's thesis focus, and GDPR Fundamentals certification.
- **Direct Contact Hub:**
  - Configurable email with 1-click copy-to-clipboard, mailto composer, and direct links to GitHub and LinkedIn.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Glassmorphism, custom dark color scheme, responsive typography)
- **Icons:** Lucide React & Custom SVG Social Icons
- **Animation & Transitions:** Framer Motion & CSS Smooth Scroll (respects `prefers-reduced-motion`)

---

## 📁 Project Structure

```
adarsh-portfolio/
├── public/
│   └── videos/            # Drop your finished MP4 video files here
│       └── README.md
├── src/
│   ├── app/
│   │   ├── globals.css    # Tailwind styling, dark theme, and glassmorphism
│   │   ├── layout.tsx     # SEO metadata, Open Graph, Twitter cards, viewport
│   │   └── page.tsx       # Main page assembling all portfolio sections
│   ├── components/
│   │   ├── Navbar.tsx     # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx       # Introduction, CTA buttons, and proof badges
│   │   ├── VideoSection.tsx # AI video player & transcript viewer
│   │   ├── ProjectsSection.tsx # Filterable projects with modal deep-dives
│   │   ├── SkillsSection.tsx # Grouped skills matrix
│   │   ├── AboutSection.tsx  # Academic background & GDPR credentials
│   │   ├── ContactSection.tsx # Email copy card & contact composer
│   │   ├── Footer.tsx     # Social links, dynamic copyright, back-to-top
│   │   └── Icons.tsx      # Crisp SVGs for GitHub and LinkedIn
│   └── data/
│       └── portfolioData.ts # Single source of truth for all portfolio content
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
