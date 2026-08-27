export type ProjectCategory = "featured" | "app";

export type Project = {
  id: string;
  category: ProjectCategory;
  name: string;
  eyebrow: string;
  roleContext?: string;
  context: string;
  description: string;
  purpose: string;
  problem: string;
  role: string;
  technicalFocus: string;
  uiFocus: string;
  features: string[];
  technologies: string[];
  keyTechnologies: string[];
  responsive: string;
  screenshot: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
  mobileScreenshot?: string;
  mobileScreenshotWidth?: number;
  mobileScreenshotHeight?: number;
  screenshotPosition?: string;
  liveUrl: string;
  codeUrl?: string;
  status?: "In Development";
};

export const featuredProjects: Project[] = [
  {
    id: "tracy-counselling",
    category: "featured",
    name: "Tracy Counselling",
    eyebrow: "Production Project",
    roleContext: "Client Project · Front-End Development",
    context: "Bilingual production counselling website",
    description:
      "Bilingual React production site for a registered social worker, built from evolving client requirements through development, deployment, and iteration.",
    purpose:
      "Give prospective clients a clear place to learn about Tracy's services, approach, location, resources, and contact options.",
    problem:
      "Visitors need quick trust signals, clear service information, and a straightforward path to ask questions or book.",
    role: "Owned the client-driven React/Vite front end: routing, bilingual content, responsive forms, debugging, and deployment.",
    technicalFocus:
      "React Router pages with authentication, Supabase-backed data, Stripe payment flows, Express API surfaces, and Resend-supported contact/email flows.",
    uiFocus:
      "Trust-first information architecture, readable service paths, responsive forms, and bilingual navigation.",
    features: [
      "Multi-page React Router navigation",
      "English and Vietnamese content support",
      "Contact and preliminary questionnaire flow",
      "Services, FAQ, resources, blog, and course pages",
      "Client course/account infrastructure in the codebase",
    ],
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Clerk",
      "Supabase",
      "Stripe",
      "Express",
      "Resend",
      "CSS",
    ],
    keyTechnologies: ["React", "Vite", "React Router", "Supabase", "Clerk"],
    responsive:
      "Responsive cards, navigation, content pages, and form layouts for desktop, tablet, and mobile screens.",
    screenshot: "/images/tracy-counselling-card.png",
    screenshotWidth: 2880,
    screenshotHeight: 2360,
    mobileScreenshot: "/images/tracy-counselling-card-mobile.png",
    mobileScreenshotWidth: 860,
    mobileScreenshotHeight: 1800,
    screenshotPosition: "center 18%",
    liveUrl: "https://www.nguyentracy.com/",
  },
  {
    id: "swim-with-leah",
    category: "featured",
    name: "Swim With Leah",
    eyebrow: "Service Website",
    roleContext: "Service Website · Front-End Development",
    context: "Production service website for a swimming coach",
    description:
      "Responsive service website for a private swim coach, focused on lesson options, credentials, service areas, and booking inquiries.",
    purpose:
      "Present swim lesson options and help families or adults contact Leah with confidence.",
    problem:
      "Visitors need to compare lesson types, understand credentials, and find a clear route to inquire without digging through the page.",
    role: "Built the Next.js interface: responsive sections, contact form route, SEO metadata, and Vercel deployment.",
    technicalFocus:
      "Used Next.js, TypeScript, Tailwind CSS, Framer Motion, and Resend for the public site and contact flow.",
    uiFocus:
      "Lesson types, credentials, service areas, and booking calls to action are surfaced early with responsive spacing and mobile navigation.",
    features: [
      "Hero, about, certifications, services, areas, testimonials, and contact sections",
      "Mobile navigation and sticky header behavior",
      "Contact form route backed by Resend",
      "SEO metadata, sitemap, robots, Open Graph, and structured data",
      "Subtle Framer Motion section transitions",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Resend",
      "Vercel Analytics",
    ],
    keyTechnologies: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    responsive:
      "Designed with responsive section spacing, mobile navigation, and flexible service cards across viewport sizes.",
    screenshot: "/images/swim-with-leah-card.png",
    screenshotWidth: 2880,
    screenshotHeight: 2080,
    screenshotPosition: "center 12%",
    liveUrl: "https://www.swimwithleah.com/",
  },
  {
    id: "angelina-interpreting",
    category: "featured",
    name: "Angelina Interpreting",
    eyebrow: "Professional Service Website",
    roleContext: "Service Website · Front-End Development",
    context: "Production bilingual service website",
    description:
      "Bilingual Vietnamese-English interpreting website for medical, legal, and community interpretation services across Ontario.",
    purpose:
      "Present interpreting services, credentials, service settings, and booking paths in a polished public website.",
    problem:
      "Visitors need service details, language options, credentials, and a direct path to request an appointment.",
    role: "Built the responsive Next.js interface: bilingual content, service and credential sections, contact form, schedule request flow, SEO metadata, and Vercel deployment.",
    technicalFocus:
      "Implemented bilingual content state, contact and schedule request flows, SEO metadata, structured data, and analytics.",
    uiFocus:
      "Language switching, service-category scanning, credential trust signals, and clear scheduling paths support visitors with urgent service needs.",
    features: [
      "English and Vietnamese language toggle",
      "Medical, legal, community, remote, and in-person service sections",
      "Dedicated schedule page with date, time, duration, and meeting-format controls",
      "Contact and booking request handling with mail fallback",
      "SEO metadata, sitemap, robots, Open Graph, structured data, and analytics",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Lucide React",
      "Vercel Analytics",
    ],
    keyTechnologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    responsive:
      "Responsive hero, navigation, service cards, booking form, and contact sections for desktop, tablet, and mobile screens.",
    screenshot: "/images/angelina-interpreting-card.png",
    screenshotWidth: 2880,
    screenshotHeight: 2080,
    mobileScreenshot: "/images/angelina-interpreting-card-mobile.png",
    mobileScreenshotWidth: 1120,
    mobileScreenshotHeight: 1800,
    screenshotPosition: "center 18%",
    liveUrl: "https://angelinainterpreting.ca/",
  },
  {
    id: "vegan-restaurant",
    category: "featured",
    name: "Cơm Chay Ngọc Hạnh",
    eyebrow: "Restaurant Website",
    roleContext: "Restaurant Website · Front-End Development",
    context: "Production restaurant website with menu and ordering paths",
    description:
      "Vietnamese vegan restaurant website with menu sections, gallery imagery, service information, and direct ordering contact paths.",
    purpose:
      "Showcase vegan dishes and make it easy for customers to browse the menu, see ordering options, and contact the shop.",
    problem:
      "Customers need a clear phone-friendly menu and direct ordering details before contacting the shop.",
    role: "Built the Next.js interface: menu and gallery sections, contact calls to action, responsive layout, and public Vercel deployment.",
    technicalFocus:
      "Structured menu categories, dish imagery, gallery sections, and ordering calls to action in a responsive Next.js interface.",
    uiFocus:
      "Food imagery, menu scanning, Vietnamese-language content hierarchy, and phone-first ordering actions guide visitors quickly.",
    features: [
      "Hero and service overview",
      "Menu cards with prices, categories, and food images",
      "Gallery and shop imagery",
      "Phone and Zalo ordering calls to action",
      "Responsive Vietnamese-language layout",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "Vercel Analytics",
    ],
    keyTechnologies: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
    responsive:
      "Responsive navigation, stacked content sections, menu cards, and contact actions for mobile ordering.",
    screenshot: "/images/vegan-restaurant-card.png",
    screenshotWidth: 2880,
    screenshotHeight: 2080,
    mobileScreenshot: "/images/vegan-restaurant-card-mobile.png",
    mobileScreenshotWidth: 860,
    mobileScreenshotHeight: 1800,
    screenshotPosition: "center 15%",
    liveUrl: "https://v0-comchayngochanh.vercel.app/",
  },
];

