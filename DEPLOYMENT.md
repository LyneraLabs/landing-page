# Deployment Guide

This guide provides detailed instructions for deploying the Lynera landing page to Vercel.

## Quick Deploy to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to your Vercel account:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **lynera-landing-page**
   - In which directory is your code located? **./**
   - Want to modify settings? **N**

5. For production deployment:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard (Recommended)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click **"Add New..."** → **"Project"**

4. Import your GitHub repository:
   - Select your repository from the list
   - If not visible, click "Adjust GitHub App Permissions"

5. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: .next (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. Click **"Deploy"**

7. Wait for deployment to complete (usually 1-2 minutes)

8. Your site will be live at: `https://your-project-name.vercel.app`

## Custom Domain Setup

After deploying, you can add a custom domain:

1. Go to your project in Vercel dashboard

2. Navigate to **Settings** → **Domains**

3. Add your domain:
   - Enter your domain name (e.g., `lynera.com`)
   - Click **"Add"**

4. Configure DNS:
   - Add the provided DNS records to your domain registrar
   - For root domain: Add A record pointing to `76.76.21.21`
   - For www: Add CNAME record pointing to `cname.vercel-dns.com`

5. Wait for DNS propagation (can take up to 48 hours)

## Environment Variables

This project doesn't require any environment variables by default. If you add features that need environment variables in the future:

1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy for changes to take effect

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the main branch to production
- Deploy pull requests to preview URLs
- Run builds and tests before deploying

## Build Settings

Default settings (already configured):
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Performance Optimizations

The landing page is already optimized for performance:
- ✅ Static Site Generation (SSG)
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Minified CSS and JavaScript
- ✅ Edge caching

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## Monitoring

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Navigate to **Analytics** tab
3. View:
   - Page views
   - Top pages
   - Top referrers
   - Unique visitors

## Troubleshooting

### Build Failed

Check the build logs in Vercel dashboard:
1. Go to **Deployments**
2. Click on the failed deployment
3. Review the build logs
4. Common issues:
   - Missing dependencies: Run `npm install` locally first
   - TypeScript errors: Run `npm run build` locally to catch errors
   - ESLint errors: Run `npm run lint` locally to fix

### Site Not Updating

1. Check if the deployment was successful in Vercel dashboard
2. Clear your browser cache
3. Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. Check if you're viewing a preview URL instead of production URL

### Domain Not Working

1. Verify DNS records are correctly configured
2. Wait for DNS propagation (up to 48 hours)
3. Check domain status in Vercel dashboard
4. Ensure no conflicting DNS records exist

## Rollback

To rollback to a previous version:
1. Go to **Deployments**
2. Find the working deployment
3. Click on the three dots menu
4. Select **"Promote to Production"**

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Report issues in the repository

---

**Note**: Make sure to replace the placeholder logo (`/public/logo.svg`) with your actual logo before deploying to production!
