# Portfolio Pro 3D

A visually stunning, interactive, and AI-powered portfolio website built with Next.js, React, and Three.js. This project is designed to help you showcase your skills, projects, and experience in a modern, engaging way—even if you are a complete beginner.

---

## 🌌 Live Demo

> bharat3645.netlify.app/

---

## 🕴️ Meet 3D Bharat

<p align="center">
  <img src="/public/image.png" alt="Meet 3D Bharat" width="200"/>
</p>

<p align="center"><b>Meet 3D Bharat</b> – Your interactive digital host!</p>

---

## 🚀 Features

- **Space-Themed Gradient:** Smooth, vertical gradient background from deep purple to jet black, for a cosmic, immersive feel.
- **3D Interactive Showcase:** Explore a 3D model centerpiece using Three.js. Drag to rotate, zoom, and interact. Animations supported if present in the model.
- **Dynamic Project Flashcards:** Projects are displayed as interactive flashcards with GitHub links, tags, and descriptions.
- **AI Portfolio Tailor:** AI-powered tool that customizes your portfolio summary based on job descriptions (powered by Genkit and Google AI).
- **Modern UI/UX:** Built with Tailwind CSS, Radix UI, and Framer Motion for smooth transitions, gradients, and a professional look.
- **Responsive & Accessible:** Works great on all devices and follows accessibility best practices.
- **Animated Section Transitions:** Each section animates into view with direction-based, blur, and glow effects.
- **Downloadable Resumes:** Users can download resumes for Web, Data Science, or Other roles via a dropdown in the Contact section.
- **Contact Form:** Accessible, validated contact form with direct links to email, GitHub, and LinkedIn.
- **Customizable 3D Model:** Swap out the GLB file in `public/models/` to use your own 3D avatar or object.

---

## 🗂️ Project Structure

```
My-portfolio/
├── public/                 # Static files (images, 3D models, resumes)
│   ├── models/             # 3D model files (.glb)
│   ├── Resume_MAY2025(WEB).pdf
│   ├── Resume_MAY2025(DS).pdf
│   └── Resume_MAY2025.pdf
├── src/
│   ├── app/                # Next.js app entry (main routing, layout)
│   ├── components/         # All React UI components (sections, UI, 3D, etc.)
│   ├── ai/                 # AI flows and logic for portfolio tailoring
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility libraries
├── docs/                   # Project documentation (blueprint, guides)
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── README.md               # This file
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React, App Router)
- **Styling:** Tailwind CSS, Radix UI, Framer Motion
- **3D Graphics:** Three.js (with GLTFLoader, OrbitControls)
- **AI Integration:** Genkit, Google AI
- **Type Checking:** TypeScript
- **UI Components:** Custom (dropdown, card, button, etc.), Lucide Icons
- **Form Handling:** React Hook Form, Zod
- **Other:** Custom hooks, utility libraries

---

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bharat3645/My-portfolio.git
   cd My-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:9002](http://localhost:9002) to view your site.

---

## 🧭 Main Sections

- **Hero Section:** Introduction and 3D interactive scene.
- **Projects:** Flashcards with project details, tech stack, and GitHub links.
- **About:** Skills, background, and philosophy.
- **Experience:** Work, internships, education, certifications, and leadership.
- **AI Tailor:** Paste a job description to get a tailored portfolio summary.
- **Contact:** Email, GitHub, LinkedIn, and a downloadable resume dropdown.
- **Footer:** Copyright and social links.

---

## 🖼️ Customization

- **Change Profile/Content:** Edit `src/components/hero-section.tsx`, `about-section.tsx`, and `ai-tailor-section.tsx`.
- **Add Projects:** Update the `projects` array in `src/components/projects-section.tsx`.
- **Modify 3D Model:** Replace the GLB file in `public/models/` and update `interactive-3d-scene.tsx` if needed.
- **Colors & Styles:** The main background is a smooth gradient (`linear-gradient(270deg, #14011f 10%, #000000 100%)`). Adjust in `globals.css` for further customization.
- **Resume Files:** Place your PDF resumes in the `public/` folder and update the dropdown in `contact-section.tsx` if you want to change the options.

---

## 🎨 Design & Style Guide

- **Space Theme:** Smooth vertical gradient from deep purple to jet black.
- **Primary color:** Dark blue (#1A237E) for highlights.
- **Accent:** Teal (#26A69A) for interactive elements.
- **Minimalist UI:** Grid-based layout, white space, and modern icons.
- **Advanced Animations:** Section transitions, 3D model interactivity, and animated gradients.
- **Accessibility:** Keyboard navigation, color contrast, and semantic HTML.

See [`docs/blueprint.md`](docs/blueprint.md) for more.

---

## 🤖 AI Portfolio Tailor

- Go to the "AI Tailor" section on the website.
- Paste a job description to get a personalized portfolio summary.
- Powered by Genkit and Google AI.

---

## 📄 Documentation

- **Blueprint & Style Guide:** See `docs/blueprint.md` for design principles, color palette, and UX guidelines.

---

## 📥 Downloadable Resumes

- Users can download resumes for Web, Data Science, or Other roles via a dropdown in the Contact section.
- Files: `Resume_MAY2025(WEB).pdf`, `Resume_MAY2025(DS).pdf`, `Resume_MAY2025.pdf` in the `public/` folder.

---

## 🙋 FAQ

**Q: I'm a beginner. Can I use this?**  
> Yes! The code is modular and well-commented. Follow the steps above and check the docs.

**Q: How do I deploy this?**  
> Use Vercel, Netlify, or any Next.js-compatible hosting. Build with `npm run build` and deploy the `.next` folder.

**Q: Can I use my own 3D model?**  
> Yes! Replace the GLB file in `public/models/` and update `interactive-3d-scene.tsx` if needed.

**Q: How do I add more sections or features?**  
> Create new components in `src/components/` and add them to `src/app/page.tsx`.

---

## 👤 Author

- **Bharat Singh Parihar**
- [GitHub](https://github.com/bharat3645)
- [LinkedIn](https://www.linkedin.com/in/bharat-singh-parihar/)
- Email: bharat3645@gmail.com

