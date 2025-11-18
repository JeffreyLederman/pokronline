# Portfolio Website

A modern, responsive portfolio website built with React and deployed on GitHub Pages.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections Included**:
  - Hero/Landing section
  - About Me
  - Projects showcase
  - Skills with progress bars
  - Resume/Experience timeline
  - Contact form

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/pokronline.git
cd pokronline
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Deployment

### Initial Setup

1. Follow the instructions in `GITHUB_PAGES_SETUP.md` to set up your GitHub repository and Pages.

2. Ensure `vite.config.js` has the correct base path:
   - The `base` path should match your repository name: `base: '/pokronline/'`
   - Replace 'pokronline' with your actual repository name if different

### Deploy to GitHub Pages

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your React app
2. Deploy it to the `gh-pages` branch
3. Make it available at: `https://YOUR_USERNAME.github.io/pokronline/`

## Customization

### Update Content

- **About Section**: Edit `src/components/About.jsx`
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.jsx`
- **Resume**: Edit `experiences` and `education` arrays in `src/components/Resume.jsx`
- **Contact**: Update contact information in `src/components/Contact.jsx`

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Each component has its own CSS file
- Color scheme: Update CSS variables in `src/index.css` (`:root`)

### Add Your Photo

Replace the placeholder in `src/components/About.jsx`:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="about-image" />
```

## Project Structure

```
pokronline/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- Vite
- CSS3 (Custom properties, Grid, Flexbox)
- GitHub Actions
- GitHub Pages

## License

This project is open source and available under the MIT License.

