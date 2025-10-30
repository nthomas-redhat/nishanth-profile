# Quick Deploy to nishanththomas.vercel.app

## Step-by-Step Guide

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository:
   - Repository name: `nishanth-profile` (or any name you prefer)
   - Description: "Professional portfolio showcasing engineering leadership"
   - Set to **Public** or **Private** (your choice)
   - **DO NOT** initialize with README (we already have files)
3. Click "Create repository"

### Step 2: Push to GitHub

Run these commands in your terminal:

```bash
cd /Users/nishanth/VibeCoding/nishanth-profile

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nishanth-profile.git

# Push your code
git push -u origin main
```

**Example:**
```bash
# If your GitHub username is "nishanththomas"
git remote add origin https://github.com/nishanththomas/nishanth-profile.git
git push -u origin main
```

### Step 3: Connect to Vercel

#### Option A: If You Already Have a Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your existing project that uses `nishanththomas.vercel.app`
3. Go to **Settings** → **Git**
4. Click **Connect Git Repository**
5. Select your GitHub repository
6. Click **Connect**
7. Vercel will automatically deploy

#### Option B: If Creating New Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. After deployment:
   - Go to **Settings** → **Domains**
   - If `nishanththomas.vercel.app` isn't already assigned, add it
   - Remove any default `.vercel.app` domain if needed

### Step 4: Verify Deployment

Once deployed, your site will be live at:
- 🌐 **https://nishanththomas.vercel.app**

Vercel will automatically:
- ✅ Build your Next.js app
- ✅ Optimize images
- ✅ Deploy to CDN
- ✅ Enable HTTPS
- ✅ Set up automatic deployments on git push

### Step 5: Future Updates

Every time you push to GitHub, Vercel will automatically redeploy:

```bash
# Make changes to your code
git add .
git commit -m "Your commit message"
git push
```

Vercel will:
1. Detect the push
2. Build your app
3. Deploy to production
4. Update `nishanththomas.vercel.app`

---

## Quick Reference Commands

```bash
# Check current git status
git status

# View commit history
git log --oneline

# Push changes to GitHub
git add .
git commit -m "Update: description of changes"
git push

# View remote URL
git remote -v
```

---

## Troubleshooting

### Issue: "Repository not found" when pushing
**Solution:** Make sure you created the GitHub repository and replaced `YOUR_USERNAME` with your actual GitHub username.

### Issue: "Permission denied"
**Solution:** You may need to authenticate. Use GitHub CLI or set up SSH keys:
```bash
gh auth login
# Or use personal access token
```

### Issue: Vercel build fails
**Solution:** Check the build logs in Vercel Dashboard. Common issues:
- Missing environment variables
- Node.js version mismatch (use Node 18+)

### Issue: Want to use different domain
**Solution:** In Vercel Dashboard:
1. Go to project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration steps

---

## What Happens Next?

1. **Push to main branch** → Automatic production deployment
2. **Create pull request** → Automatic preview deployment
3. **Merge PR** → Automatic production deployment

You'll get a unique preview URL for every PR to test changes before merging!

---

**Ready to deploy! 🚀**

