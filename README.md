# Velda Morisco — Psychodynamic Psychotherapist

Static marketing website for Velda Morisco, a psychodynamic psychotherapist and
family therapist offering online video sessions for adults, youth, and families.

**Live domain:** https://veldamorisco.com

## Tech

Pure HTML5, CSS3, and vanilla JavaScript — no build step, no framework.
Fonts: Cormorant Garamond (headings) + Source Sans 3 (body) via Google Fonts.

## Structure

```
index.html            Homepage
pages/about.html      About Velda
pages/approach.html   Therapeutic approach
pages/services.html   Services & FAQ
pages/contact.html    Enquiry form
css/styles.css        All styles
js/main.js            Mobile nav
```

## Hosting (GitHub Pages)

This repo is served by GitHub Pages from the `main` branch root.
Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)`.
The custom domain is set in Settings → Pages → Custom domain.

## Contact form

`pages/contact.html` posts to [Formspree](https://formspree.io) (free tier).
Replace `REPLACE_WITH_FORMSPREE_ID` in that file with a real Formspree form ID,
and set the destination inbox in the Formspree dashboard.
