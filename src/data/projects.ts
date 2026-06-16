export type ProjectCategory = "featured" | "app";

export type Project = {
  id: string;
  category: ProjectCategory;
  name: string;
  eyebrow: string;
  description: string;
  purpose: string;
  problem: string;
  role: string;
  features: string[];
  technologies: string[];
  responsive: string;
  screenshot: string;
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
    eyebrow: "Client Website",
    description:
      "A polished counselling website for a registered social worker offering in-person and virtual support in St. Catharines, Ontario.",
    purpose:
      "Give prospective clients a clear place to learn about Tracy's services, approach, location, resources, and contact options.",
    problem:
      "People looking for counselling need quick trust signals, service clarity, and a low-friction path to ask questions or book a session.",
    role: "Built the React/Vite front end, organized the multi-page experience, implemented bilingual content flows, and added intake, course, and contact surfaces supported by server/API code.",
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
    responsive:
      "Responsive cards, navigation, content pages, and form layouts for desktop, tablet, and mobile screens.",
    screenshot: "/images/tracy-counselling-card.png",
    screenshotPosition: "center 18%",
    liveUrl: "https://www.nguyentracy.com/",
  },
  {
    id: "swim-with-leah",
    category: "featured",
    name: "Swim With Leah",
    eyebrow: "Service Website",
    description:
      "A modern website for a private swimming coach in Toronto and the GTA, focused on lessons, credentials, service areas, and inquiries.",
    purpose:
      "Present swim lesson options and help families or adults contact Leah with confidence.",
    problem:
      "A service provider needs to communicate experience, lesson types, availability areas, and contact details without making visitors dig.",
    role: "Built a responsive Next.js site with structured sections, animated interactions, SEO metadata, contact handling, and a production Vercel deployment.",
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
    responsive:
      "Designed with responsive section spacing, mobile navigation, and flexible service cards across viewport sizes.",
    screenshot: "/images/swim-with-leah-card.png",
    screenshotPosition: "center 12%",
    liveUrl: "https://www.swimwithleah.com/",
  },
  {
    id: "vegan-restaurant",
    category: "featured",
    name: "Vegan Restaurant Website",
    eyebrow: "Restaurant Website",
    description:
      "A Vietnamese vegan restaurant site for Cơm Chay Ngọc Hạnh with service information, menu items, gallery images, and ordering contact paths.",
    purpose:
      "Showcase vegan dishes and make it easy for customers to browse the menu, see ordering options, and contact the shop.",
    problem:
      "Small food businesses need a clear digital menu and direct ordering details that work well on phones.",
    role: "Built the Next.js interface, menu and gallery sections, contact calls to action, responsive layout, and public Vercel deployment.",
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
    responsive:
      "Responsive navigation, stacked content sections, menu cards, and contact actions for mobile ordering.",
    screenshot: "/images/vegan-restaurant-card.png",
    screenshotPosition: "center 15%",
    liveUrl: "https://v0-comchayngochanh.vercel.app/",
  },
  {
    id: "angelina-interpreting",
    category: "featured",
    name: "Angelina Interpreting",
    eyebrow: "Professional Service Website",
    description:
      "A bilingual Vietnamese-English interpreting website for medical, legal, and community interpretation services across Ontario.",
    purpose:
      "Present interpreting services, credentials, service settings, and booking paths in a polished public website.",
    problem:
      "People and organizations looking for interpretation support need clear service information, trust signals, language options, and a direct way to request a booking.",
    role: "Built the responsive Next.js interface, bilingual English/Vietnamese content, service and credential sections, contact form, schedule request flow, SEO metadata, structured data, and production Vercel deployment.",
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
    responsive:
      "Responsive hero, navigation, service cards, booking form, and contact sections for desktop, tablet, and mobile screens.",
    screenshot: "/images/angelina-interpreting-card.png",
    screenshotPosition: "center 18%",
    liveUrl: "https://angelinainterpreting.ca/",
  },
];

