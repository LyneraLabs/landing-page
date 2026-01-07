# Lynera Landing Page

A modern, minimalistic landing page for Lynera - an umbrella company creating innovative technology solutions.

## 🚀 Features

- **Dark Mode Design**: Clean, minimalistic dark theme
- **Responsive Layout**: Works seamlessly on all devices
- **Multiple Pages**:
  - Home: Hero section with features and call-to-action
  - Staff/Developers: Team showcase with interactive profile cards
  - Products: Featured products with detailed information
  - About Us: Company mission, values, and vision
- **Fast & Optimized**: Built with Next.js 16+ for optimal performance
- **Vercel-Ready**: Deploy to Vercel with zero configuration

## 📦 Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Replace the Logo

Replace the placeholder logo with your own:

1. Add your logo file to the `/public` directory
2. Name it `logo.svg` or `logo.png` (update references in the code if using .png)
3. Recommended size: 200x200px or larger

The logo is used in:
- `/components/Navigation.tsx` (line 24)

### 2. Edit Staff/Developer Profiles

Edit team members in `/app/staff/page.tsx`:

```typescript
const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio description',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourhandle',
  },
  // Add more team members...
];
```

**Fields:**
- `id`: Unique identifier (number)
- `name`: Full name
- `role`: Job title or role
- `bio`: Short biography (2-3 sentences)
- `skills`: Array of skills/technologies
- `github`, `linkedin`, `twitter`: Social media links (optional, use '#' to hide)

### 3. Add or Edit Products

Edit products in `/app/products/page.tsx`:

```typescript
const products: Product[] = [
  {
    id: 1,
    name: 'Product Name',
    description: 'Short description',
    longDescription: 'Detailed description of the product',
    status: 'Released', // or 'Beta' or 'Coming Soon'
    url: 'https://github.com/username/repo',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
  // Add more products...
];
```

**Status Colors:**
- `Released`: Green badge
- `Beta`: Yellow badge
- `Coming Soon`: Blue badge

### 4. Update Company Information

Edit the About Us page in `/app/about/page.tsx`:

- **Mission Statement**: Lines 20-28
- **Values**: Lines 34-111 (4 value cards)
- **What We Do**: Lines 116-132

### 5. Customize Colors

The color scheme is defined in `/app/globals.css`:

```css
:root {
  --background: #0a0a0a;        /* Main background */
  --foreground: #ededed;         /* Text color */
  --card-background: #1a1a1a;   /* Card backgrounds */
  --border: #2a2a2a;            /* Border color */
  --hover: #252525;             /* Hover states */
}
```

### 6. Update Metadata

Edit site metadata in `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
};
```

## 📄 Adding New Pages

1. Create a new directory in `/app`:
```bash
mkdir app/newpage
```

2. Create a `page.tsx` file:
```typescript
export default function NewPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">New Page</h1>
        {/* Your content */}
      </section>
    </main>
  );
}
```

3. Add the link to navigation in `/components/Navigation.tsx`:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/staff', label: 'Staff/Developers' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/newpage', label: 'New Page' }, // Add this
];
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js configuration
- Install dependencies
- Build the project
- Deploy to a production URL

### Environment Variables

No environment variables are required for basic functionality.

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── products/
│   │   └── page.tsx          # Products page
│   ├── staff/
│   │   └── page.tsx          # Staff/Developers page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Home page
├── components/
│   └── Navigation.tsx        # Navigation bar component
├── public/
│   ├── logo.svg              # Company logo (replace this!)
│   └── favicon.ico           # Site favicon
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
└── next.config.ts            # Next.js config
```

## 🎨 Design System

### Typography
- Headings: `text-5xl font-bold` for h1, `text-3xl font-bold` for h2
- Body: `text-lg text-gray-300` for regular text
- Muted: `text-gray-400` for secondary text

### Spacing
- Sections: `py-20` (5rem vertical padding)
- Cards: `p-8` (2rem padding)
- Gaps: `gap-6` or `gap-8` between elements

### Components
- Cards: `bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]`
- Buttons: `px-8 py-3 rounded-lg font-medium`
- Hover: `hover:border-[#3a3a3a] transition-colors`

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Grid layouts automatically adjust:
- `grid md:grid-cols-2 lg:grid-cols-3` - 1 column on mobile, 2 on tablet, 3 on desktop

## 🆘 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Image not loading
- Ensure `logo.svg` is in the `/public` directory
- Check the file name matches exactly (case-sensitive)

## 📄 License

This project is private and proprietary to Lynera.

## 🤝 Contributing

This is a private repository. For internal contributions:
1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Wait for review

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Built with ❤️ by the Lynera team**
