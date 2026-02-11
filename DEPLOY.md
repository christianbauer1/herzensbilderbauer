# Deploy to GitHub Pages + Custom Domain (herzensbilderbauer.de)

Every **git push** to `main` triggers a build and deploys the site to GitHub Pages.

## 1. Enable GitHub Pages (one-time)

1. Open your repo on GitHub: **Settings** → **Pages** (under "Code and automation").
2. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions**.
3. Save. You don’t need to create a branch or `/docs` folder.

After the first successful run of the **Deploy to GitHub Pages** workflow, the site will be available at:

- **Default:** `https://<your-username>.github.io/herzensbilderbauer/`  
  (or `https://<your-username>.github.io/` if the repo is named `username.github.io`)

---

## 2. Use your custom domain (herzensbilderbauer.de)

### A. Tell GitHub your domain

1. In the same **Settings** → **Pages**.
2. Under **Custom domain**, enter: **herzensbilderbauer.de**
3. Click **Save**.
4. If GitHub shows a **DNS check** or **CNAME** suggestion, leave the tab open; you’ll fix DNS in the next step.

### B. Configure DNS at IONOS

Log in to **IONOS** → your domain **herzensbilderbauer.de** → **DNS** (or "Domain & SSL" → "Manage DNS").

Add/update these records:

| Type      | Name/Host            | Value/Points to             | TTL (optional) |
| --------- | -------------------- | --------------------------- | -------------- |
| **A**     | `@` (or leave empty) | `185.199.108.153`           | 3600           |
| **A**     | `@`                  | `185.199.109.153`           | 3600           |
| **A**     | `@`                  | `185.199.110.153`           | 3600           |
| **A**     | `@`                  | `185.199.111.153`           | 3600           |
| **CNAME** | `www`                | `<your-username>.github.io` | 3600           |

- The **four A records** make **herzensbilderbauer.de** (apex) point to GitHub Pages.
- The **CNAME** makes **www.herzensbilderbauer.de** point to GitHub.

Replace **&lt;your-username&gt;** with your GitHub username (e.g. if your repo is `christianbauer/herzensbilderbauer`, use `christianbauer.github.io`).

If IONOS only lets you add one A record for `@`, add all four IPs if the UI allows multiple values; otherwise add four separate A records with the same host `@` and one IP each.

### C. Enforce HTTPS (recommended)

1. Back in GitHub **Settings** → **Pages**.
2. If you see **Enforce HTTPS**, enable it (after DNS has propagated and the domain shows as verified).

---

## 3. Optional: Redirect www to apex (or vice versa)

If you want **www.herzensbilderbauer.de** to redirect to **herzensbilderbauer.de** (or the other way around), you can do that later (e.g. with a small HTML redirect page or via IONOS redirect). For most cases, having both apex and www point to GitHub is enough.

---

## 4. After DNS propagates

- DNS can take from a few minutes up to 24–48 hours.
- When the custom domain is verified in GitHub Pages, your site will be served at **https://herzensbilderbauer.de** (and **https://www.herzensbilderbauer.de** if you set the CNAME).
- Your app already uses **BASE_URL = "https://herzensbilderbauer.de"** in `src/lib/constants.ts`, so sitemap and canonical URLs are correct.

---

## Summary

| Step | Where                     | What                                                             |
| ---- | ------------------------- | ---------------------------------------------------------------- |
| 1    | GitHub → Settings → Pages | Source = **GitHub Actions**                                      |
| 2a   | GitHub → Settings → Pages | Custom domain = **herzensbilderbauer.de**                        |
| 2b   | IONOS → DNS               | 4× A for `@` → GitHub IPs; 1× CNAME `www` → `username.github.io` |
| 3    | GitHub → Settings → Pages | Enable **Enforce HTTPS** when offered                            |

After that, every **git push** to **main** will build and deploy the site automatically; no VPS or Coolify needed.
