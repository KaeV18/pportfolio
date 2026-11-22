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
    { label: "Letterforms", href: "/letterforms/" },
  ],
  hero: {
    photo: "/images/hero.jpg",
    caption: "[One line that sounds like you]",
    // The biggest text on the home page. `accent` must be a phrase inside `statement`; it is set in serif italic.
    statement: "I design [what] for [whom] so that [what changes].",
    accent: "[what changes]",
  },
  about: {
    short: "[Two or three lines: who you are, what you care about, what you are working toward.]",
    portraits: ["/images/me-3.jpg", "/images/me-4.jpg", "/images/me-2.jpg", "/images/me-1.jpg"], // reorder freely
    lead: "[Where you are from] > [where you are now].",
    paragraphs: [
      "[Paragraph 1: what you care about in design.]",
      "[Paragraph 2: how you work. One belief, one example.]",
      "[Paragraph 3: outside work, one line.]",
    ],
    experience: [
      { place: "[Company] / [Role]", when: "[Season Year]" },
      { place: "[Company] / [Role]", when: "[Season Year]" },
      { place: "[Company] / [Role]", when: "[Season Year]" },
      { place: "[Company] / [Role]", when: "[Season Year]" },
    ],
  },
};

export type Step = { label: string; caption: string; img?: string };
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
  process?: Step[]; // leave empty to use the default steps below
};

const NAMES = ["EV Trip Planner", "SignLingo", "Flexprice", "[Project 4 name]"];
export const projects: Project[] = [1, 2, 3, 4].map((n) => ({
  slug: `project-${n}`,
  name: NAMES[n - 1],
  year: "[YEAR]",
  claim: "[One line: what it is and why it matters, ideally with a number]",
  role: "[Role]",
  team: "[Team]",
  duration: "[Duration]",
  tools: "[Tools]",
  cover: "",
}));

// Default process strip shown in every case study. Override per project with `process`.
export const defaultProcess: Step[] = ["Research", "Sketches", "Wireframes", "Prototype", "Testing"].map((label) => ({
  label,
  caption: "[What you did and what you learned]",
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
];
export const letterforms: { src: string; title: string; year: string; ratio: string }[] = [];
export const STILL_RATIOS = ["4/5", "1/1", "3/2", "4/5", "3/2", "4/5", "1/1", "3/2", "4/5", "1/1", "4/5", "3/2"];
export const LETTER_RATIOS = ["1/1", "4/5", "3/2", "4/5", "3/2", "1/1", "3/2", "1/1", "4/5"];
