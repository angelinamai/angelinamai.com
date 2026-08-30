export type CaseStudySection = {
  title: string;
  body: string;
  points?: string[];
};

export type CaseStudy = {
  projectId: string;
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  stack: string[];
  meta: { label: string; value: string }[];
  sections: CaseStudySection[];
};

export const tracyCaseStudy: CaseStudy = {
  projectId: "tracy-counselling",
  slug: "tracy-counselling",
  eyebrow: "Case Study",
  title: "Tracy Counselling",
  summary:
    "A bilingual React/Vite production site for a registered social worker that grew from public service pages into protected course access, payments, account history, and email-backed inquiry flows.",
  stack: [
    "React",
    "Vite",
    "React Router",
    "Clerk",
    "Supabase",
    "Stripe",
    "Express",
    "Resend",
  ],
  meta: [
    { label: "Role", value: "Front-End Developer" },
    { label: "Year", value: "2025" },
    { label: "Product", value: "Counselling website + course access flow" },
    { label: "Status", value: "Production site" },
  ],
  sections: [
    {
      title: "Brief",
      body: "Create a clear, trustworthy site where visitors can learn about services, location, resources, FAQs, courses, and contact options in English and Vietnamese.",
    },
    {
      title: "What I Owned",
      body: "I handled the React/Vite front end from route structure through responsive UI, forms, debugging, deployment, and client feedback iterations.",
      points: [
        "Multi-page React Router structure for service, contact, FAQ, resource, blog, and course pages.",
        "Bilingual public content flow across key visitor paths.",
        "Responsive contact and preliminary questionnaire experience.",
        "Client-driven iteration as requirements expanded beyond the original public site.",
      ],
    },
    {
      title: "Engineering Shape",
      body: "The project expanded into a small product surface, so the front end needed to coordinate with authentication, data, payments, and email handling.",
      points: [
        "Clerk protects course login, account, and learning routes.",
        "Stripe checkout and session confirmation connect purchases to course access.",
        "Supabase stores course purchase records for signed-in clients.",
        "Express/API handlers support course actions and contact intake.",
        "Resend supports the email-backed inquiry flow.",
      ],
    },
    {
      title: "Product Decisions",
      body: "The public counselling content stays easy to browse, while account-backed course access is separated into login, checkout, success, account, and protected learning paths.",
    },
    {
      title: "Hard Part",
      body: "The trickiest part was extending a service website into authenticated course access without making the main visitor journey feel heavier. I split the flow into clear boundaries, then verified the handoff between auth state, checkout confirmation, stored purchases, and protected routes.",
    },
    {
      title: "Result",
      body: "The deployed site gives Tracy a public service presence, bilingual visitor paths, and the codebase foundation for signed-in course purchases and cross-device course access.",
    },
  ],
};

const angelinaInterpretingCaseStudy: CaseStudy = {
  projectId: "angelina-interpreting",
  slug: "angelina-interpreting",
  eyebrow: "Case Study",
  title: "Angelina Interpreting",
  summary:
    "A Next.js bilingual service site for Vietnamese-English interpreting with service categories, scheduling flow, and contact paths.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  meta: [
    { label: "Role", value: "Front-End Developer" },
    { label: "Product", value: "Bilingual interpreting service website" },
    { label: "Status", value: "Production site" },
    { label: "Focus", value: "Service discovery, scheduling, responsive UI" },
  ],
  sections: [
    {
      title: "Brief",
      body: "Build a polished service website where visitors can understand interpreting services, credentials, language options, and ways to request an appointment.",
    },
    {
      title: "What I Owned",
      body: "I built the responsive Next.js interface, bilingual content structure, service and credential sections, contact form, schedule request flow, SEO metadata, and deployment path.",
      points: [
        "English and Vietnamese language toggle for the public site.",
        "Service sections for medical, legal, community, remote, and in-person interpreting.",
        "Schedule page with date, time, duration, and meeting-format controls.",
        "Contact and booking request handling with a mail fallback.",
      ],
    },
    {
      title: "Engineering Shape",
      body: "The site connects public service content with stateful language switching, schedule/contact flows, metadata, structured data, and analytics.",
    },
    {
      title: "Product Decisions",
      body: "The layout prioritizes quick service scanning, credential trust signals, and clear scheduling paths for visitors who may need information quickly.",
    },
    {
      title: "Result",
      body: "The deployed site gives the interpreting service a focused public presence with bilingual content, responsive service pages, and direct contact paths.",
    },
  ],
};