export const appProjects: Project[] = [
  {
    id: "eat-n-split",
    category: "app",
    name: "Eat N Split",
    eyebrow: "React State Build",
    context: "Small React app for state and form practice",
    description:
      "A bill-splitting app for tracking shared meal expenses and balances between friends.",
    purpose:
      "Help a user add friends, select a friend, and calculate who owes whom after splitting a bill.",
    problem:
      "Shared meals can be awkward to settle when payment amounts and balances are not tracked clearly.",
    role: "Implemented the React state flow, friend list, add-friend form, split-bill form, and balance updates.",
    technicalFocus:
      "Component state, controlled forms, conditional rendering, selection state, and balance calculations.",
    uiFocus:
      "Compact list and form states make the selected friend and balance outcome easy to scan.",
    features: [
      "Add a friend with avatar URL",
      "Select and close active friend records",
      "Split bill by payer",
      "Calculate friend/user balances",
      "Visual balance states for owing, owed, and even",
    ],
    technologies: ["React", "JavaScript", "Create React App", "CSS"],
    keyTechnologies: ["React", "JavaScript", "CSS"],
    responsive:
      "Uses the portfolio's mobile override stylesheet so the compact form and friend list remain usable on small screens.",
    screenshot: "/images/eatnsplit.png",
    screenshotWidth: 802,
    screenshotHeight: 610,
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/eatnsplit/index.html",
  },
  {
    id: "travel-list",
    category: "app",
    name: "Travel List",
    eyebrow: "React Workflow Build",
    context: "Small checklist app for state and sorting practice",
    description:
      "A packing-list app for adding, sorting, checking off, and clearing travel items.",
    purpose:
      "Give travelers a simple checklist that tracks quantity, packed status, and progress.",
    problem:
      "Packing is easy to forget or duplicate without a quick list that can be updated while planning.",
    role: "Built the React component structure, item state management, sorting controls, delete actions, and progress stats.",
    technicalFocus:
      "Component composition, derived stats, sorting options, clear-list confirmation, and packed-state updates.",
    uiFocus:
      "Progress feedback, checklist controls, and sorting options keep the workflow simple and readable.",
    features: [
      "Add items with quantity",
      "Mark items packed",
      "Delete individual items",
      "Sort by input order, description, or packed status",
      "Clear list confirmation and packed percentage",
    ],
    technologies: ["React", "JavaScript", "Create React App", "CSS"],
    keyTechnologies: ["React", "JavaScript", "CSS"],
    responsive:
      "Includes portfolio-level responsive overrides for the add form, list area, and action controls.",
    screenshot: "/images/travellist.png",
    screenshotWidth: 3420,
    screenshotHeight: 1780,
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/travellist/index.html",
  },
  {
    id: "weather-forecast",
    category: "app",
    name: "Weather Forecast",
    eyebrow: "API Practice Build",
    context: "Small API app for loading and error-state practice",
    description:
      "A city weather app that searches locations and displays a multi-day forecast from Open-Meteo.",
    purpose:
      "Let users search for a city and quickly scan upcoming daily weather conditions.",
    problem:
      "Weather apps need clear loading states, useful daily summaries, and remembered location input.",
    role: "Implemented the class-based React app, API fetching, location persistence, loading state, icons, and forecast rendering.",
    technicalFocus:
      "API fetching, geocoding, loading state, local storage, weather-code mapping, and forecast rendering.",
    uiFocus:
      "Daily forecast cards, remembered city input, and weather icons make the response easier to scan.",
    features: [
      "City search with geocoding",
      "Open-Meteo daily forecast data",
      "Weather-code icon mapping",
      "Country flag display",
      "Local storage for the last searched location",
    ],
    technologies: ["React", "JavaScript", "Open-Meteo API", "CSS"],
    keyTechnologies: ["React", "JavaScript", "Open-Meteo API"],
    responsive:
      "Responsive card and form styling is layered over the compiled app for cleaner tablet and mobile use.",
    screenshot: "/images/weather-app.png",
    screenshotWidth: 2288,
    screenshotHeight: 1166,
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/weatherapp/index.html",
  },
  {
    id: "fast-react-pizza",
    category: "app",
    name: "Fast React Pizza",
    eyebrow: "Routed React Build",
    context: "Small ordering-flow app for routing and state practice",
    description:
      "A pizza-ordering demo with menu loading, cart management, checkout, and order status views.",
    purpose:
      "Model a small ordering workflow from entering a name through menu browsing, cart editing, and order submission.",
    problem:
      "Ordering flows need reliable routing, cart state, validation, and status feedback across multiple screens.",
    role: "Implemented the routed React app, Redux cart/user state, menu and order API calls, cart controls, checkout form, and order-status views.",
    technicalFocus:
      "React Router workflow, Redux Toolkit state, menu and order API calls, cart updates, checkout validation, and order-status views.",
    uiFocus:
      "A staged ordering flow keeps menu browsing, cart review, checkout, and order status separated into clear screens.",
    features: [
      "Name entry and menu route",
      "Pizza menu loaded from an API",
      "Cart quantity controls and totals",
      "Checkout form with phone validation",
      "Geolocation-assisted address lookup and priority ordering",
    ],
    technologies: [
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript",
      "External API",
    ],
    keyTechnologies: ["React", "React Router", "Redux Toolkit", "Tailwind CSS"],
    responsive:
      "The compiled app uses responsive Tailwind utility classes and the portfolio mobile stylesheet for smaller screens.",
    screenshot: "/images/pizzamenufinal.png",
    screenshotWidth: 1782,
    screenshotHeight: 906,
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/pizzamenufinal/index.html",
  },
];

export const allProjects = [...featuredProjects, ...appProjects];
