# VM WashCare – SEO Setup Guide

## What Was Done in This Update

### 1. `src/index.html` – Fully Optimized
- **Title tag**: Keyword-rich title with brand + service + location + brands
- **Meta description**: Compelling description with phone number and service area
- **Meta keywords**: Targeted keywords for Chennai washing machine searches
- **Geo meta tags**: Tells Google your exact location in Chennai
- **Open Graph tags**: Better appearance when shared on WhatsApp/Facebook
- **Schema.org LocalBusiness JSON-LD**: Structured data Google uses for rich results
- **Schema.org FAQPage JSON-LD**: Enables FAQ rich results in Google search

### 2. Components Updated
- **hero.component.html**: H1 now contains primary keyword "Washing Machine Service in Chennai"
- **services.component.html**: H2 is keyword-optimized; schema microdata added
- **about.component.html**: H2 targets "Best Washing Machine Service Center in Chennai"
- **contact.component.html**: FAQ section added; click-to-call phone links; WhatsApp CTA
- **footer.component.html**: Keyword-rich service links; proper aria labels; clickable phone numbers

### 3. New Files
- **`src/robots.txt`**: Tells Google to crawl your site and where the sitemap is
- **`src/sitemap.xml`**: Tells Google all your URLs with priority and update frequency

---

## IMPORTANT: Steps You Must Do After Deploying

### Step 1 – Deploy the Updated Code
Build and deploy as usual:
```bash
ng build --configuration production
```
Then upload the `dist/electronics-shop/browser/` folder to your hosting.

### Step 2 – Verify robots.txt and sitemap are live
Open these URLs in your browser after deploying:
- https://www.vmwashcare.co.in/robots.txt
- https://www.vmwashcare.co.in/sitemap.xml

Both should load correctly.

### Step 3 – Google Search Console (MOST IMPORTANT)
1. Go to: https://search.google.com/search-console/
2. Click "Add Property" → enter `https://www.vmwashcare.co.in`
3. Verify ownership (easiest: download the HTML verification file and place it in `src/`)
4. Once verified, go to **Sitemaps** → Submit: `https://www.vmwashcare.co.in/sitemap.xml`
5. Use **URL Inspection** → enter your homepage URL → click "Request Indexing"

### Step 4 – Google Business Profile (Critical for Local Search)
This is what makes you appear on Google Maps and the "Local Pack" — the top 3 results for local searches.
1. Go to: https://business.google.com
2. Search for "VM WashCare" — if not found, click "Add your business"
3. Fill in:
   - Business name: VM WashCare
   - Category: Appliance Repair Service
   - Address: Ambattur, Chennai, Tamil Nadu 600053
   - Phone: 94879 08765
   - Website: https://www.vmwashcare.co.in
   - Hours: Mon–Sat 9AM–8PM, Sun 10AM–5PM
4. Verify your business (Google will send a postcard or call)
5. After verification, add photos of your shop and work

### Step 5 – Register on Local Directories (builds trust with Google)
List your business on:
- **JustDial**: https://www.justdial.com (search your name, claim it or add new)
- **Sulekha**: https://www.sulekha.com
- **IndiaMART**: https://www.indiamart.com
- **Yelp India**: https://www.yelp.in

Use the EXACT same Name, Address, Phone (NAP) on all platforms:
- Name: VM WashCare
- Address: Ambattur, Chennai, Tamil Nadu 600053
- Phone: 94879 08765

### Step 6 – Test Your Structured Data
1. Go to: https://search.google.com/test/rich-results
2. Enter: https://www.vmwashcare.co.in
3. You should see LocalBusiness and FAQPage detected ✅

### Step 7 – Check Angular SSR (Advanced)
Currently your Angular app uses Client-Side Rendering (CSR). While the structured data in index.html helps, full SSR will make Google crawl every word of your content. To add SSR:
```bash
ng add @angular/ssr
```
Then follow the Angular SSR documentation to deploy with Node.js.

---

## Keywords Targeted
- washing machine repair Chennai
- washing machine service Chennai
- IFB service center Chennai
- LG washing machine repair Chennai
- Samsung washing machine service Chennai
- Bosch washing machine repair Chennai
- front load washing machine repair Chennai
- Ambattur washing machine service
- doorstep washing machine repair Chennai

---

## Timeline Expectation
- Google indexing: 1–4 weeks after submitting to Search Console
- Local Map Pack appearance: 4–12 weeks after Google Business verification
- Top search rankings for competitive keywords: 3–6 months (requires content + reviews)
