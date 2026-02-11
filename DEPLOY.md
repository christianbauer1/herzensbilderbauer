# Deploy to GitHub Pages + Custom Domain (herzensbilderbauer.de)

Every **git push** to `main` triggers a build and deploys the site to GitHub Pages.

## 1. Enable GitHub Pages (one-time)

1. Open your repo on GitHub: **Settings** → **Pages** (under "Code and automation").
2. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions**.
3. Save. You don’t need to create a branch or `/docs` folder.

After the first successful run of the **Deploy to GitHub Pages** workflow, the site will be available at:

- **Default:** `https://christianbauer1.github.io/herzensbilderbauer/`

The build uses `basePath: "/herzensbilderbauer"` so CSS and assets load correctly on that URL. **When you use your custom domain (herzensbilderbauer.de)**, add this to the workflow’s “Build static export” step so the site works at the root of your domain:

```yaml
env:
  BASE_PATH: ""
```

Then commit, push, and redeploy. After that, use either the .github.io URL or the custom domain, not both, unless you keep two builds.

---

## 2. Use your custom domain (herzensbilderbauer.de)

### A. Tell GitHub your domain

1. In the same **Settings** → **Pages**.
2. Under **Custom domain**, enter: **herzensbilderbauer.de**
3. Click **Save**.
4. If GitHub shows a **DNS check** or **CNAME** suggestion, leave the tab open; you’ll fix DNS in the next step.

### B. Configure DNS at IONOS (and clean up)

Log in to **IONOS** → domain **herzensbilderbauer.de** → **DNS** (or "Domain & SSL" → "Manage DNS").

#### 1) Remove MailerSend (you don’t use it)

- **Delete** the CNAME with host **`mlsend2._domainkey`** (Wert: `mlsend2._domainkey.mailersend.net`).
- **Delete** the CNAME with host **`mta`** (Wert: `mailersend.net`).
- **Edit** the TXT record for **`@`** whose value starts with `"v=spf1 include:_spf.mailersend.net ..."`:
  - Remove the part `include:_spf.mailersend.net` (and `include:_spf-eu...` if present).
  - If you only use IONOS for mail, use e.g. `v=spf1 include:_spf.ionos.de ~all`. If you’re unsure, leave the rest of the SPF as-is and only remove the MailerSend `include` line(s).

#### 2) Point the website to GitHub Pages

**Replace the old A records** (currently pointing to `217.160.224.173`):

- **`@`** (root): Delete the existing A record, then add **four** A records for host **`@`**, each with one of these values:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **`www`**: Delete the current A record for **`www`** and add a **CNAME**:
  - Host: **`www`**
  - Wert/Value: **`christianbauer1.github.io`**
- **`*`** (wildcard): Delete the A record for **`*`** so subdomains don’t still point to the old server. (Optional: you can leave it for now and remove it later.)

**Leave as they are** (mail, DMARC, etc.): MX, `_dmarc`, `_domainconnect`, `s1-ionos._domainkey`, `s2-ionos._domainkey`, `s42582890._domainkey`, `autodiscover`, and the TXT `hosting-site=...` unless IONOS tells you to change something.

Quick reference:

| Aktion   | Typ   | HOSTNAME | WERT / Value              |
| -------- | ----- | -------- | ------------------------- |
| Löschen  | (alt) | @        | 217.160.224.173           |
| Hinzufügen | A   | @        | 185.199.108.153           |
| Hinzufügen | A   | @        | 185.199.109.153           |
| Hinzufügen | A   | @        | 185.199.110.153           |
| Hinzufügen | A   | @        | 185.199.111.153           |
| Löschen  | (alt) | www      | 217.160.224.173           |
| Hinzufügen | CNAME | www    | christianbauer1.github.io |
| Löschen (optional) | (alt) | * | 217.160.224.173 |

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
