# Deployment Guide to Vercel

This guide will help you deploy your portfolio to Vercel.

## Changes Made ✅

1. ✅ Removed duplicate `globals.css` from styles directory
2. ✅ Fixed `next.config.mjs` - removed `ignoreBuildErrors` and `unoptimized` flags
3. ✅ Enhanced `layout.tsx` with proper font variables
4. ✅ Added comprehensive SEO metadata (OpenGraph, Twitter cards, etc.)
5. ✅ Replaced `<img>` with Next.js `Image` component for optimization
6. ✅ Created ESLint configuration for code quality
7. ✅ Initialized Git repository and committed all changes

## Prerequisites

- Node.js 18+ installed
- pnpm, npm, or yarn package manager
- Vercel account (free tier is fine)
- GitHub account (recommended)

## Step 1: Install Dependencies

```bash
cd /Users/nishanth/VibeCoding/nishanth-profile
pnpm install
# or: npm install
# or: yarn install
```

## Step 2: Test Build Locally

Before deploying, ensure everything builds correctly:

```bash
pnpm build
# or: npm run build
# or: yarn build
```

If the build succeeds, you're ready to deploy!

## Step 3: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

### Option B: Using GitHub + Vercel Dashboard (Easier)

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch will auto-deploy to production
   - Pull requests will create preview deployments

## Step 4: Configure Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain (e.g., `nishanththomas.com`)
4. Follow the DNS configuration instructions

## Environment Variables

If you need environment variables:

1. Create a `.env.local` file (already in `.gitignore`)
2. Add variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```
3. In Vercel Dashboard, go to Settings → Environment Variables
4. Add the same variables

## Post-Deployment Checklist

- [ ] Verify the site loads correctly
- [ ] Test responsive design on mobile
- [ ] Check all links work
- [ ] Verify images load properly
- [ ] Test SEO metadata with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test SEO metadata with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Set up analytics (Vercel Analytics is already integrated)

## Troubleshooting

### Build Fails

If the build fails, check:
- All dependencies are installed
- TypeScript errors are resolved
- No missing files or broken imports

### Images Not Loading

- Ensure images are in the `/public` directory
- Check file names match exactly (case-sensitive)

### Deployment Fails

- Verify you have the latest Next.js version
- Check Vercel build logs for specific errors
- Ensure `package.json` scripts are correct

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs

---

**Your portfolio is now ready for deployment! 🚀**

