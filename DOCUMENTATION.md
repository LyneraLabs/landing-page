# Lynera Landing Page - Technical Documentation

This document provides detailed technical information about the Lynera landing page implementation.

## Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4 via PostCSS)
- **React**: 19.x
- **Node**: 18.x or higher

## Architecture

### Next.js App Router

This project uses the Next.js App Router (introduced in Next.js 13+), which provides:

- File-system based routing
- Server Components by default
- Improved data fetching
- Built-in layouts and templates
- Better code splitting

### Folder Structure Explained

```
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx           # Home page (/)
├── globals.css        # Global styles
├── products/
│   └── page.tsx      # Products page (/products)
├── staff/
│   └── page.tsx      # Staff page (/staff)
└── about/
    └── page.tsx      # About page (/about)
```

Each `page.tsx` file automatically becomes a route based on its directory name.

## Component Architecture

### Navigation Component (`components/Navigation.tsx`)

**Type**: Client Component (uses `'use client'` directive)

**Features**:
- Responsive mobile menu
- Active route highlighting
- Fixed position with backdrop blur
- Hamburger menu for mobile devices

**State Management**:
```tsx
const [isOpen, setIsOpen] = useState(false); // Mobile menu state
```

**Hooks Used**:
- `usePathname()` - Get current route for active link highlighting
- `useState()` - Manage mobile menu state

### Page Components

All pages are **Server Components** by default, except the Staff page which uses client-side state for expandable cards.

## Styling System

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 (PostCSS plugin):

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Custom CSS Variables

Defined in `app/globals.css`:

```css
:root {
  --background: #0a0a0f;
  --foreground: #ededed;
  --primary-purple: #8b5cf6;
  --secondary-purple: #a78bfa;
  --dark-purple: #6d28d9;
}
```

### Custom Utility Classes

**Gradient Classes**:
```css
.gradient-purple {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Animation Classes**:
```css
.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 0.6s ease-out forwards;
}
```

## Page Details

### Home Page (`app/page.tsx`)

**Component Type**: Server Component

**Sections**:
1. **Hero Section**: Full-screen with gradient background and animated elements
2. **Overview Section**: Three feature cards with icons
3. **CTA Section**: Call-to-action buttons
4. **Footer**: Copyright information

**Key Features**:
- Animated background blobs using CSS animations
- Gradient text effects
- Hover animations on cards and buttons
- Responsive grid layout

### Products Page (`app/products/page.tsx`)

**Component Type**: Server Component

**Sections**:
1. **Header**: Page title and description
2. **EngX Section**: Large featured card with "FLAGSHIP PRODUCT" badge
3. **Coming Soon**: Grid of placeholder product cards
4. **CTA Section**: Contact team call-to-action

**EngX Features**:
- External link to GitHub repository
- Feature list with checkmark icons
- Prominent styling with border and gradient background

**Data Structure**:
```tsx
// EngX features are hardcoded
const features = [
  { title: 'Advanced Engineering Tools', description: '...' },
  { title: 'Seamless Integration', description: '...' },
  // ...
];
```

### Staff Page (`app/staff/page.tsx`)

**Component Type**: Client Component (uses state)

**State Management**:
```tsx
const [selectedMember, setSelectedMember] = useState<number | null>(null);
```

**Data Structure**:
```tsx
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}
```

**Interaction**:
- Click on card to expand/collapse
- Smooth transitions using CSS
- Conditional rendering of expanded content
- Social links (LinkedIn, GitHub)

**Placeholder Data**: Currently contains 6 sample team members

### About Page (`app/about/page.tsx`)

**Component Type**: Server Component

**Sections**:
1. **Mission**: Company mission statement
2. **Vision**: Future vision
3. **What Makes Lynera Unique**: 4 feature cards
4. **Core Values**: 3 value cards with emojis
5. **CTA Section**: Join us call-to-action

## SEO Implementation

### Metadata

Each page exports metadata:

```tsx
export const metadata = {
  title: 'Page Title - Lynera',
  description: 'Page description for SEO',
  keywords: ['keyword1', 'keyword2'], // Only on layout
};
```

### Root Layout Metadata

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: "Lynera - Innovative Technology Solutions",
  description: "Lynera is an umbrella company...",
  keywords: ["Lynera", "EngX", "Technology", "Innovation"],
};
```

## Performance Optimizations

### Automatic Optimizations

Next.js provides automatic optimizations:

