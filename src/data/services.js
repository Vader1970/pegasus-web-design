/* -----------------------------------------------------------------
   Services content
   --------------------
   One entry per service. The `/services/[slug]` route reads from
   this array to render a consistent, content-driven service page.

   Field contract (kept identical across every service):
     slug            - URL segment used by /services/[slug]
     eyebrow         - Short label shown above the hero heading
     title           - H1 of the page
     subtitle        - One-line positioning statement
     heroParagraph   - Lead paragraph under the subtitle
     hero.image      - Hero image path (inside /public)
     hero.alt        - Hero image alt text
     overview        - Short intro/overview block (label, heading, body)
     helpsWith       - "What this service helps with" (label, heading, bullets)
     included        - "What's included" (label, heading, bullets)
     outcomes        - "Why it matters" (label, heading, bullets)
     featured        - Related proof / featured project (optional fields)
     cta             - Final slate-band CTA copy for this page
------------------------------------------------------------------ */

export const services = [
  {
    slug: "website-redesigns",
    eyebrow: "SERVICE",
    title: "Website Redesigns",
    subtitle:
      "Refresh your site so it reflects the quality of the business behind it.",
    heroParagraph:
      "If your website feels dated, slow, or isn't bringing in enquiries, a redesign can change that without throwing everything out. We rebuild around what's already working and fix what isn't.",
    hero: {
      image: "/images/home/projects/cleghorn-mock-up.png",
      alt: "Cleghorn website redesign mockup on desktop",
    },
    overview: {
      label: "OVERVIEW",
      heading: "Keep what works. Rebuild what doesn't.",
      body: "Most websites don't need to be thrown out. They need sharper messaging, a cleaner layout, faster load times, and a clear path to enquiry. That's where we focus.",
    },
    helpsWith: {
      label: "WHAT IT HELPS WITH",
      heading: "Where a redesign makes the biggest difference",
      bullets: [
        "Your site looks outdated next to competitors and it's costing you enquiries.",
        "Visitors land, look around, and leave without getting in touch.",
        "The site loads slowly on mobile or feels clunky to navigate.",
        "Your messaging has drifted and no longer reflects what you actually do.",
        "Trust signals like reviews, photos, and credentials aren't pulling their weight.",
      ],
    },
    included: {
      label: "WHAT'S INCLUDED",
      heading: "What we rebuild",
      bullets: [
        "Full content and structure review so nothing useful gets lost.",
        "Fresh design aligned with your brand and how your customers buy.",
        "Clearer, tighter copy written around the questions people actually ask.",
        "Mobile-first layout built around how people really use your site.",
        "Performance work — faster load times, better Core Web Vitals.",
        "On-page SEO foundations and a clean analytics setup.",
      ],
    },
    outcomes: {
      label: "THE OUTCOME",
      heading: "What you walk away with",
      bullets: [
        "A site that reflects the quality of your business from the first second.",
        "A clearer story that helps visitors understand what you do and why.",
        "Stronger conversion paths so more visitors become enquiries.",
        "A faster, more reliable experience across every device.",
        "A foundation you can grow with, not fight with.",
      ],
    },
    featured: {
      label: "FEATURED WORK",
      heading: "See a redesign in action",
      body: "Mac Auto Services came to us with a great workshop and a website that didn't match. We rebuilt the site around their services, trust signals, and real customer questions.",
      image: "/images/home/projects/mac-auto-services-mock-up.webp",
      alt: "Mac Auto Services website mockup",
      caption: "Mac Auto Services, Christchurch",
      href: "/work/mac-auto-services",
      linkLabel: "Read the case study",
    },
    cta: {
      heading: "Thinking about a redesign?",
      body: "We'll take a look at your current site and talk through what a redesign would realistically change for your business.",
    },
  },

  {
    slug: "business-websites",
    eyebrow: "SERVICE",
    title: "Business Websites",
    subtitle:
      "Custom-built websites for service businesses ready to win more work.",
    heroParagraph:
      "Purpose-built websites for established service businesses who need a site that explains what they do clearly, builds credibility, and turns visitors into real enquiries.",
    hero: {
      image: "/images/home/projects/tilyard-plumbing-mock-up.png",
      alt: "Tilyard Plumbing business website mockup",
    },
    overview: {
      label: "OVERVIEW",
      heading: "Built around your business — not a template.",
      body: "Every service business is different. Your site should show what makes yours worth choosing, not squeeze your story into a stock layout.",
    },
    helpsWith: {
      label: "WHAT IT HELPS WITH",
      heading: "A business website earns its keep when…",
      bullets: [
        "You need a professional presence that matches how good your work actually is.",
        "You're relying on word of mouth and ready to start winning enquiries online.",
        "Your current site was built years ago and no longer represents the business.",
        "You want one clear home for your services, proof, and contact details.",
        "You're hiring and need a site that helps people take you seriously.",
      ],
    },
    included: {
      label: "WHAT'S INCLUDED",
      heading: "What's included",
      bullets: [
        "Discovery call to understand your services, customers, and goals.",
        "Messaging and copy direction — not just pretty boxes.",
        "Custom design shaped around your brand, not a template.",
        "Mobile-first build with fast performance out of the box.",
        "SEO structure, sitemap, and schema set up properly.",
        "One month of free post-launch support.",
      ],
    },
    outcomes: {
      label: "THE PAYOFF",
      heading: "What the right site changes",
      bullets: [
        "A site that does the first-impression heavy lifting for you.",
        "A clearer pitch that customers actually read to the end.",
        "More qualified enquiries coming through contact forms.",
        "A platform you can keep building on as your business grows.",
        "Less time explaining what you do, more time doing it.",
      ],
    },
    featured: {
      label: "FEATURED WORK",
      heading: "A business website built to convert",
      body: "We rebuilt Mac Auto's site around their services, local customers, and the questions that actually lead to bookings — not a generic template.",
      image: "/images/home/projects/mac-auto-services-mock-up.webp",
      alt: "Mac Auto Services business website mockup",
      caption: "Mac Auto Services, Christchurch",
      href: "/work/mac-auto-services",
      linkLabel: "Read the case study",
    },
    cta: {
      heading: "Ready for a website that pulls its weight?",
      body: "Start with a free consultation. We'll talk through your business, your goals, and whether a new site makes sense right now.",
    },
  },

  {
    slug: "landing-pages",
    eyebrow: "SERVICE",
    title: "Landing Pages",
    subtitle:
      "Single-focus pages built to convert clicks into qualified leads.",
    heroParagraph:
      "Landing pages designed around one offer, one service, or one campaign — and nothing else. Perfect for paid ads, seasonal pushes, or testing a new service before committing to a full site.",
    hero: {
      image: "/images/home/projects/gee-quiz-mock-up.png",
      alt: "Gee Quiz campaign landing page mockup",
    },
    overview: {
      label: "OVERVIEW",
      heading: "One page. One goal. No distractions.",
      body: "Full websites answer every question. Landing pages answer one: is this the right fit for me? Everything on the page points the visitor toward a single clear next step.",
    },
    helpsWith: {
      label: "WHAT IT HELPS WITH",
      heading: "When a landing page is the right call",
      bullets: [
        "You're running Google or Facebook ads and need somewhere better to send traffic.",
        "You're launching a new service and want to test demand before committing.",
        "You want to focus attention on a single offer, package, or promotion.",
        "Your main website is trying to do too many things at once.",
        "You need something live in weeks, not months.",
      ],
    },
    included: {
      label: "WHAT'S INCLUDED",
      heading: "What's included",
      bullets: [
        "Offer and audience clarification before anything gets designed.",
        "Conversion-focused copy that gets to the point quickly.",
        "Clean, on-brand design with one clear call to action.",
        "Mobile-first layout optimised for paid traffic.",
        "Form setup, lead capture, and a thank-you flow that doesn't drop the ball.",
        "Basic tracking so you can actually see what's working.",
      ],
    },
    outcomes: {
      label: "THE OUTCOME",
      heading: "What a good landing page does",
      bullets: [
        "Turns cold clicks into real, qualified enquiries.",
        "Gives you a clear benchmark for your ad spend.",
        "Lets you test offers and messaging quickly, without a full rebuild.",
        "Frees your main site from trying to be all things to all people.",
        "Leaves you with a repeatable asset you can reuse for future campaigns.",
      ],
    },
    featured: {
      label: "FEATURED WORK",
      heading: "Focused pages, real results",
      body: "Single-purpose pages we've built for clients who needed a campaign or service page that actually converts, not just one more tab on a site.",
      image: "/images/home/projects/autistic-innovations-maoc-up.png",
      alt: "Autistic Innovations landing page mockup",
      caption: "A selection from our recent work",
      href: "/work",
      linkLabel: "See more of our work",
    },
    cta: {
      heading: "Have a campaign or offer in mind?",
      body: "Book a free consultation and we'll map out whether a dedicated landing page would outperform sending traffic to your main site.",
    },
  },

  {
    slug: "seo-optimisation",
    eyebrow: "SERVICE",
    title: "SEO Optimisation",
    subtitle:
      "On-page and technical SEO that helps the right people find you.",
    heroParagraph:
      "Practical SEO work focused on how your site is structured, what it says, and how quickly it loads — so it's easier for customers and search engines to understand what you do.",
    hero: {
      image: "/images/home/projects/burst-digital-mock-up.png",
      alt: "Burst Digital website with SEO improvements",
    },
    overview: {
      label: "OVERVIEW",
      heading: "SEO that actually moves the needle.",
      body: "No jargon, no black-box tactics. We focus on the fundamentals that search engines and visitors both reward: fast pages, clear content, and a site that's easy to crawl.",
    },
    helpsWith: {
      label: "WHAT IT HELPS WITH",
      heading: "Where SEO makes a real difference",
      bullets: [
        "You're not showing up when local customers search for your services.",
        "Your site has strong content but it's buried or poorly structured.",
        "Pages load slowly or have technical issues holding them back.",
        "You've invested in a website but aren't seeing organic traffic grow.",
        "You want a clearer picture of what's actually driving your results.",
      ],
    },
    included: {
      label: "WHAT'S INCLUDED",
      heading: "What we look at",
      bullets: [
        "Full audit of your current site, content, and technical setup.",
        "On-page improvements — headings, metadata, internal links, content structure.",
        "Technical fixes — speed, mobile usability, schema, crawlability.",
        "Keyword and content direction aligned with what customers actually search.",
        "Search Console and Analytics configured so the data is usable.",
        "A clear written summary and a prioritised action plan.",
      ],
    },
    outcomes: {
      label: "WHAT TO EXPECT",
      heading: "What good SEO earns you",
      bullets: [
        "Better rankings for the searches that actually bring customers.",
        "Faster, cleaner pages that search engines reward.",
        "More qualified organic traffic month after month.",
        "Honest data you can make decisions with.",
        "A site that keeps earning visibility long after the work is done.",
      ],
    },
    featured: {
      label: "RELATED WORK",
      heading: "Built with SEO in mind",
      body: "Every site we build starts with the same SEO fundamentals — clean structure, fast performance, and content written around real search intent.",
      image: "/images/home/projects/filtration-station-mock-up.png",
      alt: "Filtration Station website mockup",
      caption: "A selection from our recent work",
      href: "/work",
      linkLabel: "See more of our work",
    },
    cta: {
      heading: "Not sure what your SEO is actually doing?",
      body: "Start with a free consultation. We'll take a look at your site and tell you, honestly, where the biggest wins are.",
    },
  },

  {
    slug: "platform-guidance",
    eyebrow: "SERVICE",
    title: "Platform Guidance",
    subtitle:
      "Straightforward advice on the right platform and setup for your business.",
    heroParagraph:
      "Choosing the wrong platform can lock you into years of frustration. We help you pick a setup that fits your goals, budget, and how hands-on you want to be — without pushing one tool over another.",
    hero: {
      image: "/images/home/projects/innlist-mock-up.png",
      alt: "Innlist platform-driven website mockup",
    },
    overview: {
      label: "OVERVIEW",
      heading: "Pick a platform that won't slow you down in a year.",
      body: "Framer, Webflow, WordPress, custom code, or something else — every platform has trade-offs. The right choice depends on what you're building, who's maintaining it, and where you want to take it next.",
    },
    helpsWith: {
      label: "WHAT IT HELPS WITH",
      heading: "When platform guidance helps most",
      bullets: [
        "You're starting from scratch and don't know which platform to commit to.",
        "You've outgrown your current setup and aren't sure what to move to.",
        "You're getting conflicting advice from different developers or agencies.",
        "You want to make a confident choice before spending on a full build.",
        "You need a setup your team can actually manage once it's live.",
      ],
    },
    included: {
      label: "WHAT'S INCLUDED",
      heading: "What you get",
      bullets: [
        "A clear conversation about your business, goals, and constraints.",
        "Honest pros and cons for each platform worth considering.",
        "A recommendation tailored to your situation — not ours.",
        "Practical guidance on hosting, maintenance, and long-term cost.",
        "Notes on what to avoid based on your specific goals.",
      ],
    },
    outcomes: {
      label: "THE OUTCOME",
      heading: "What you walk away with",
      bullets: [
        "Clarity on the platform that actually fits your business.",
        "Confidence to move forward — or to push back on bad advice.",
        "A realistic picture of cost, flexibility, and long-term effort.",
        "A stronger foundation for whoever ends up building the site.",
        "No lock-in and no surprises down the line.",
      ],
    },
    featured: {
      label: "RELATED WORK",
      heading: "Platforms chosen for the right reasons",
      body: "Some of our clients needed a custom React build. Others were better off on Framer or Webflow. The common thread is the platform was chosen to fit them — not the other way around.",
      image: "/images/home/projects/master-kerb-mock-up.png",
      alt: "Master Kerb & Concrete website mockup",
      caption: "A selection from our recent work",
      href: "/work",
      linkLabel: "See more of our work",
    },
    cta: {
      heading: "Need a second opinion?",
      body: "Book a free consultation. We'll help you make a platform decision you won't regret.",
    },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
