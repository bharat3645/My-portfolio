# Portfolio Pro 3D

---

## 🕴️ Meet 3D Bharat

<p align="center">
  <img src="/3d-bharat.png" alt="Meet 3D Bharat" width="200"/>
</p>

<p align="center"><b>Meet 3D Bharat</b> – Your interactive digital host!</p>

---

A visually stunning, interactive, and AI-powered portfolio website built with Next.js, React, and Three.js. This project is designed to help you showcase your skills, projects, and experience in a modern, engaging way—even if you are a complete beginner.

---

## 🚀 Features

- **3D Interactive Showcase:** Explore a 3D model centerpiece using Three.js for a memorable first impression.
- **Dynamic Project Display:** Interactive cards and animations for each project, with links to code and demos.
- **AI Portfolio Tailor:** AI-powered tool that customizes your portfolio content based on job descriptions.
- **Modern UI/UX:** Built with Tailwind CSS, Radix UI, and Framer Motion for smooth transitions and a professional look.
- **Responsive & Accessible:** Works great on all devices and follows accessibility best practices.

---

## 🗂️ Project Structure

```
My-portfolio/
├── public/                 # Static files (images, 3D models)
├── src/
│   ├── app/                # Next.js app entry (main routing)
│   ├── components/         # All React UI components
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

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS, Radix UI, Framer Motion
- **3D Graphics:** Three.js (with GLTFLoader, OrbitControls)
- **AI Integration:** Genkit, Google AI
- **Type Checking:** TypeScript
- **Other Tools:** React Hook Form, Zod, Firebase, Lucide Icons

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
- **Projects:** Cards with project details, tech stack, and links.
- **About:** Skills, background, and philosophy.
- **Experience:** Work, internships, and education.
- **AI Tailor:** Paste a job description to get a tailored portfolio summary.
- **Contact:** Email, GitHub, and LinkedIn links.
- **Footer:** Copyright and social links.

---

## 🖼️ Customization

- **Change Profile/Content:** Edit `src/components/hero-section.tsx`, `about-section.tsx`, and `ai-tailor-section.tsx`.
- **Add Projects:** Update the `projects` array in `src/components/projects-section.tsx`.
- **Modify 3D Model:** Replace the GLB file in `public/models/` and update `interactive-3d-scene.tsx` if needed.
- **Colors & Styles:** Adjust in `tailwind.config.ts` and follow the style guide in `docs/blueprint.md`.

---

## 📄 Documentation

- **Blueprint & Style Guide:** See `docs/blueprint.md` for design principles, color palette, and UX guidelines.

---

## 🤖 AI Portfolio Tailor

- Go to the "AI Tailor" section on the website.
- Paste a job description to get a personalized portfolio summary.
- Powered by Genkit and Google AI.

---

## 🙋 FAQ

**Q: I’m a beginner. Can I use this?**
> Yes! The code is modular and well-commented. Follow the steps above and check the docs.

**Q: How do I deploy this?**
> Use Vercel, Netlify, or any Next.js-compatible hosting. Build with `npm run build` and deploy the `.next` folder.

**Q: Can I use my own 3D model?**
> Yes! Replace the GLB file in `public/models/` and update `interactive-3d-scene.tsx` if needed.

---

## 👤 Author

- **Bharat Singh Parihar**
- [GitHub](https://github.com/bharat3645)
- [LinkedIn](https://www.linkedin.com/in/bharat-singh-parihar/)
- Email: bharat3645@gmail.com

---

## 📢 License

This project is open source and free to use for personal and educational purposes.