1. **Code Splitting**: Each page is automatically code-split
2. **Static Generation**: Pages are pre-rendered at build time
3. **Font Optimization**: System fonts used for performance
4. **Image Optimization**: Ready for Next.js Image component

### Build Output

```
Route (app)
├ ○ /              (Static)
├ ○ /about         (Static)
├ ○ /products      (Static)
└ ○ /staff         (Static)

○ (Static) prerendered as static content
```

All pages are pre-rendered as static content for maximum performance.

## Responsive Design Implementation

### Breakpoints

Tailwind CSS default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Common Patterns

**Mobile-first approach**:
```tsx
className="flex-col sm:flex-row" // Stack on mobile, row on tablet+
className="text-xl sm:text-2xl md:text-3xl" // Responsive text
className="grid md:grid-cols-2 lg:grid-cols-3" // Responsive grid
```

**Mobile Menu**:
```tsx
<div className="hidden md:flex"> {/* Desktop menu */}
<div className="md:hidden"> {/* Mobile menu */}
```

## Animation System

### CSS Animations

Defined in `globals.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Usage**:
```tsx
className="animate-fadeIn"
```

### Transition Classes

```tsx
className="transition-all duration-300 transform hover:scale-105"
```

This provides:
- Smooth transitions on all properties
- 300ms duration
- Transform on hover (scale up 5%)

## Deployment Configuration

### Vercel Configuration

The project is optimized for Vercel deployment:

**next.config.ts**:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### Build Process

1. **Development**: `npm run dev` starts Turbopack dev server
2. **Production Build**: `npm run build` creates optimized build
3. **Production Start**: `npm start` runs the production server

### Static Export (Optional)

To create a static export:

```js
// next.config.ts
const nextConfig = {
  output: 'export',
};
```

Then run `npm run build` - this creates an `out/` directory with static files.

## Extending the Application

### Adding a New Page with Dynamic Data

1. **Create the page**:
```tsx
// app/blog/page.tsx
async function getPosts() {
  // Fetch data
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}
```

### Adding Dynamic Routes

```tsx
// app/blog/[slug]/page.tsx
export default async function BlogPost({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}
```

### Creating Reusable Components

```tsx
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary',
  onClick 
}: ButtonProps) {
  return (
    <button 
      className={`px-6 py-3 rounded-lg ${
        variant === 'primary' 
          ? 'gradient-purple text-white' 
          : 'border-2 border-purple-500 text-purple-400'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## TypeScript Configuration

**tsconfig.json** includes:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**Path Aliases**:
- `@/components/Navigation` → `components/Navigation`
- `@/app/globals.css` → `app/globals.css`

## Troubleshooting

### Common Issues

**Issue**: Styles not updating
- **Solution**: Clear `.next` cache: `rm -rf .next && npm run dev`

**Issue**: Build errors
- **Solution**: Check TypeScript errors: `npm run lint`

**Issue**: Mobile menu not working
- **Solution**: Ensure JavaScript is enabled and components are client components when needed

### Development Tips

1. **Use React DevTools**: Install browser extension for debugging
2. **Check Console**: Look for errors in browser console
3. **Hot Reload**: Changes auto-reload in development mode
4. **Type Checking**: TypeScript catches errors before runtime

## Security Considerations

1. **No Secrets in Code**: Never commit API keys or secrets
2. **Environment Variables**: Use `.env.local` for sensitive data
3. **HTTPS**: Always use HTTPS in production
4. **CSP Headers**: Consider adding Content Security Policy headers
5. **Dependencies**: Regularly update dependencies for security patches

## Performance Monitoring

### Lighthouse Scores

Run Lighthouse audit:
```bash
npm run build
npm start
# Open Chrome DevTools → Lighthouse → Generate Report
```

**Target Scores**:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Core Web Vitals

Monitor:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works on all devices
- [ ] Mobile menu opens/closes correctly
- [ ] Staff cards expand/collapse properly
- [ ] All links work correctly
- [ ] Forms submit successfully (if added)
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Works in different browsers

### Browser Compatibility

Tested and working in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Regular Tasks

**Weekly**:
- Check for dependency updates: `npm outdated`
- Review Vercel deployment logs

**Monthly**:
- Update dependencies: `npm update`
- Review and update content
- Check analytics (if implemented)

**Quarterly**:
- Major dependency updates (Next.js, React)
- Performance audit
- Security audit

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

## Support

For technical issues or questions:
1. Check this documentation
2. Review Next.js documentation
3. Open an issue on GitHub
4. Contact the development team

---

**Last Updated**: January 2026
**Version**: 1.0.0
