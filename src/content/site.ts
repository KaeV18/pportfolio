// Single source of truth for everything you will edit: links, copy, projects.
// Replace every "#" and every [placeholder] here. No other file needs touching.

export const site = {
  name: "Kenisha Verma",
  role: "Product designer · Delhi NCR",
  timezone: "Asia/Kolkata",
  city: "DELHI NCR",
  links: {
    bookCall: "https://calendar.app.google/JyJPrNFx34CaM4MD8", // Google Calendar booking link
    resume: "https://drive.google.com/file/d/1SPPSiqdL9kfL1XsWqSndPrRUKdOH5pqU/view?usp=share_link",
    email: "mailto:kenishav06@gmail.com",
    credit: "https://www.youtube.com/watch?v=6MAzUT1YhWE&t=22s",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kenishaverma" },
    { label: "Behance", href: "https://www.behance.net/kenishaverma" },
    { label: "Instagram", href: "https://www.instagram.com/_kenishaverma_/" },
    { label: "Pinterest", href: "https://in.pinterest.com/kenishaverma18/" },
    { label: "X", href: "https://x.com/KenishaVerma" },
  ],
  nav: [
    { label: "Work", href: "/work/" },
    { label: "About", href: "/about/" },
    { label: "Stills", href: "/stills/" },
  ],
  hero: {
    photo: "/images/hero.jpg",
    caption: "Taking life one biscuit at a time. 🍪",
    // The biggest text on the home page. `accent` must be a phrase inside `statement`; it is set in serif italic.
    statement: "The details are never just details.",
    accent: "never just details",
  },
  about: {
    short: "Product design student interested in UX, UI and how people use technology. I like travelling, cafés, music, badminton, dancing and cats, and I will happily spend hours organising things.",
    portraits: ["/images/me-3.jpg", "/images/me-4.jpg", "/images/me-2.jpg", "/images/me-1.jpg"], // reorder freely
    lead: "Hi, I\u2019m Kenisha.",
    paragraphs: [
      "I enjoy travelling, exploring new places, trying out caf\u00e9s, listening to music and occasionally getting lost in a new movie or series.",
      "I play badminton, love dancing, have a soft spot for cats, and can spend an unreasonable amount of time organising things.",
      "I\u2019m also interested in different cultures, languages, technology and pretty much anything that catches my curiosity. I like keeping myself busy, discovering new things and making time for the little things I enjoy.",
    ],
    experience: [
      { place: "Flexprice / Product design apprentice", when: "June 2026" },
      { place: "Unitedworld Institute of Design / B.Des (Hons), Product Design", when: "2024 \u2013 2028" },
    ],
  },
};

export type Step = { label: string; caption: string; img?: string };
export type Decision = { title: string; why: string; tradeoff: string; img?: string };
export type Shot = { src: string; caption: string; wide?: boolean };
export type Project = {
  slug: string;
  name: string;
  year: string;
  claim: string;
  role: string;
  team: string;
  duration: string;
  tools: string;
  cover: string;
  problem?: string;
  constraints?: string;
  stats?: { value: string; label: string }[];
  process?: Step[];
  decisions?: Decision[];
  solution?: string;
  results?: string;
  link?: { label: string; href: string };
  gallery?: Shot[];
};

