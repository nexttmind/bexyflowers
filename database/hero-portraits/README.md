# Mobile portrait heroes (homepage + customize only)

Only these pages swap to a **9:16 portrait** asset on viewports **≤760px**:

| Page | Desktop | Mobile (phone) | CMS override key |
|------|---------|----------------|------------------|
| **Home** (top hero) | `/images/homepage-hero.png` | `/images/homepage-hero-portrait.jpg` | `reference-hero-image-portrait` |
| **Customize** | `/images/customization-hero.png` | `/images/customization-hero-portrait.jpg` | `atelier-fullscreen-hero-portrait` |

About, weddings, collection, and other homepage bands keep the **same** hero image on mobile.

## AI prompt (ChatGPT / DALL·E)

Reference the desktop PNG, aspect **9:16**:

> Recrop for a full-screen phone portrait. Keep the same flowers, colors, and luxury florist mood as the reference. Center the main subject. Photorealistic, no text, no logos.

Save files into `public/images/` with the names above.