const swimWithLeahCaseStudy: CaseStudy = {
  projectId: "swim-with-leah",
  slug: "swim-with-leah",
  eyebrow: "Case Study",
  title: "Swim With Leah",
  summary:
    "A Next.js service site for a swim coach with lesson categories, credentials, service areas, and a Resend-backed inquiry flow.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend"],
  meta: [
    { label: "Role", value: "Front-End Developer" },
    { label: "Product", value: "Swimming coach service website" },
    { label: "Status", value: "Production site" },
    { label: "Focus", value: "Lesson discovery, inquiries, responsive UI" },
  ],
  sections: [
    {
      title: "Brief",
      body: "Create a service website where families and adult swimmers can understand lesson options, credentials, service areas, and how to contact Leah.",
    },
    {
      title: "What I Owned",
      body: "I built the Next.js layout, responsive lesson sections, mobile navigation, contact form route, SEO metadata, and deployment setup.",
      points: [
        "Hero, about, certifications, services, areas, testimonials, and contact sections.",
        "Mobile navigation and sticky header behavior.",
        "Contact form route backed by Resend.",
        "SEO metadata, sitemap, robots, Open Graph, and structured data.",
      ],
    },
    {
      title: "Engineering Shape",
      body: "The project uses TypeScript components, Tailwind CSS layouts, a Resend contact flow, structured data, analytics, and subtle Framer Motion section transitions.",
    },
    {
      title: "Product Decisions",
      body: "Lesson types, credentials, service areas, and booking calls to action are surfaced early so visitors can compare options without digging through the page.",
    },
    {
      title: "Result",
      body: "The deployed site gives Leah a clear public service presence with responsive content, service details, and a straightforward inquiry path.",
    },
  ],
};

const veganRestaurantCaseStudy: CaseStudy = {
  projectId: "vegan-restaurant",
  slug: "vegan-restaurant",
  eyebrow: "Case Study",
  title: "Cơm Chay Ngọc Hạnh",
  summary:
    "A Vietnamese vegan restaurant site with menu categories, gallery imagery, service information, and phone/Zalo ordering paths.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI"],
  meta: [
    { label: "Role", value: "Front-End Developer" },
    {
      label: "Product",
      value: "Restaurant website with menu and ordering paths",
    },
    { label: "Status", value: "Production site" },
    { label: "Focus", value: "Menu scanning, gallery, mobile ordering" },
  ],
  sections: [
    {
      title: "Brief",
      body: "Create a Vietnamese-language restaurant website that makes the menu, food imagery, service information, and ordering options easy to find.",
    },
    {
      title: "What I Owned",
      body: "I built the Next.js interface, menu and gallery sections, contact calls to action, responsive layout, and public deployment path.",
      points: [
        "Hero and service overview for the restaurant.",
        "Menu cards with prices, categories, and food images.",
        "Gallery and shop imagery.",
        "Phone and Zalo ordering calls to action.",
      ],
    },
    {
      title: "Engineering Shape",
      body: "The implementation organizes menu categories, image-driven cards, gallery content, phone/Zalo paths, SEO metadata, and analytics in a responsive Next.js interface.",
    },
    {
      title: "Product Decisions",
      body: "The page keeps ordering actions close to menu content and uses a phone-friendly structure for customers browsing before they contact the shop.",
    },
    {
      title: "Result",
      body: "The deployed site gives the restaurant a public menu, visual food presentation, and direct ordering paths across desktop and mobile.",
    },
  ],
};

const fastReactPizzaCaseStudy: CaseStudy = {
  projectId: "fast-react-pizza",
  slug: "fast-react-pizza",
  eyebrow: "React App Case Study",
  title: "Fast React Pizza",
  summary:
    "A routed React ordering-flow app with menu loading, cart management, checkout, and order status views.",
  stack: [
    "React",
    "React Router",
    "Redux Toolkit",
    "Tailwind CSS",
    "JavaScript",
    "External API",
  ],
  meta: [
    { label: "Role", value: "React Developer" },
    { label: "Product", value: "Ordering-flow React app" },
    { label: "Status", value: "Portfolio React build" },
    {
      label: "Focus",
      value: "Routing, cart state, API calls, checkout validation",
    },
  ],
  sections: [
    {
      title: "Brief",
      body: "Model a compact pizza-ordering workflow from entering a name through menu browsing, cart editing, checkout, and order status.",
    },
    {
      title: "What I Owned",
      body: "I implemented the routed React app, Redux cart/user state, menu and order API calls, cart controls, checkout form, and order-status views.",
      points: [
        "Name entry and menu route.",
        "Pizza menu loaded from an API.",
        "Cart quantity controls and totals.",
        "Checkout form with phone validation.",
        "Geolocation-assisted address lookup and priority ordering.",
      ],
    },
    {
      title: "Engineering Shape",
      body: "The app combines React Router, Redux Toolkit, API loading, form validation, cart updates, checkout submission, and order-status rendering.",
    },
    {
      title: "Product Decisions",
      body: "The flow separates menu browsing, cart review, checkout, and order tracking so each step has a clear purpose and state boundary.",
    },
    {
      title: "Result",
      body: "The build shows route-driven React application work with shared state, async data, validation, and a complete ordering interaction.",
    },
  ],
};

export const caseStudies: CaseStudy[] = [
  tracyCaseStudy,
  angelinaInterpretingCaseStudy,
  swimWithLeahCaseStudy,
  veganRestaurantCaseStudy,
  fastReactPizzaCaseStudy,
];
