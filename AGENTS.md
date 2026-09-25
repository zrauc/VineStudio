# Vine Studio website

## Project
Marketing website for Vine Studio, a small web design and development studio. Domain: vinestudio.in. Tagline: Websites Done Right.
Stack: plain HTML, CSS, vanilla JavaScript. No React, no build step, no frameworks, no Tailwind. Hosting: Cloudflare Pages.
No backend, no login, no forms. The only conversion path is a WhatsApp link.

## Contact
WHATSAPP_NUMBER: 917051422693
EMAIL: vinestudio.in@gmail.com
INSTAGRAM_URL: https://instagram.com/vinestudio.in
LOCATION: Bhaderwah, Jammu and Kashmir, India
Default WhatsApp link:
https://wa.me/917051422693?text=Hi%2C%20I%27d%20like%20a%20free%20demo%20for%20my%20business.
Every WhatsApp link must use this number with a URL encoded message.

## People
Founders (in this order, everywhere):
1. Ritish Sharma, Founder
2. Aftab Ahmed, Founder
3. Anmol Thakur, Founder
Use the plural heading "Founders" wherever the team is shown. Do not add bios, quotes, social links or photos unless a file exists. Never render placeholder people.
Optional portrait files, use only if they exist:
assets/img/team-ritish-sharma.webp
assets/img/team-aftab-ahmed.webp
assets/img/team-anmol-thakur.webp

## Pages and URLs
/ (home), /about/, /services/, /privacy/, /terms/, 404.html
File layout: index.html, about/index.html, services/index.html, privacy/index.html, terms/index.html, 404.html, robots.txt, sitemap.xml, site.webmanifest, _headers
Assets: assets/css/styles.css, assets/js/main.js, assets/brand/, assets/img/
Use root-relative paths everywhere (for example /assets/css/styles.css).
Header and footer markup must be identical on every page. Mark the current page with aria-current="page".

## Assets that will exist (use whichever extension actually exists in the folder)
assets/brand/vine-studio-logo (.svg or .png)
assets/brand/vine-studio-mark (.svg or .png)
assets/brand/favicon.ico, favicon-32x32.png, apple-touch-icon.png, icon-192.png, icon-512.png
assets/img/og-image.jpg
assets/img/about-team-01.webp, about-workspace-01.webp
assets/img/team-ritish-sharma.webp, team-aftab-ahmed.webp, team-anmol-thakur.webp (optional)
If a file is missing, build without it and report it. Never invent placeholder images.

## Design rules (strict)
- Light theme, white background. Quiet, editorial, calm. Not a typical SaaS or AI look.
- Colors (CSS variables, use nothing else):
  --color-brand: #511270
  --color-brand-hover: #3E0D57
  --color-bg: #FFFFFF
  --color-bg-soft: #F7F6F8
  --color-text: #17131A
  --color-text-muted: #5F5A66
  --color-border: #E4E1E8
- Purple is only for primary buttons, links, focus rings and one small accent per section. No purple gradients, no large purple backgrounds, no glow.
- Spacing: 8px scale only (4, 8, 16, 24, 32, 48, 64, 96, 128).
- Typography: one font family (DM Sans from Google Fonts with display=swap and a system fallback stack), one fixed type scale, weights 400 and 600 only. Body 16px to 18px, line height 1.6.
- Border radius: 4px everywhere. No pills, no bubbles.
- No box shadows. Use 1px borders.
- Animation: only color and opacity transitions at 150ms to 200ms. No transforms on hover, no scroll animations. Respect prefers-reduced-motion.
- Container: max-width 1120px, side padding 24px mobile and 32px desktop. Everything aligns to the same grid.
- Banned: sparkles, emojis, em dashes, fake testimonials, fake statistics, stock photos, decorative squiggles, blobs, gradient text, glassmorphism, oversized icons.
- Mobile first. Nothing may overflow horizontally at 320px.

## Copy rules
Plain, human, specific. No filler like "build your dreams" or "launch faster". No em dashes. No exclamation marks. Prices always say "Starting from".

## Copy

### Header
Logo (links to /). Nav: Home, About, Services. Right side button: Get Your Free Demo (default WhatsApp link).

### Footer
Logo, tagline Websites Done Right. Links: Home, About, Services, Privacy Policy, Terms of Service. Contact links: WhatsApp, email, Instagram. Location: Bhaderwah, Jammu and Kashmir. Copyright line: © 2026 Vine Studio. All rights reserved.

