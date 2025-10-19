# Pratardan Portfolio

A modern, interactive, and responsive portfolio website built with React.js and Tailwind CSS, featuring animated UI components inspired by [reactbits.dev](https://reactbits.dev).

## Features

- ✨ **Animated UI Components** - Custom animated components inspired by reactbits.dev
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean and professional design with smooth animations
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🎯 **Interactive Elements** - Engaging user interactions with smooth transitions
- 📧 **Contact Form** - Functional contact form with validation
- 🌓 **Dark Mode Support** - Beautiful dark mode styling included

## Sections

- **Hero** - Introduction with floating avatar and call-to-action buttons
- **About** - Personal information and what I do
- **Skills** - Technical skills organized by category with progress bars
- **Projects** - Showcase of featured projects with descriptions and links
- **Contact** - Contact form and information
- **Footer** - Social links and copyright information

## Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom Animations** - Fade-in, slide-up, floating elements, and gradient effects

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Retr0557/pratardan_portfolio.git
cd pratardan_portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
pratardan_portfolio/
├── src/
│   ├── components/
│   │   ├── animated/        # Reusable animated components
│   │   │   ├── FadeIn.jsx
│   │   │   ├── GlowCard.jsx
│   │   │   ├── AnimatedButton.jsx
│   │   │   ├── FloatingElement.jsx
│   │   │   └── GradientText.jsx
│   │   └── sections/        # Page sections
│   │       ├── Header.jsx
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Contact.jsx
│   │       └── Footer.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles and Tailwind setup
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies

```

## Customization

### Colors

The primary color scheme can be customized in `src/index.css` using CSS variables in the `@theme` block.

### Content

Update the content in each section component located in `src/components/sections/` to personalize your portfolio.

### Projects

Edit the projects array in `src/components/sections/Projects.jsx` to showcase your own projects.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Pratardan**
- GitHub: [@Retr0557](https://github.com/Retr0557)

---

Built with ❤️ using React.js and Tailwind CSS
