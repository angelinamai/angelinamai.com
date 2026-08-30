export type CaseStudySection = {
  title: string;
  body: string;
  points?: string[];
};

export type CaseStudy = {
  projectId: string;
  eyebrow: string;
  title: string;
  summary: string;
  stack: string[];
  meta: { label: string; value: string }[];
  sections: CaseStudySection[];
};

export const tracyCaseStudy: CaseStudy = {
  projectId: "tracy-counselling",
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
