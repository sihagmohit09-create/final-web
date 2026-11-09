# Mohit — Personal Professional Portfolio Website

A modern, executive-grade portfolio website built for **Mohit**, an MBA candidate specializing in **Marketing and Operations** at IILM University, Greater Noida, with a **B.Tech in Computer Science Engineering** from UPES.

---

## 🚀 Live Localhost Link

Your portfolio is currently running and accessible at:
👉 **[http://localhost:5173](http://localhost:5173)**

To start the server anytime in the future:
```bash
npm run dev
```

To create an optimized production build:
```bash
npm run build
```

---

## 🎨 Color Palette & Design System

- **Dark Navy**: `#101827` (Header, Hero, Footer, High-contrast cards)
- **Accent Blue**: `#3B82F6` (Action buttons, brand indicators, focus rings)
- **Light Grey**: `#F3F5F8` (Page canvas, background sections)
- **Pure White**: `#FFFFFF` (Card surfaces, clean readability)
- **Typography**: Plus Jakarta Sans & Space Grotesk

---

## 📁 Project Architecture

```
Certificate/
├── index.html                  # HTML entry point with SEO metadata
├── vite.config.js              # Vite + Tailwind v4 config
├── package.json                # Dependencies and build scripts
├── public/
│   └── assets/                 # Profile photos, certificate scans & letters
│       ├── mohit.jpg
│       ├── kpmg-lean-six-sigma.png
│       ├── hcl-business-analytics.jpg
│       ├── iim-sirmaur-immersion.jpg
│       └── solarworld-internship-letter.jpg
└── src/
    ├── main.jsx                # Application root mount
    ├── App.jsx                 # Main layout & modal controller
    ├── index.css               # Tailwind CSS v4 styling & theme
    ├── data/
    │   └── portfolioData.js    # ⭐️ SINGLE SOURCE OF TRUTH (All data lives here!)
    └── components/
        ├── Navbar.jsx          # Sticky header with active scrollspy
        ├── Hero.jsx            # Executive hero section with portrait & CTAs
        ├── About.jsx           # Tech + MBA narrative & 8 core interest pillars
        ├── Experience.jsx      # 3 internship cards & document preview
        ├── Education.jsx       # Academic timeline (MBA, B.Tech, HSC, SSC)
        ├── Certifications.jsx  # Certificate gallery with view/download
        ├── CertificateModal.jsx# Fullscreen zoomable certificate viewer
        ├── Research.jsx        # Bioeconomy AI + IoT framework showcase
        ├── Skills.jsx          # Categorized competency matrix with filter tabs
        ├── Contact.jsx         # Direct contact channels & interactive form
        ├── Footer.jsx          # Professional branding & quick links
        └── Icons.jsx           # Clean SVG icons
```

---

## 📝 How to Update Your Website in the Future

The entire site is configured to be updated **without editing any React JSX code**. Everything is centralized in:
👉 `src/data/portfolioData.js`

### 1. Replacing Your Photograph
1. Save your new photo as `public/assets/mohit.jpg` (or any filename).
2. If using a different filename, open `src/data/portfolioData.js` and update:
   ```javascript
   export const personalInfo = {
     ...
     profileImage: "/assets/your-new-photo.jpg",
   };
   ```

### 2. Adding or Replacing a Resume PDF
1. Place your resume PDF in `public/assets/resume.pdf`.
2. In `src/data/portfolioData.js`, update:
   ```javascript
   resumePath: "/assets/resume.pdf",
   ```

### 3. Uploading New Internship Experience or Certificates
To add a new certificate:
1. Place the certificate image (PNG or JPG) into `public/assets/`.
2. Open `src/data/portfolioData.js` and add a new item to `certificatesList`:
   ```javascript
   {
     id: "new-certificate-id",
     title: "Name of Your Certificate",
     issuer: "Issuing Organization",
     date: "Month Year",
     duration: "Program Duration",
     credentialId: "Verification ID or Serial Number",
     image: "/assets/your-certificate-file.png",
     downloadUrl: "/assets/your-certificate-file.png",
     description: "Summary of the certification...",
     highlights: [
       "Key accomplishment or module 1",
       "Key accomplishment or module 2"
     ]
   }
   ```
The new certificate card, preview thumbnail, high-resolution modal viewer, and download button will automatically appear!

### 4. Updating Skills, Education, or Contact Info
Simply modify the arrays in `src/data/portfolioData.js`:
- `skillsCategories`
- `educationList`
- `personalInfo` (phone, email, LinkedIn, etc.)

---

## 🌐 Instructions for Publishing Online

### Option A: Deploy to Vercel (Recommended - Free & 2 Minutes)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Vercel automatically detects **Vite** as the framework. Click **"Deploy"**.
5. Your portfolio will be live at `https://your-portfolio.vercel.app` with free SSL and custom domain support!

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and drag-and-drop the `dist` folder created by `npm run build`.
2. Or connect your GitHub repo, set Build command to `npm run build` and Publish directory to `dist`.

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "/<repo-name>/"` in `vite.config.js`.
3. Run `npm run build` and deploy to the `gh-pages` branch.