export const projects: Project[] = [
  {
    slug: "signlingo",
    name: "SignLingo",
    year: "2026",
    claim: "A Duolingo-style web app that uses your camera to teach sign language and tells you which finger is wrong.",
    role: "UX designer",
    team: "Team project",
    duration: "Semester 5",
    tools: "Figma, hand-tracking web build",
    cover: "/images/covers/signlingo.jpg",
    problem:
      "Learning a sign language from videos means you copy a hand shape and never find out whether you got it right. There is no teacher in the loop, so mistakes go unnoticed and learners lose confidence.",
    constraints:
      "It had to run in a browser with no install, work on an ordinary laptop or phone camera, and keep all video on the device. Feedback had to be rule-based so it could explain itself, not a black box.",
    stats: [
      { value: "10", label: "sign languages" },
      { value: "167", label: "signs" },
      { value: "0", label: "video uploaded; camera stays on device" },
    ],
    process: [
      { label: "Research", caption: "Framed the problem for learners who have no one to check their signs." },
      { label: "Personas", caption: "Turned the research into user insights that set what feedback must do." },
      { label: "Wireframes", caption: "Mapped lesson, practice and feedback screens before any visual design." },
      { label: "High fidelity", caption: "Built the SignLingo look: palette, logo and illustrations." },
      { label: "Prototype", caption: "A working build with live hand tracking, tested for feedback quality." },
    ],
    decisions: [
      {
        title: "Partial credit instead of right or wrong",
        img: "/images/cases/sl-coach.jpg",
        why: "A sign has several parts. Telling a learner which finger is off lets them fix one thing at a time.",
        tradeoff: "More states to design and more feedback text to write than a simple pass or fail.",
      },
      {
        title: "Hold to confirm for half a second",
        img: "/images/cases/sl-points.jpg",
        why: "Hand tracking flickers. Asking the learner to hold the shape for 520 ms stops accidental passes.",
        tradeoff: "Every correct sign feels slightly slower.",
      },
    ],
    solution:
      "Learners see a ghost overlay of the target hand, sign it to the camera, and get finger-level feedback with partial credit. Lessons run from single signs to short conversations.",
    link: { label: "Open the live prototype", href: "https://signlingo.khe.money" },
    gallery: [
      { src: "/images/cases/sl-hero.jpg", caption: "The product on laptop and phone: camera lesson with hand tracking.", wide: true },
      { src: "/images/cases/sl-coach.jpg", caption: "Feedback that names the finger to fix." },
      { src: "/images/cases/sl-points.jpg", caption: "Partial credit for each part of a sign, and the 520 ms hold." },
      { src: "/images/cases/sl-never.jpg", caption: "Why it exists: most people who could sign never start." },
      { src: "/images/cases/sl-course.jpg", caption: "Lessons that teach before they test." },
      { src: "/images/cases/sl-langs.jpg", caption: "Ten sign languages in one app." },
      { src: "/images/cases/sl-streaks.jpg", caption: "Streaks, gems and a league." },
      { src: "/images/cases/sl-visual.jpg", caption: "Visual language: rounded type, colour and hand illustrations." },
      { src: "/images/cases/sl-practice.jpg", caption: "Practice screen with live camera and the full alphabet.", wide: true },
      { src: "/images/cases/sl-languages.jpg", caption: "Language picker.", wide: true },
    ],
  },
  {
    slug: "ev-trip-planner",
    name: "EV Trip Planner",
    year: "2026",
    claim: "A trip planner for Indian EV owners that predicts arrival battery and has a backup plan when a charger fails.",
    role: "UX designer",
    team: "Experience Design module",
    duration: "Autumn 2026",
    tools: "Figma",
    cover: "/images/covers/ev.jpg",
    problem:
      "Long highway trips in an EV are stressful in India. Chargers are often down, real range falls short of the claim, and existing apps show a list of stations without a plan for when one fails.",
    constraints:
      "Research was survey and secondary-source based, so the personas are hypotheses, not interview findings. The app had to work with weak signal on highways.",
    stats: [
      { value: "84%", label: "of 37 audited Delhi chargers not working (IEEFA)" },
      { value: "64–93%", label: "of claimed range delivered in tests (Autocar India)" },
      { value: "1,987", label: "Play Store reviews analysed" },
    ],
    process: [
      { label: "Research", caption: "A survey with 58 responses (13 EV drivers), plus charger audits and app reviews." },
      { label: "Competitors", caption: "Compared 7 apps to find what none of them handle: a charger going down mid-trip." },
      { label: "Low fidelity", caption: "Six selected black-and-white wireframes to fix structure and flow." },
      { label: "High fidelity", caption: "High-fidelity screens built on a design system: palette, type and components." },
      { label: "Prototype", caption: "An interactive prototype of the key flows." },
    ],
    decisions: [
      {
        title: "A backup plan is part of every trip",
        img: "/images/cases/ev-26.jpg",
        why: "Surveys, audits and reviews all pointed at the same failure: the plan breaks when a station is down.",
        tradeoff: "More screens and logic than a plain route planner.",
      },
      {
        title: "Show realistic range, not claimed range",
        img: "/images/cases/ev-range.jpg",
        why: "Real range is 64–93% of the claim, so arrival battery is predicted from realistic figures.",
        tradeoff: "The numbers look worse than the carmaker’s, so the app has to explain them.",
      },
    ],
    solution:
      "The app plans a long drive such as Delhi to Jaipur with predicted arrival battery, live charger status and cost, switches to a backup stop when a charger fails, works offline, and shows the plan on the lock screen.",
    results:
      "The research-to-design chain is documented: six findings, each linked to the screen it produced. The prototype has not yet been tested with real EV drivers, which is the next step.",
    gallery: [
      { src: "/images/cases/ev-phones.jpg", caption: "Key screens of the trip planner.", wide: true },
      { src: "/images/cases/ev-lockscreen.jpg", caption: "Lock-screen widget and offline mode." },
      { src: "/images/cases/ev-range.jpg", caption: "Realistic range, not claimed range." },
      { src: "/images/cases/ev-04.jpg", caption: "Problem statement." },
      { src: "/images/cases/ev-06.jpg", caption: "Secondary research: charger reliability and real range." },
      { src: "/images/cases/ev-10.jpg", caption: "Competitor analysis across seven apps." },
      { src: "/images/cases/ev-13.jpg", caption: "Primary persona." },
      { src: "/images/cases/ev-20.jpg", caption: "User flow." },
      { src: "/images/cases/ev-22.jpg", caption: "Selected low-fidelity wireframes." },
      { src: "/images/cases/ev-23.jpg", caption: "Design system: palette, type and components." },
      { src: "/images/cases/ev-24.jpg", caption: "High fidelity: plan a trip." },
      { src: "/images/cases/ev-25.jpg", caption: "High fidelity: drive and charge." },
      { src: "/images/cases/ev-26.jpg", caption: "High fidelity: when a station goes down." },
      { src: "/images/cases/ev-27.jpg", caption: "High fidelity: low battery, offline and widgets." },
      { src: "/images/cases/ev-29.jpg", caption: "Prototype flows." },
    ],
  },
  {
    slug: "flexprice",
    name: "Flexprice",
    year: "2026",
    claim: "Settings screens for a B2B billing console, designed during a one-month product design apprenticeship.",
    role: "Product design apprentice",
    team: "Flexprice product team",
    duration: "1 month, June 2026",
    tools: "Figma, React, Tailwind, shadcn/ui",
    cover: "/images/covers/flexprice.jpg",
    problem:
      "Flexprice is billing infrastructure for software companies. Its dashboard forms were long and dense, and the subscription flow asked for everything at once.",
    constraints:
      "One month, an existing codebase and component library, and a fixed palette: new designs had to use only existing Flexprice colours and match the live pages.",
    stats: [
      { value: "1", label: "month" },
      { value: "Live", label: "Settings work shipped" },
    ],
    process: [
      { label: "Understand", caption: "Studied the live product and positioning against competitors." },
      { label: "Subscription page", caption: "Exploration: rebuilt the creation flow with two-column fields, segmented controls and accordions." },
      { label: "Add Feature", caption: "Exploration: simplified the form using the real code snippets as the base." },
      { label: "Data Exports", caption: "Exploration: moved to a card layout matching Integrations, with a three-screen flow." },
      { label: "Invoice", caption: "Exploration: fixed alignment with a four-column meta grid and a clear totals section." },
    ],
    decisions: [
      {
        title: "Show only the Plan field first",
        why: "Hiding too much at the start felt confusing in review. Showing just Plan, then revealing the rest, kept the page calm without losing context.",
        tradeoff: "One extra step before the full form appears.",
      },
      {
        title: "Filters in a sidebar for Data Exports (exploration)",
        why: "After comparing layouts, a sidebar filter next to the content scaled best as more providers are added.",
        tradeoff: "Less width for the list on small screens.",
      },
    ],
    solution:
      "The Settings redesign (Billing, Customer Portal and Customer Onboarding) is live, and some of this work was used in the new Flexprice console. I also explored Subscription creation, Add Feature, Data Exports and Invoice pages in the product’s own stack and palette.",
    gallery: [
      { src: "/images/cases/fx-billing.jpg", caption: "Settings, Billing: invoice configuration.", wide: true },
      { src: "/images/cases/fx-portal.jpg", caption: "Settings, Customer Portal." },
      { src: "/images/cases/fx-onboarding.jpg", caption: "Settings, Customer Onboarding." },
    ],
  },
  {
    slug: "tonights-pick",
    name: "Tonight’s Pick",
    year: "2026",
    claim: "A watchlist app that ends “what should we watch” with a slot-machine ticket draw.",
    role: "Product designer and builder",
    team: "Solo",
    duration: "Autumn 2026",
    tools: "Next.js, Vercel, Neon Postgres",
    cover: "/images/covers/tonights-pick.jpg",
    problem:
      "Movies, series, K-dramas and anime pile up on separate lists, and choosing from them takes longer than watching.",
    constraints:
      "Zero budget, so free tiers and open source only. The app had to work for guests, let anyone export or delete their data, and keep the owner’s personal accounts out of the project.",
    process: [
      { label: "Brief", caption: "A personal tracker whose main job is a random pick, to cut decision fatigue." },
      { label: "Identity", caption: "A white, clean look with real posters, a three-tile logo and a white, red and popcorn-yellow palette." },
      { label: "The draw", caption: "A movie-ticket lottery machine that prints a ticket for the pick." },
      { label: "Accounts", caption: "Optional accounts with passkeys and email recovery; guests can still use everything." },
      { label: "Testing", caption: "Shared with three people for first user testing." },
    ],
    decisions: [
      {
        title: "Add a title by name only",
        why: "Details are fetched automatically, so adding something takes seconds and nobody types movie data by hand.",
        tradeoff: "Depends on an outside database being right about the title.",
      },
      {
        title: "Accounts are optional",
        why: "A watchlist should be usable at once. Accounts only add sync and recovery.",
        tradeoff: "Guest data lives on one device until the person signs up.",
      },
    ],
    solution:
      "A clean watchlist with posters and streaming info, and a lever you pull to get tonight’s pick as a printed ticket.",
    link: { label: "Open the live app", href: "https://tonightspick.vercel.app" },
    gallery: [
      { src: "/images/cases/tp-tonight.jpg", caption: "Tonight: the saved titles, ready for one pull. Demo list.", wide: true },
      { src: "/images/cases/tp-watchlist.jpg", caption: "Watchlist with type filters, search and streaming service per title. Demo data.", wide: true },
      { src: "/images/cases/tp-discover.jpg", caption: "Discover: suggestions matched to the titles on the list.", wide: true },
      { src: "/images/cases/tp-add.jpg", caption: "Add a title: type a name and the poster, rating and where to watch are filled in.", wide: true },
    ],
  },
];