### Home (section order)
1. Hero
H1: We build websites that build your business.
Support: Modern, affordable websites for businesses, creators and brands that want a proper presence online.
Primary button: Get Your Free Demo. Text link: View our services (to /services/).
No image, no gradient, left aligned.

2. What we do
H2: What we do
Text: Vine Studio is a small team that designs and builds websites for people who want to be found and taken seriously online. We keep things simple. We understand your business, work out what your website needs to do, and then build it so it looks good and works well for your customers.

3. Services
H2: Our services
Three cards (name, one line, starting price, link "See details" to /services/):
- Website Design, Starting from ₹3,000. Your website designed in Figma, so you can see exactly how it will look before anything is built.
- Website Design and Development, Starting from ₹5,000. Your complete website, designed and built, ready to go live.
- Landing Page Design and Development, Starting from ₹3,000. One focused page, designed and built by us.

4. How the free demo works
H2: How the free demo works
1. Message us on WhatsApp. Tell us about your business.
2. Send us your photos, logo and what you want your website to say.
3. We build a one-page demo from what you send us.
4. You review it. If you like it, we build your real website. If not, no obligation.
Note: The demo is a temporary preview. If you go ahead, we build your final website from scratch.

5. About preview
H2: About Vine Studio
Text: We're a small team based in Bhaderwah, Jammu and Kashmir, working with businesses locally and beyond. We keep websites affordable, and we keep the important parts of the work human-led, from understanding your business to design and final review.
Link: Learn more about us (to /about/)

6. Final CTA
H2: Not sure what your website should look like?
Text: Message us about your business and we'll build a free one-page demo from what you share with us.
Button: Get Your Free Demo
Note under button: Free, one page, no obligation.

### About
H1: About Vine Studio
Intro: We're Vine Studio. We build websites for businesses that want a proper presence online.
H2 Who we are: We're a small team based in Bhaderwah, Jammu and Kashmir, and we work with businesses both locally and beyond. We mainly build landing pages, business websites and portfolio websites, along with website updates and custom work when needed.
H2 How we work: Our approach is simple. We want to understand your business first, figure out what your website actually needs to do, and then build something that looks good and is easy for your customers to use.
H2 Why we keep it affordable: We want smaller businesses to be able to get online without spending a huge amount. We use modern tools to make development faster, while keeping the important parts of the work human-led, from understanding the business to the design and final review.
H2 The founders: Ritish Sharma, Aftab Ahmed and Anmol Thakur. Show the three names with the title Founder under each, in a three column grid on desktop that stacks on mobile, separated by 1px borders. If the individual portrait files exist, show each one above the name. Otherwise show names only, no photo boxes or initials. Use about-team-01.webp and about-workspace-01.webp as the general team and workspace photos if they exist.
Closing: If you're starting a business, need a website for an existing one, or feel your current website doesn't represent you properly, that's where we come in.
Button: Get Your Free Demo

### Services
H1: Services
Intro: Three ways to work with us. Prices are starting prices. The final quote depends on the number of pages and features.

Service 1: Website Design. Starting from ₹3,000. About 3 to 5 days.
We design your website in Figma so you can see exactly how it will look before anything is built. A good fit if you already have a developer or want to approve the design first.
You get: custom design, desktop and mobile layouts, Figma file, up to 2 rounds of revisions.
Button: Ask about website design. WhatsApp message: Hi, I'm interested in Website Design.

Service 2: Website Design and Development. Starting from ₹5,000. About 5 to 10 days depending on pages.
We design and build your complete website, ready to go live. It works on phones, tablets and computers, loads quickly and is easy for your customers to use. Good for business websites, portfolio websites and personal sites.
You get: custom design, full build in clean code, up to 5 pages, mobile friendly layout, basic SEO setup (page titles, descriptions, sitemap), up to 2 rounds of revisions.
Note: Domain and hosting costs are separate.
Button: Ask about a full website. WhatsApp message: Hi, I'm interested in Website Design and Development.

Service 3: Landing Page Design and Development. Starting from ₹3,000. About 3 days.
One page, designed and built by us. A good fit if you're launching something, running ads, or your current page isn't working.
You get: custom one-page design, full build, mobile friendly layout, basic SEO setup, up to 2 rounds of revisions.
Button: Ask about a landing page. WhatsApp message: Hi, I'm interested in a Landing Page.

