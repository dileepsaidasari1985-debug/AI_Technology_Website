# 🌟 Premium Student Personal Portfolio Website

An outstanding, modern, responsive, and visually stunning student developer portfolio website built with **React**, **Vite**, **Tailwind CSS**, **Lucide Icons**, and **Framer Motion**.

Designed specifically for computer science students, aspiring software engineers, and technology enthusiasts seeking internships, full-time roles, or collaborative projects.

---

## 🚀 Key Highlights & Features

- **Design & Theme**:
  - Dark Navy aesthetic (`#0a0f1d`) with electric blue and purple gradient accents.
  - Glassmorphic card layouts with backdrop blur and interactive hover effects.
  - Fully functional **Dark Mode & Light Mode** toggle with persistent local storage.
  - Subtle interactive **custom cursor** on desktop (with automatic fallback on mobile).
  - Smooth **scroll progress bar** at the top.
  - Custom branded **Preloader / Splash Screen** with initials.
  - Circular progress **Back to Top** floating button.

- **Navigation**:
  - Sticky glassmorphic navbar with active section scroll-spy highlighting.
  - Mobile responsive drawer menu with smooth animations.
  - 1-click **Share Portfolio** button (Web Share API with copy-to-clipboard fallback).
  - Quick access **Resume Download** button.

- **Hero Section**:
  - "Hello, I'm [Your Name]" greeting badge with live glowing availability indicator.
  - Gradient typography: *"Building Ideas Into Digital Experiences."*
  - Animated role typewriter cycling through multiple specialties.
  - Profile image with rotating gradient ring and floating tech stack badges.
  - Direct CTA buttons: *Explore My Projects*, *Download Resume*, and *Contact Me*.
  - Social media links (GitHub, LinkedIn, Instagram, Twitter, LeetCode).

- **About Me Section**:
  - Narrative bio, educational journey, and current career objectives.
  - Quick-facts card (Degree, Graduation, GPA, University, Spoken Languages).
  - Animated statistics cards (Projects Completed, Skills, Certifications, Experience).
  - Personal strengths and hobbies showcase.

- **Technical Skills**:
  - Organized into 6 categories:
    1. Programming Languages
    2. Frontend Development
    3. Backend Development
    4. Database Management
    5. Tools & DevOps
    6. Soft Skills
  - Interactive category filter tabs and real-time percentage progress indicators.

- **Projects Showcase**:
  - Real-time search bar to search projects by title, description, or tech stack.
  - Filter pills (*All*, *Full Stack*, *Frontend / UI*, *Tools & Utilities*, *Academic / AI*).
  - Featured project badges, GitHub repository links, and live demo buttons.
  - **Comprehensive Project Case Study Modal** with image gallery thumbnail selector, engineering challenges, solutions, and key features.

- **Achievements & Awards**:
  - Timeline cards for hackathons, academic honors (Dean's List), and workshop presentations.

- **Education Timeline**:
  - Modern vertical milestone timeline detailing degrees, GPA, university, and relevant coursework.

- **Certifications Gallery**:
  - Verified credential cards with issuer badges, completion dates, and credential IDs.
  - **Certificate Preview Modal** with direct links to official verification pages.

- **Interactive Digital Resume**:
  - Dedicated resume viewer with clean typography.
  - Built-in **Print & Save as PDF** support.

- **Personal Blog / Learning Journal**:
  - Technical article cards with read times and category tags.
  - **Full Article Reader Modal** with markdown-like styling.

- **Mentorship & Peer Testimonials**:
  - Endorsement cards from professors, hackathon mentors, and project teammates.

- **Frequently Asked Questions (FAQ)**:
  - Interactive accordion addressing common recruiter and collaborator questions.

- **Contact Section**:
  - Interactive form with full input validation (email format, character length checks).
  - Clear error feedback and success banner with celebratory confetti.
  - Direct contact cards with 1-click **Copy Email** functionality.

---

## 🛠️ How to Customize Your Information

All content in this portfolio is managed from a single centralized file:

📁 **`src/data/portfolioData.js`**

Open `src/data/portfolioData.js` to easily update:
- Your name, initials, title, and bio.
- Profile image / avatar URL.
- Availability status badge.
- Skills and proficiency levels.
- Projects, case study details, screenshots, and repository links.
- Education history, GPA, and graduation date.
- Achievements, awards, and certifications.
- Blog articles, testimonials, and FAQs.
- Social media profiles and contact information.

---

## 💻 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 🌐 Deployment

You can deploy this portfolio in minutes:

- **Vercel**: Import your GitHub repository, choose **Vite** preset, and deploy.
- **Netlify**: Connect repository, build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: Build the project and deploy the `dist` folder.

