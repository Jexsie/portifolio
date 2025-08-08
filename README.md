# Jessy Ssebuliba - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my work as a frontend developer and open-source contributor.

## 🚀 Features

- **Static Site Generation**: Optimized for performance and SEO
- **Responsive Design**: Works perfectly on all devices
- **Blog System**: Technical articles and insights
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- **GitHub Pages Ready**: Configured for seamless deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/jessyssebuliba/portfolio-site.git
cd portfolio-site
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork/Clone this repository**

2. **Update the repository name** in `next.config.mjs`:
   \`\`\`javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   \`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

4. **Update URLs** in the following files:
   - `app/sitemap.ts`
   - `app/robots.ts`
   - `app/layout.tsx`
   - `public/CNAME` (if using custom domain)

5. **Push to main branch** - GitHub Actions will automatically build and deploy

### Custom Domain (Optional):

If you want to use a custom domain:

1. Update the `CNAME` file with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Update all URLs in the configuration files

## 📁 Project Structure

\`\`\`
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   └── projects.tsx
├── public/
│   ├── .nojekyll
│   └── CNAME
├── .github/
│   └── workflows/
│       └── deploy.yml
└── next.config.mjs
\`\`\`

## 🔧 Customization

### Personal Information:
- Update personal details in `components/hero.tsx`
- Modify skills and experience in `components/about.tsx`
- Add your projects in `components/projects.tsx`
- Update contact information in `components/contact.tsx`

### Blog Posts:
- Add new blog posts in `app/blog/[slug]/page.tsx`
- Update the blog posts list in `app/blog/page.tsx`
- Add new slugs to `app/sitemap.ts` for SEO

### Styling:
- Customize colors in `tailwind.config.ts`
- Modify global styles in `app/globals.css`

## 📈 SEO Features

- ✅ Meta tags and Open Graph
- ✅ Structured data
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Static site generation

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: jessy.ssebuliba@example.com
- **GitHub**: [@jessyssebuliba](https://github.com/jessyssebuliba)
- **LinkedIn**: [Jessy Ssebuliba](https://linkedin.com/in/jessyssebuliba)

---

Built with ❤️ using Next.js and deployed on GitHub Pages