export const appProjects: Project[] = [
  {
    id: "eat-n-split",
    category: "app",
    name: "Eat N Split",
    eyebrow: "React App",
    description:
      "A bill-splitting app for tracking shared meal expenses and balances between friends.",
    purpose:
      "Help a user add friends, select a friend, and calculate who owes whom after splitting a bill.",
    problem:
      "Shared meals can be awkward to settle when payment amounts and balances are not tracked clearly.",
    role: "Implemented the React state flow, friend list, add-friend form, split-bill form, and balance updates.",
    features: [
      "Add a friend with avatar URL",
      "Select and close active friend records",
      "Split bill by payer",
      "Calculate friend/user balances",
      "Visual balance states for owing, owed, and even",
    ],
    technologies: ["React", "JavaScript", "Create React App", "CSS"],
    responsive:
      "Uses the portfolio's mobile override stylesheet so the compact form and friend list remain usable on small screens.",
    screenshot: "/images/eatnsplit.png",
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/eatnsplit/index.html",
  },
  {
    id: "travel-list",
    category: "app",
    name: "Travel List",
    eyebrow: "React App",
    description:
      "A packing-list app for adding, sorting, checking off, and clearing travel items.",
    purpose:
      "Give travelers a simple checklist that tracks quantity, packed status, and progress.",
    problem:
      "Packing is easy to forget or duplicate without a quick list that can be updated while planning.",
    role: "Built the React component structure, item state management, sorting controls, delete actions, and progress stats.",
    features: [
      "Add items with quantity",
      "Mark items packed",
      "Delete individual items",
      "Sort by input order, description, or packed status",
      "Clear list confirmation and packed percentage",
    ],
    technologies: ["React", "JavaScript", "Create React App", "CSS"],
    responsive:
      "Includes portfolio-level responsive overrides for the add form, list area, and action controls.",
    screenshot: "/images/travellist.png",
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/travellist/index.html",
  },
  {
    id: "weather-forecast",
    category: "app",
    name: "Weather Forecast",
    eyebrow: "API App",
    description:
      "A city weather app that searches locations and displays a multi-day forecast from Open-Meteo.",
    purpose:
      "Let users search for a city and quickly scan upcoming daily weather conditions.",
    problem:
      "Weather apps need clear loading states, useful daily summaries, and remembered location input.",
    role: "Implemented the class-based React app, API fetching, location persistence, loading state, icons, and forecast rendering.",
    features: [
      "City search with geocoding",
      "Open-Meteo daily forecast data",
      "Weather-code icon mapping",
      "Country flag display",
      "Local storage for the last searched location",
    ],
    technologies: ["React", "JavaScript", "Open-Meteo API", "CSS"],
    responsive:
      "Responsive card and form styling is layered over the compiled app for cleaner tablet and mobile use.",
    screenshot: "/images/weather-app.png",
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/weatherapp/index.html",
  },
  {
    id: "fast-react-pizza",
    category: "app",
    name: "Fast React Pizza",
    eyebrow: "React Router App",
    description:
      "A pizza-ordering demo with menu loading, cart management, checkout, and order status views.",
    purpose:
      "Model a small ordering workflow from entering a name through menu browsing, cart editing, and order submission.",
    problem:
      "Ordering flows need reliable routing, cart state, validation, and status feedback across multiple screens.",
    role: "Implemented the routed React app, Redux cart/user state, menu and order API calls, cart controls, checkout form, and order-status views.",
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
    responsive:
      "The compiled app uses responsive Tailwind utility classes and the portfolio mobile stylesheet for smaller screens.",
    screenshot: "/images/pizzamenufinal.png",
    screenshotPosition: "top center",
    liveUrl: "https://www.angelinamai.com/projects/pizzamenufinal/index.html",
  },
];

export const allProjects = [...featuredProjects, ...appProjects];
