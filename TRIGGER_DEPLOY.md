# Trigger Deployment to nishanththomas.vercel.app

## 🚀 Option 1: Deploy via Vercel CLI (Quickest)

### Install Vercel CLI
```bash
npm install -g vercel
# or
pnpm add -g vercel
```

### Deploy to Production
```bash
cd /Users/nishanth/VibeCoding/nishanth-profile

# Login to Vercel
vercel login

# Link to your existing project
vercel link

# When prompted:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? Yes
# - What's the name? Type: nishanththomas (or your project name)

# Deploy to production
vercel --prod
```

This will:
- Build your app
- Deploy to `nishanththomas.vercel.app`
- Show you the deployment URL

---

## 🔗 Option 2: Connect GitHub and Auto-Deploy (Best for Long-term)

### Step 1: Verify GitHub Push
Check if your code is on GitHub:
```bash
# Check remote status
git remote -v

# If you haven't pushed yet:
git push -u origin main
```

Visit: https://github.com/nthomas-redhat/nishanth-profile

### Step 2: Connect GitHub to Vercel

#### If You Have an Existing Vercel Project:
1. Go to https://vercel.com/dashboard
2. Click on your project (the one using `nishanththomas.vercel.app`)
3. Go to **Settings** → **Git**
4. Click **"Connect Git Repository"**
5. Select: `nthomas-redhat/nishanth-profile`
6. Click **"Connect"**
7. ✨ Vercel will automatically deploy!

#### If Creating a New Project:
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Find `nthomas-redhat/nishanth-profile`
4. Click **"Import"**
5. Vercel auto-detects Next.js
6. Click **"Deploy"**
7. After deployment:
   - Go to **Settings** → **Domains**
   - Remove the auto-generated domain
   - Add: `nishanththomas.vercel.app`

Once connected, every `git push` will auto-deploy! 🎉

---

## 🖱️ Option 3: Manual Deploy via Vercel Dashboard

If GitHub is already connected:

1. Go to https://vercel.com/dashboard
2. Click on your project
3. Go to the **"Deployments"** tab
4. Click **"Redeploy"** on the latest deployment
5. Click **"Redeploy"** again to confirm

---

## 📦 Option 4: Import Existing Project (If Not Connected)

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Paste: `https://github.com/nthomas-redhat/nishanth-profile`
4. Click **"Import"**
5. Vercel detects Next.js automatically
6. Click **"Deploy"**
7. Configure domain:
   - Settings → Domains
   - Add `nishanththomas.vercel.app`

---

## ✅ Verify Deployment

After deployment completes:
1. Visit: https://nishanththomas.vercel.app
2. Check Vercel dashboard for build logs
3. Verify all sections load correctly
4. Test responsive design on mobile

---

## 🔄 Future Deployments

Once GitHub is connected:
```bash
# Make changes
git add .
git commit -m "Update: your changes"
git push

# Vercel automatically deploys! ✨
```

You'll get:
- Real-time build logs
- Preview URLs for branches
- Automatic rollback if needed
- Production analytics

---

## 🎯 Recommended: Use Option 2 (GitHub Connection)

**Why?**
- ✅ Automatic deployments on push
- ✅ Preview deployments for PRs
- ✅ Easy rollbacks
- ✅ Team collaboration friendly
- ✅ Build logs and analytics

**Quick Start:**
```bash
# Ensure code is on GitHub
git push -u origin main

# Then connect on Vercel dashboard
# Settings → Git → Connect Repository
```

---

## Need Help?

**Check deployment status:**
```bash
vercel ls
```

**View deployment logs:**
Go to: https://vercel.com/dashboard → Your Project → Deployments → View logs

**Rollback if needed:**
Vercel Dashboard → Deployments → Click older deployment → "Promote to Production"

---

**Ready to deploy! Choose your preferred method above. 🚀**

