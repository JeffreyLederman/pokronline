# Quick Deployment Guide

## First Time Setup

1. **Create GitHub Repository** (if not done yet)
   - Go to https://github.com/new
   - Repository name: `pokronline` (or your preferred name)
   - Make it **Public** (required for free GitHub Pages)
   - Click "Create repository"

2. **Initialize Git and Push**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pokronline.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select:
     - Branch: `gh-pages`
     - Folder: `/ (root)`
   - Click **Save**

4. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy
   - Check the **Actions** tab in your repository to see the deployment progress
   - Your site will be available at: `https://YOUR_USERNAME.github.io/pokronline/`

## Deploying Updates

After the initial setup, deploying updates is simple:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

The GitHub Actions workflow will automatically:
- Build your React app
- Deploy to GitHub Pages
- Make it live within 1-2 minutes

## Custom Domain Setup (pokronline.com)

1. **Add Custom Domain in GitHub**
   - Go to repository **Settings** → **Pages**
   - Under "Custom domain", enter: `pokronline.com`
   - Click **Save**

2. **Configure DNS at Your Domain Registrar**
   
   Add these DNS records where you bought pokronline.com:

   **Option A: A Records (IPv4)**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **Option B: CNAME Record (Easier)**
   ```
   Type: CNAME
   Name: @
   Value: YOUR_USERNAME.github.io
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

3. **Update Vite Config**
   - Open `vite.config.js`
   - Change `base: '/pokronline/'` to `base: '/'`
   - Commit and push the change

4. **Wait for DNS Propagation**
   - Can take up to 48 hours
   - Check DNS propagation: https://www.whatsmydns.net

## Troubleshooting

### Site Not Updating
- Check GitHub Actions tab for build errors
- Ensure `vite.config.js` has correct `base` path
- Clear browser cache

### 404 Errors
- Verify the `base` path in `vite.config.js` matches your repository name
- For custom domain, use `base: '/'`
- For GitHub Pages subpath, use `base: '/repository-name/'`

### Build Failures
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Try running `npm install` and `npm run build` locally

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

