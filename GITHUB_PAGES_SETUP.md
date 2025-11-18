# GitHub Pages Setup Guide

Follow these steps to set up your portfolio website on GitHub Pages:

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right, then select "New repository"
3. Repository name: `pokronline` (or your preferred name)
4. Description: "Student Portfolio Website"
5. Set visibility: **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we'll add these)
7. Click "Create repository"

## Step 2: Get Your Repository URL

After creating the repository, GitHub will show you the repository URL. It will look like:

- `https://github.com/YOUR_USERNAME/pokronline.git`

**Copy this URL** - you'll need it in the next steps.

## Step 3: Configure GitHub Pages Settings

1. In your repository, go to **Settings** (top menu)
2. Scroll down to **Pages** (left sidebar)
3. Under "Source", select:
   - **Source**: `GitHub Actions` (this uses the workflow to deploy automatically)
4. Click **Save**

   **Note:** With GitHub Actions deployment, no `gh-pages` branch is needed. The workflow handles everything automatically.

## Step 4: Initialize Local Repository

After the React project is created, run these commands:

```bash
# Initialize git (if not already done)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/pokronline.git

# Replace YOUR_USERNAME with your actual GitHub username
```

## Step 5: First Deployment

After setting up the project, you'll deploy with:

```bash
# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Push to main branch
git push -u origin main
```

The GitHub Actions workflow will automatically build and deploy your site.

## Step 6: Verify Deployment

After the workflow completes (usually 1-2 minutes):

- Visit `https://YOUR_USERNAME.github.io/pokronline/` to see your portfolio
- Check the **Actions** tab in your repository to monitor deployment status

---

**Note:** After the project is set up, you'll be able to deploy updates with a simple `git push` command!
