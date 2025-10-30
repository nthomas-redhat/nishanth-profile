# Push to GitHub - Step by Step

Your Git remote is already configured to: `https://github.com/nthomas-redhat/nishanth-profile.git`

## Step 1: Create GitHub Repository (If Not Already Created)

1. Go to: https://github.com/new
2. Repository name: `nishanth-profile`
3. Set to **Public** or **Private** (your choice)
4. **Important:** Do NOT check "Initialize with README"
5. Click **"Create repository"**

## Step 2: Push Your Code

Open your terminal and run:

```bash
cd /Users/nishanth/VibeCoding/nishanth-profile

# Push to GitHub (will ask for authentication)
git push -u origin main
```

### Authentication Options:

#### Option A: Using GitHub CLI (Recommended - Easiest)
```bash
# Install GitHub CLI if not installed
brew install gh

# Login
gh auth login

# Then push
git push -u origin main
```

#### Option B: Using Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Give it a name (e.g., "Nishanth Profile Deploy")
4. Select scopes: **repo** (all checkboxes)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)

Then push:
```bash
git push -u origin main
# Username: nthomas-redhat
# Password: [paste your token here]
```

#### Option C: Using SSH (Most Secure)
```bash
# Generate SSH key if you don't have one
ssh-keygen -t ed25519 -C "nishusemail@gmail.com"

# Copy your public key
cat ~/.ssh/id_ed25519.pub

# Add it to GitHub:
# Go to: https://github.com/settings/ssh/new
# Paste the key and save

# Change remote to use SSH
git remote set-url origin git@github.com:nthomas-redhat/nishanth-profile.git

# Push
git push -u origin main
```

## Step 3: Verify on GitHub

After pushing, visit:
https://github.com/nthomas-redhat/nishanth-profile

You should see all your files!

## Step 4: Connect to Vercel

Now that your code is on GitHub:

### Method 1: Connect Existing Vercel Project
1. Go to: https://vercel.com/dashboard
2. Find your project that uses `nishanththomas.vercel.app`
3. Click on it
4. Go to **Settings** → **Git**
5. Click **"Connect Git Repository"**
6. Select: `nthomas-redhat/nishanth-profile`
7. Click **"Connect"**

### Method 2: Create New Vercel Project
1. Go to: https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Find `nthomas-redhat/nishanth-profile` in the list
4. Click **"Import"**
5. Vercel auto-detects Next.js - click **"Deploy"**
6. After deployment:
   - Go to **Settings** → **Domains**
   - Add `nishanththomas.vercel.app`
   - Remove any default domains if needed

## Step 5: Success! 🎉

Once connected:
- ✅ Every `git push` will auto-deploy to `nishanththomas.vercel.app`
- ✅ Pull requests get preview URLs
- ✅ See build logs in real-time
- ✅ Automatic HTTPS and CDN

## Future Updates

To update your site:
```bash
cd /Users/nishanth/VibeCoding/nishanth-profile

# Make your changes, then:
git add .
git commit -m "Update: describe your changes"
git push

# Vercel automatically deploys!
```

## Quick Reference

```bash
# Check status
git status

# View commits
git log --oneline

# View remote
git remote -v

# Push changes
git push
```

---

**Next command to run:**
```bash
cd /Users/nishanth/VibeCoding/nishanth-profile
git push -u origin main
```

Choose your authentication method above and you're ready to deploy! 🚀

