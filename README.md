# Adarsh — Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live_Website-adarsh--portfolio.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://adarsh-portfolio-eight-gamma.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> 🌐 **Live Website:** [https://adarsh-portfolio-eight-gamma.vercel.app/](https://adarsh-portfolio-eight-gamma.vercel.app/)

A modern, high-performance personal portfolio website built for **Adarsh (Mamidala Adarsh)**, M.Sc. Data Science graduate based in Germany, specializing in Machine Learning, Spatio-Temporal Graph Neural Networks, and scalable analytics workflows.

---

## 🚀 Key Features

- **Hero & Profile Branding:** High-impact Space Grotesk headline featuring **Data Science • Machine Learning • Artificial Intelligence**, subtle ambient lighting, circular profile portrait, and quick-access navigation badges.
- **Interactive AI Presenter Introduction Persona:**
  - Futuristic holographic avatar persona with audio-reactive speech synthesis (Web Speech API).
  - Synchronized live captions, chapter selection (*Education in Germany*, *Master's Thesis*, *Data Engineering & ML*, *GDPR Compliance & Availability*), playback controls, and copy-script functionality.
- **Dedicated Education & Academic Excellence Section:**
  - Highlights M.Sc. in Data Science at the **University of Europe for Applied Sciences (Germany)**.
  - Spatio-temporal GNN thesis spotlight, key coursework (Deep Learning, Cloud Computing, Big Data), and GDPR Fundamentals certification.
- **Interactive Research Lab (Thesis Demonstration):**
  - Positioned further down the page to let academic and technical recruiters explore live thesis simulations.
  - Real-time animated **Spatio-Temporal Graph Neural Network (ST-GNN)** highway sensor simulation (METR-LA dataset).
  - Interactive network graph canvas with pulsing traffic flows, active sensor speed telemetry, and dynamic MAE tracking (3.8 → 3.1, -18.4% error reduction).
  - Multi-scene switcher: *Network Graph*, *Speed Forecast Curve*, and *GNN Architecture Pipeline*.
- **Futuristic AI Aesthetic:**
  - Midnight-navy background (`#0B1120`), electric-blue (`#2563EB`/`#3B82F6`), bright-cyan (`#00F0FF`/`#38BDF8`), and soft violet glows (`#8B5CF6`).
  - Space Grotesk headings, Inter body typography, subtle borders, and refined glassmorphism.
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
- **Styling:** Tailwind CSS v4 (Glassmorphism, custom midnight-navy palette, responsive typography)
- **Typography:** Space Grotesk (Headings) & Inter (Body) via `next/font/google`
- **Icons:** Lucide React & Custom SVG Social Icons
- **Animation & Transitions:** Framer Motion & CSS Smooth Scroll (respects `prefers-reduced-motion`)

---

## 📁 Project Structure

```
adarsh-portfolio/
├── public/
│   ├── images/                     # Optimized portraits, badges, and project assets
│   └── videos/                     # Video assets and offline clips
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind styling, theme variables, and glassmorphism
│   │   ├── layout.tsx              # Font setup, SEO metadata, Open Graph
│   │   └── page.tsx                # Main single-page application assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with mobile drawer & brand monogram
│   │   ├── Hero.tsx                # Bold headline, circular portrait & target roles
│   │   ├── AIPresenterSection.tsx  # Animated AI persona with audio-reactive speech & captions
│   │   ├── AboutSection.tsx        # Professional background & target roles
│   │   ├── EducationSection.tsx    # UE Germany M.Sc., thesis highlight, and coursework
│   │   ├── ResearchLabSection.tsx  # Dedicated thesis simulation laboratory
│   │   ├── IntroductionAnimation.tsx # SVG & canvas METR-LA Spatio-Temporal GNN simulator
│   │   ├── ProjectsSection.tsx     # Filterable project cards with modal deep-dives
│   │   ├── SkillsSection.tsx       # 5 verified skill categories
│   │   ├── ContactSection.tsx      # Email copy card & contact composer
│   │   ├── Footer.tsx              # Dynamic copyright, social links, back-to-top button
│   │   └── Icons.tsx               # Crisp SVGs for GitHub and LinkedIn
│   └── data/
│       └── portfolioData.ts        # Central single source of truth for all content
├── package.json
└── tsconfig.json
```

---

## 📬 Contact & Connect

- 🌐 **Live Portfolio:** [https://adarsh-portfolio-eight-gamma.vercel.app/](https://adarsh-portfolio-eight-gamma.vercel.app/)
- 💻 **GitHub:** [https://github.com/Adarsh8688](https://github.com/Adarsh8688)
- 💼 **LinkedIn:** [https://www.linkedin.com/in/mamidala-adarsh-1519a62a2/](https://www.linkedin.com/in/mamidala-adarsh-1519a62a2/)
- ✉️ **Email:** [mamidalaadarsh99@gmail.com](mailto:mamidalaadarsh99@gmail.com)

---

© 2026 Adarsh Mamidala. All rights reserved.