// Default process strip, used when a project has no `process` of its own.
export const defaultProcess: Step[] = ["Research", "Sketches", "Wireframes", "Prototype", "Testing"].map((label) => ({
  label,
  caption: "",
}));

// Add file names from public/images/stills and public/images/letterforms here.
export const stills: string[] = [
  "/images/stills/still-01.jpg",
  "/images/stills/still-02.jpg",
  "/images/stills/still-21.jpg",
  "/images/stills/still-03.jpg",
  "/images/stills/still-04.jpg",
  "/images/stills/still-05.jpg",
  "/images/stills/still-06.jpg",
  "/images/stills/still-07.jpg",
  "/images/stills/still-22.jpg",
  "/images/stills/still-08.jpg",
  "/images/stills/still-09.jpg",
  "/images/stills/still-10.jpg",
  "/images/stills/still-11.jpg",
  "/images/stills/still-12.jpg",
  "/images/stills/still-23.jpg",
  "/images/stills/still-13.jpg",
  "/images/stills/still-14.jpg",
  "/images/stills/still-15.jpg",
  "/images/stills/still-16.jpg",
  "/images/stills/still-17.jpg",
  "/images/stills/still-24.jpg",
  "/images/stills/still-18.jpg",
  "/images/stills/still-19.jpg",
  "/images/stills/still-20.jpg",
  "/images/stills/still-25.jpg",
  "/images/stills/still-26.jpg",
  "/images/stills/still-27.jpg",
  "/images/stills/still-28.jpg",
  "/images/stills/still-29.jpg",
  "/images/stills/still-30.jpg",
  "/images/stills/still-31.jpg",
  "/images/stills/still-32.jpg",
  "/images/stills/still-33.jpg",
  "/images/stills/still-34.jpg",
  "/images/stills/still-35.jpg",
  "/images/stills/still-36.jpg",
  "/images/stills/still-37.jpg",
  "/images/stills/still-38.jpg",
  "/images/stills/still-39.jpg",
  "/images/stills/still-40.jpg",
  "/images/stills/still-41.jpg",
  "/images/stills/still-42.jpg",
  "/images/stills/still-43.jpg",
  "/images/stills/still-44.jpg",
];
export const letterforms: { src: string; title: string; year: string; ratio: string }[] = [];
export const STILL_RATIOS = ["4/5", "1/1", "3/2", "4/5", "3/2", "4/5", "1/1", "3/2", "4/5", "1/1", "4/5", "3/2"];
export const LETTER_RATIOS = ["1/1", "4/5", "3/2", "4/5", "3/2", "1/1", "3/2", "1/1", "4/5"];
