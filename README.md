# Lynera Landing Page

A modern, sleek landing page built with Next.js featuring a dark theme with beautiful purple gradients. This landing page showcases Lynera as an umbrella company with its flagship product EngX.

![Home Page](https://github.com/user-attachments/assets/8c2c925a-477d-4de1-b09f-d342e01d37bc)

## 🚀 Features

- **Modern Dark Theme**: Stunning dark mode with purple as the primary color
- **Purple Gradients**: Beautiful gradient effects throughout the site
- **Fully Responsive**: Works seamlessly across all devices
- **4 Main Pages**: Home, Products, Staff, and About Us
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **SEO Optimized**: Built-in meta tags for better search engine visibility
- **Vercel Ready**: Optimized for deployment on Vercel

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LyneraLabs/landing-page.git
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
landing-page/
├── app/                      # Next.js App Router pages
│   ├── about/               # About Us page
│   │   └── page.tsx
│   ├── products/            # Products page
│   │   └── page.tsx
│   ├── staff/               # Staff/Team page
│   │   └── page.tsx
│   ├── globals.css          # Global styles and purple theme
│   ├── layout.tsx           # Root layout with navigation
│   └── page.tsx             # Home page
├── components/              # React components
│   └── Navigation.tsx       # Navigation bar component
├── resources/               # Static resources
│   └── assets/             # Images and assets
│       └── .gitkeep        # Placeholder for logo.png
├── public/                  # Public static files
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration (if exists)
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with compelling headline
- Overview of Lynera's mission
- Call-to-action buttons
- Feature highlights
- Smooth animations

### Products Page (`/products`)
- **EngX Featured Prominently**: Flagship product with dedicated section
- Link to [EngX GitHub Repository](https://github.com/ZachG05/new-engx)
- Detailed feature list
- Placeholder cards for future products
- Modern card-based layout

### Staff Page (`/staff`)
- Interactive team member cards
- **Clickable/Expandable Cards**: Click to reveal full profile details
- Placeholder team members (CEO, Lead Developer, etc.)
- Skills and social links
- Professional layout with smooth transitions

### About Us Page (`/about`)
- Company mission and vision
- Information about Lynera as an umbrella company
- Core values section
- What makes Lynera unique
- Call-to-action sections

## 🎨 Customization Guide

### Updating the Logo

1. Place your logo file in the `resources/assets/` directory:
   - Recommended filename: `logo.png`
   - Recommended size: 200x200px or larger
   - Format: PNG with transparent background

2. Update the Navigation component (`components/Navigation.tsx`):
```tsx
// Replace the placeholder logo with an image
<Link href="/" className="flex items-center space-x-2">
  <Image 
    src="/resources/assets/logo.png" 
    alt="Lynera Logo" 
    width={40} 
    height={40} 
  />
  <span className="text-xl font-bold text-white">Lynera</span>
</Link>
```

### Changing Colors/Theme

The purple theme is defined in `app/globals.css`. To customize:

```css
:root {
  --background: #0a0a0f;           /* Dark background */
  --foreground: #ededed;           /* Text color */
  --primary-purple: #8b5cf6;       /* Main purple */
  --secondary-purple: #a78bfa;     /* Light purple */
  --dark-purple: #6d28d9;          /* Dark purple */
}
```

**Gradient utilities** are also available:
- `.gradient-purple` - Main gradient
- `.gradient-purple-light` - Light gradient
- `.gradient-purple-dark` - Dark gradient

To change to a different color scheme, update these variables and the gradient definitions.

### Adding New Team Members

Edit `app/staff/page.tsx` and add to the `teamMembers` array:

```tsx
{
  id: 7,
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Your bio description',
  avatar: '👤',  // Choose an emoji or use an image
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
}
```

### Adding New Products

Edit `app/products/page.tsx`:

1. **For a featured product**, update the EngX card section
2. **For additional products**, add new cards in the "Coming Soon" section:

```tsx
<div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-violet-900/10 border border-purple-500/20">
  <div className="w-16 h-16 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
    {/* Your icon */}
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">Product Name</h3>
  <p className="text-gray-400 mb-4">Product description</p>
  <span className="text-purple-400 text-sm font-semibold">Status</span>
</div>
```

## 📝 Adding New Pages

1. Create a new directory in the `app` folder:
```bash
mkdir app/your-new-page
```

2. Create a `page.tsx` file:
```tsx
export const metadata = {
  title: 'Your Page Title - Lynera',
  description: 'Your page description',
};

export default function YourPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Your content */}
    </div>
  );
}
```

3. Add the route to navigation (`components/Navigation.tsx`):
```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/staff', label: 'Staff' },
  { href: '/about', label: 'About Us' },
  { href: '/your-new-page', label: 'Your Page' }, // Add this
];
```

## ✏️ Editing Existing Pages

### Home Page
- Edit `app/page.tsx`
- Update hero headline, overview sections, or CTA buttons
- Modify the feature cards in the "What We Do" section

### Products Page
- Edit `app/products/page.tsx`
- Update EngX description and features
- Add/remove placeholder product cards
- Modify the GitHub link

### Staff Page
- Edit `app/staff/page.tsx`
- Update the `teamMembers` array with actual team data
- Modify card styling or layout

### About Us Page
- Edit `app/about/page.tsx`
- Update mission and vision statements
- Modify core values and unique features sections

## 🚀 Deployment

### Deploying to Vercel

1. **Push your code to GitHub** (if not already done)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a live URL (e.g., `your-site.vercel.app`)

4. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Environment Variables

If you need environment variables:

1. Create a `.env.local` file (not committed to Git):
```bash
NEXT_PUBLIC_API_URL=your_api_url
```

2. Add to Vercel:
   - Go to Project Settings → Environment Variables
   - Add your variables

## 🎯 Best Practices

### Code Organization

- **Components**: Create reusable components in the `components/` directory
- **Styles**: Use Tailwind CSS utility classes for consistency
- **Pages**: Keep page components in the `app/` directory following App Router structure
- **Assets**: Store images and assets in `resources/assets/` or `public/`

### Performance

- **Images**: Use Next.js `<Image>` component for automatic optimization
- **Lazy Loading**: Components below the fold are automatically lazy loaded
- **Code Splitting**: Next.js automatically splits code per route

### Maintenance

- **Regular Updates**: Keep Next.js and dependencies up to date
- **Testing**: Test on multiple devices and browsers
- **Accessibility**: Ensure proper semantic HTML and ARIA labels
- **SEO**: Update metadata for each page in their respective `page.tsx` files

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses:
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Purple theme and animations in `globals.css`
- **CSS Variables** - For easy theme customization

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

When contributing to this project:

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly on multiple devices
4. Submit a pull request with a clear description

## 📄 License

This project is part of Lynera Labs. All rights reserved.

## 💬 Support

For questions or support, contact the Lynera team or open an issue on GitHub.

---

**Built with ❤️ by the Lynera Team**