Then the "How the free demo works" section (same copy as home), then:
H2: Not sure which one you need?
Text: Message us and tell us about your business. We'll suggest the simplest option that fits.
Button: Get Your Free Demo

## Free demo rules (business logic, keep wording consistent)
- The customer contacts us first on WhatsApp and shares their business details, photos, logo and what they want.
- We build a one-page demo from what they share. One page only.
- The demo is hosted temporarily for review.
- If they go ahead, we build the real website from scratch and the demo is deleted.
- If they do not go ahead, the demo and their files are deleted.
- The demo is free with no obligation.

## Legal pages
Plain English, short, honest. Show "Last updated" with the build month and year. Do not claim anything the business does not actually do. Do not copy legal boilerplate about things that do not apply (no accounts, no online payments, no newsletters, no cookie banner needed beyond a note). Refer to "Vine Studio" and "we", not to individuals.

### Privacy Policy (/privacy/)
Cover: who we are and contact email; what we receive (messages, photos, logos and business details sent on WhatsApp or email, phone number and name of the sender); what the website itself collects (Google Analytics 4 usage data such as pages visited, device and approximate location, which uses cookies); why we use it (to respond, to build demos and projects, to understand site usage); who else handles data (WhatsApp/Meta, Google Analytics, Cloudflare for hosting, Netlify for temporary demo hosting); demo data policy (photos and details are used only for that demo and are deleted if the project does not go ahead; demos are hidden from search engines); how long we keep data; we do not sell personal data; your choices (ask us to delete or correct your data by emailing us, how to block analytics cookies via browser settings or Google's opt-out add-on); children (site is not aimed at children); changes to this policy; contact. Mention the rights under Indian law (Digital Personal Data Protection Act, 2023) in one plain sentence without legal jargon.

### Terms of Service (/terms/)
Cover: who we are; what the terms apply to (our services and this website); quotes and pricing (prices are starting prices, final quote confirmed in writing on WhatsApp or email before work starts, payment schedule agreed in writing before work starts); the free demo (free, one page, temporary, built from client supplied material, no obligation, deleted afterwards, not a final deliverable, not to be used publicly without a paid project); timelines (estimates, depend on client responding and supplying content on time); revisions (up to 2 rounds included, extra work quoted separately); client content (client confirms they own or have permission to use the text, images and logos they send; we are not responsible for content they supply); ownership (final design and code transfer to the client after full payment; we may mention the project as our work only with the client's permission); third party costs (domain, hosting and paid tools are separate and owned by the client); after delivery (bug fixes for issues in our work reported within 7 days are free, ongoing maintenance is separate); limitation of liability (we are not liable for indirect losses or business outcomes; liability limited to the amount paid for the service); termination (either side can stop a project in writing, work done up to then is payable); governing law (laws of India); changes to terms; contact email.

## SEO and technical
- Every page: unique title (under 60 characters), meta description (under 160), canonical URL, Open Graph and Twitter card tags, og:image /assets/img/og-image.jpg, lang="en", viewport, theme-color #511270.
- JSON-LD: Organization on the home page (name Vine Studio, url https://vinestudio.in, logo, email, telephone, address locality Bhaderwah, region Jammu and Kashmir, country IN, sameAs Instagram, founder as an array of three Person objects: Ritish Sharma, Aftab Ahmed, Anmol Thakur). On the About page, the same Organization plus a separate Person block for each founder (name, jobTitle Founder, worksFor Vine Studio).
- Semantic HTML: one h1 per page, header, nav, main, section, footer. Skip link. Visible focus states. AA contrast.
- Images: explicit width and height, loading="lazy" below the fold, descriptive alt text.
- No external libraries. All external links use rel="noopener noreferrer".
- Google Analytics 4: one constant GA_MEASUREMENT_ID at the top of assets/js/main.js. If empty, load nothing. If set, load GA4 from there so it is configured in exactly one place.
- sitemap.xml lists /, /about/, /services/, /privacy/, /terms/.

## Working rules
- Read this file first on every task.
- Do only what the current prompt asks. Do not touch out of scope files.
- Never invent content, images, testimonials or statistics.
- When finished, list the files changed and anything unsure.