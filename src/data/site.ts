export const company = {
  name: "Mapsoft Technologies LLP",
  short: "Mapsoft Technologies",
  email: "info@maptechsoft.com",
  whatsapp:
    "https://wa.me/918484960350?text=Hello%20%F0%9F%91%8B%2C%20I%20have%20a%20question!",
  offices: [
    {
      label: "India",
      lines: [
        "Office No 105, The Space, Grant Rd, near Gera Emerald City South, Rajaram Patil Nagar, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014",
      ],
      phone: "+91 8484960350",
      tel: "+918484960350",
    },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Gera%20Imperium%20Alpha%2C%20Kharadi%2C%20Pune%20411014&output=embed",
};

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };


export type Service = {
  slug: string;
  label: string;
  navLabel: string;
  intro: string;
  steps: { title: string; text: string }[];
  why: string[];
};

const step = (title: string, text: string) => ({ title, text });

export const services: Service[] = [
  {
    slug: "/custom-software-development",
    label: "Custom Software Development",
    navLabel: "Custom Software Development",
    intro:
      "Mapsoft offers expertise in developing custom software applications tailored to meet the unique requirements of their clients. This may include web applications, mobile apps, cloud services, and more.",
    steps: [
      step(
        "Tailored Software Architecture",
        "Welcome to the pinnacle of bespoke innovation at Mapsoft Technologies. We collaborate with you to design systems that align with your business goals, ensuring scalable and efficient software architecture.",
      ),
      step(
        "Design & Development",
        "From intuitive front-end experiences to robust backend systems, our seasoned developers create custom software using the latest tech stacks and agile methodologies to meet your unique needs.",
      ),
      step(
        "Rigorous Testing & Quality Assurance",
        "Every line of code undergoes extensive testing—manual, automated, performance, and security—to ensure quality, reliability, and seamless operation of your custom software.",
      ),
      step(
        "Deployment & Ongoing Support",
        "We offer smooth deployment, post-launch monitoring, and continuous optimization. Our commitment extends to long-term support that keeps your software efficient and up to date.",
      ),
    ],
    why: [
      "Deep collaboration to ensure solutions tailored to your exact business challenges",
      "Use of cutting-edge technologies and agile methodologies for faster, efficient delivery",
      "Robust, scalable, and secure software that grows with your organization",
      "Dedicated team offering end-to-end development—from ideation to post-deployment support",
      "Commitment to quality, innovation, and exceeding industry standards",
    ],
  },
  {
    slug: "/web-application-development",
    label: "Web Development",
    navLabel: "Web Development",
    intro:
      "We can build and maintain websites, e-commerce platforms, content management systems (CMS), and web applications using a variety of technologies and programming languages.",
    steps: [
      step("Discovery & Information Architecture", "We map your audience, content and conversion goals, then define a site structure and technical approach that supports them."),
      step("Interface & Experience Design", "Responsive, accessible interfaces designed around your brand, validated with prototypes before a line of production code is written."),
      step("Build & Integration", "Modern front-end frameworks and hardened back-end services, integrated with your CMS, payment gateways and third-party APIs."),
      step("Launch, Measure & Optimise", "Performance tuning, SEO fundamentals, analytics instrumentation and continuous iteration after go-live."),
    ],
    why: [
      "Fast, responsive experiences engineered for real-world network conditions",
      "Secure architecture with hardened authentication and data handling",
      "SEO and accessibility built in from the first sprint, not bolted on",
      "Seamless integration with business, payment and marketing platforms",
      "Maintainable code your team can extend for years to come",
    ],
  },
  {
    slug: "/mobile-app-development",
    label: "Mobile App Development",
    navLabel: "Mobile App Development",
    intro:
      "Specialized in creating mobile apps for various platforms like iOS and Android, catering to both consumer-facing and enterprise applications.",
    steps: [
      step("Product Definition", "We shape the app concept into a prioritised feature set with clear user journeys and platform decisions."),
      step("UX & Native-Feel Design", "Platform-aware interface design that respects iOS and Android conventions while staying unmistakably yours."),
      step("Cross-Platform Engineering", "Flutter and native development with offline support, push notifications and secure API integration."),
      step("Store Release & Iteration", "App Store and Play Store submission, crash monitoring, analytics and a roadmap of measured improvements."),
    ],
    why: [
      "One codebase, both platforms, without compromising native feel",
      "Offline-first patterns for field teams and unreliable connectivity",
      "Secure device-level data handling and authentication",
      "Store submission handled end to end by our team",
      "Post-launch monitoring and continuous feature delivery",
    ],
  },
  {
    slug: "/digital-marketing",
    label: "AI and Digital Marketing",
    navLabel: "AI and Digital Marketing",
    intro:
      "Leverage the power of AI to optimize your digital marketing strategies—from predictive analytics and customer segmentation to automated campaigns and real-time personalization.",
    steps: [
      step("Audit & Audience Modelling", "We analyse your current funnel and use AI-driven segmentation to identify the audiences worth investing in."),
      step("Strategy & Creative", "Channel mix, messaging and creative assets built around the segments and intents that convert."),
      step("Automated Campaign Execution", "Campaigns launched across search, social and email with automated bidding, personalisation and A/B testing."),
      step("Measure, Learn, Scale", "Attribution dashboards and predictive analytics show what to double down on and what to cut."),
    ],
    why: [
      "Predictive analytics that focus spend on the highest-intent audiences",
      "Real-time personalisation across web, email and ad channels",
      "Automated campaign management with continuous experimentation",
      "Transparent attribution reporting tied to revenue, not vanity metrics",
      "A team that understands both marketing and the technology behind it",
    ],
  },
  {
    slug: "/software-testing-qa",
    label: "Software Testing and Quality Assurance",
    navLabel: "Software Testing and QA",
    intro:
      "Mapsoft ensures the quality and reliability of software through various testing methods, including manual and automated testing, performance testing, security testing, and more.",
    steps: [
      step("Test Strategy & Planning", "We assess risk across your application and define the coverage, environments and tooling your product actually needs."),
      step("Manual & Exploratory Testing", "Experienced testers hunt for the defects scripted suites miss, across devices, browsers and edge-case journeys."),
      step("Automation Engineering", "Reliable regression suites integrated into your CI pipeline so every release is verified in minutes, not days."),
      step("Performance & Security Validation", "Load, stress and penetration testing that proves your system holds up under real pressure."),
    ],
    why: [
      "Balanced manual and automated coverage tuned to your release cadence",
      "CI-integrated regression suites that catch defects before customers do",
      "Performance benchmarking with clear, reproducible results",
      "Security testing aligned to recognised industry standards",
      "Clear, actionable defect reporting your developers can act on immediately",
    ],
  },
  {
    slug: "/software-maintenance-support",
    label: "Software Maintenance and Support",
    navLabel: "Software Maintenance",
    intro:
      "Ongoing support for software applications, including bug fixes, updates, enhancements, and troubleshooting to ensure that the software runs smoothly over time.",
    steps: [
      step("Onboarding & Knowledge Transfer", "We document your systems, environments and dependencies so support starts from understanding, not guesswork."),
      step("Proactive Monitoring", "Health checks, alerting and log analysis surface issues before your users report them."),
      step("Fixes & Enhancements", "Prioritised bug fixes, security patches and small enhancements delivered on a predictable cadence."),
      step("Reporting & Service Reviews", "Regular reviews of ticket trends, response times and improvement opportunities."),
    ],
    why: [
      "Defined response and resolution expectations with measurable service levels",
      "Proactive monitoring that prevents outages instead of reacting to them",
      "Predictable flat-rate plans that make budgeting straightforward",
      "A team that keeps dependencies, patches and security current",
      "Continuous small improvements that compound over time",
    ],
  },
  {
    slug: "/legacy-software-modernization",
    label: "Legacy Software Modernization",
    navLabel: "Legacy Modernization",
    intro:
      "Bring ageing business-critical systems into the modern era without disrupting operations. We modernise architecture, data and interfaces incrementally, protecting the logic that took years to get right.",
    steps: [
      step("System Assessment", "We audit code, data and integrations to map risk, technical debt and the true cost of the status quo."),
      step("Modernisation Roadmap", "A phased plan — rehost, refactor or rebuild — sequenced so value lands early and disruption stays low."),
      step("Incremental Migration", "Strangler-pattern delivery moves functionality module by module while the legacy system keeps running."),
      step("Decommission & Optimise", "Data validation, cutover and safe retirement of legacy components, followed by performance tuning."),
    ],
    why: [
      "Business continuity throughout — no risky big-bang cutovers",
      "Preservation of hard-won business logic and historical data",
      "Modern, supportable technology stacks that attract talent",
      "Lower infrastructure and licensing cost after migration",
      "A clear roadmap with measurable milestones at every phase",
    ],
  },
  {
    slug: "/ui-design",
    label: "UI/UX Design",
    navLabel: "UI/UX Design",
    intro:
      "Design that makes complex software feel obvious. We research, prototype and craft interfaces that reduce training time, cut support tickets and make your product a pleasure to use.",
    steps: [
      step("Research & Discovery", "User interviews, task analysis and competitive review to understand who uses the product and what slows them down."),
      step("Wireframes & Prototypes", "Low-fidelity flows and clickable prototypes that let us test ideas before development starts."),
      step("Visual Design System", "A consistent component library, typography scale and colour system your engineers can build against."),
      step("Usability Testing & Handoff", "Validated designs, annotated specs and developer handoff with ongoing design support."),
    ],
    why: [
      "Design decisions grounded in real user research, not opinion",
      "Reusable design systems that keep future work fast and consistent",
      "Accessibility considered at every stage, not audited at the end",
      "Prototypes that de-risk expensive development decisions",
      "Close collaboration between designers and the engineers who build it",
    ],
  },
  {
    slug: "/database-development-management",
    label: "Database Development & Management",
    navLabel: "Database Management",
    intro:
      "Your data is your most valuable asset. We design, tune and manage databases that stay fast, secure and reliable as your transaction volumes grow.",
    steps: [
      step("Data Modelling & Design", "Normalised, well-indexed schemas designed around how your application actually queries data."),
      step("Migration & Integration", "Safe migration between platforms and versions, with integration pipelines that keep systems in sync."),
      step("Performance Tuning", "Query analysis, indexing strategy and configuration tuning that removes bottlenecks."),
      step("Backup, Security & Monitoring", "Tested recovery procedures, access controls, encryption and continuous health monitoring."),
    ],
    why: [
      "Deep SQL Server and relational database expertise",
      "Measurable query performance improvements, not guesswork",
      "Backup and disaster recovery plans that are actually tested",
      "Security hardening and least-privilege access design",
      "Scalable architecture ready for growing data volumes",
    ],
  },
  {
    slug: "/devops",
    label: "DevOps & Cloud Services",
    navLabel: "DevOps & Cloud Services",
    intro:
      "Ship more often with less risk. We build automated pipelines, infrastructure as code and observable cloud environments so releases become routine rather than an event.",
    steps: [
      step("Assessment & Cloud Strategy", "We review your environments, release process and cost profile, then choose the right cloud approach."),
      step("Pipeline Automation", "CI/CD pipelines with automated build, test, security scanning and repeatable deployments."),
      step("Infrastructure as Code", "Reproducible environments defined in code, with containerisation and sensible scaling policies."),
      step("Observability & Cost Control", "Monitoring, alerting and cost dashboards that keep the platform healthy and affordable."),
    ],
    why: [
      "Deployments that take minutes and can be rolled back safely",
      "Reproducible environments that eliminate 'works on my machine'",
      "Cloud spend visibility and right-sizing that lowers monthly bills",
      "Security and compliance checks automated into the pipeline",
      "Monitoring that tells you about issues before customers do",
    ],
  },
  {
    slug: "/technology-consulting",
    label: "Consulting & Advisory",
    navLabel: "Consulting & Advisory",
    intro:
      "Straight answers to hard technology questions. Our consultants help you choose platforms, plan investments and align technology decisions with measurable business outcomes.",
    steps: [
      step("Business & Technical Discovery", "We learn your operating model, constraints and goals before recommending anything."),
      step("Current State Assessment", "An honest evaluation of architecture, processes, vendors and team capability."),
      step("Roadmap & Business Case", "Prioritised recommendations with cost, effort and expected return clearly laid out."),
      step("Execution Support", "We stay involved through delivery to make sure the plan survives contact with reality."),
    ],
    why: [
      "Vendor-neutral advice focused on your outcome, not a licence sale",
      "Recommendations backed by hands-on delivery experience",
      "Clear business cases that finance teams can approve",
      "Realistic roadmaps sequenced around your capacity to absorb change",
      "Ongoing advisory as your business and technology evolve",
    ],
  },
  {
    slug: "/dedicated-development-teams",
    label: "Dedicated Development Teams",
    navLabel: "Dedicated Teams",
    intro:
      "Extend your engineering capacity with a dedicated Mapsoft team that works as an integrated part of your organisation — your process, your tools, your priorities.",
    steps: [
      step("Skill Mapping", "We define the exact roles, seniority and technology mix your roadmap requires."),
      step("Team Assembly", "Vetted engineers selected and introduced to you, with final say on every hire."),
      step("Integration & Ramp-Up", "Your ceremonies, your backlog, your tooling — the team plugs into how you already work."),
      step("Scale & Retain", "Flexible scaling up or down, with retention practices that keep knowledge in the team."),
    ],
    why: [
      "Full control over priorities without the overhead of direct hiring",
      "Experienced engineers productive within weeks, not months",
      "Transparent pricing with no hidden recruitment fees",
      "Flexible scaling as your roadmap expands or contracts",
      "Knowledge retention through low-turnover, long-running teams",
    ],
  },
  {
    slug: "/offshore-nearshore-outsourcing",
    label: "Offshore & Nearshore Outsourcing",
    navLabel: "Offshore/Nearshore",
    intro:
      "Access world-class engineering at a sustainable cost. Our India and US presence gives you overlapping working hours, strong communication and genuine delivery accountability.",
    steps: [
      step("Engagement Design", "We agree scope, model and governance — fixed scope, time and materials or managed capacity."),
      step("Transition & Knowledge Transfer", "Structured onboarding documents your systems and de-risks the handover."),
      step("Delivery in Overlap Hours", "Working windows aligned to your timezone with daily communication rhythms."),
      step("Governance & Reporting", "Clear metrics, regular reviews and a single accountable delivery manager."),
    ],
    why: [
      "Meaningful cost savings without compromising engineering quality",
      "Timezone overlap that keeps collaboration genuinely real-time",
      "Established processes for secure, compliant remote delivery",
      "A single point of accountability for every deliverable",
      "Proven track record across cloud, web and mobile programmes",
    ],
  },
  {
    slug: "/project-management",
    label: "Project Management",
    navLabel: "Project Management",
    intro:
      "Disciplined delivery management that keeps scope, budget and expectations under control from kick-off to handover.",
    steps: [
      step("Initiation & Planning", "Objectives, scope, milestones and success criteria agreed and documented up front."),
      step("Execution & Coordination", "Sprint planning, dependency management and daily coordination across every workstream."),
      step("Risk & Change Control", "Risks tracked and mitigated early; change requests assessed for impact before approval."),
      step("Delivery & Retrospective", "Structured handover, benefit measurement and lessons captured for the next phase."),
    ],
    why: [
      "Certified project managers experienced in agile and hybrid delivery",
      "Transparent reporting on scope, schedule and budget health",
      "Early risk identification instead of late surprises",
      "Disciplined change control that protects your budget",
      "A single owner accountable for the outcome",
    ],
  },
  {
    slug: "/documentation-training",
    label: "Documentation & Training",
    navLabel: "Docs & Training",
    intro:
      "Software only delivers value when people can use it. We produce clear documentation and hands-on training that shortens adoption and reduces dependency on your support desk.",
    steps: [
      step("Audience & Needs Analysis", "We identify each user group and what they actually need to know to do their job."),
      step("Content Development", "User guides, admin manuals, quick-reference cards and technical documentation, written plainly."),
      step("Training Delivery", "Live or recorded sessions, role-based and built around real tasks rather than feature tours."),
      step("Maintenance & Refresh", "Documentation kept current as your software evolves, with refresher sessions as needed."),
    ],
    why: [
      "Plain-language content written for the people who use the system",
      "Role-based training that respects everyone's time",
      "Searchable, maintainable documentation your team owns",
      "Measurable reduction in repetitive support requests",
      "Onboarding materials that make new hires productive faster",
    ],
  },
  {
    slug: "/support",
    label: "24/7 Support",
    navLabel: "24/7 Support",
    intro:
      "Around-the-clock support for business-critical systems. Whenever something breaks, a responsive Mapsoft engineer is available to get you running again.",
    steps: [
      step("Service Level Agreement", "We work with each client to establish specific expectations and measurable service levels."),
      step("Multi-Channel Intake", "Phone, email, WhatsApp and ticket portal — raise an issue however suits the moment."),
      step("Triage & Resolution", "Issues classified by impact, escalated where required and resolved by named engineers."),
      step("Root Cause & Prevention", "Post-incident analysis and permanent fixes so the same problem does not return."),
    ],
    why: [
      "Genuine 24/7 coverage across India and US timezones",
      "Clear consequences defined for missed service levels",
      "Escalation paths that reach senior engineers quickly",
      "Root-cause analysis that reduces repeat incidents",
      "One team supporting your entire technology stack",
    ],
  },
  {
    slug: "/cost-effective-solutions",
    label: "Cost-effective Solutions",
    navLabel: "Cost-effective Solutions",
    intro:
      "Mapsoft offers cost-effective solutions compared to in-house development teams by leveraging lower labor costs in different regions — without compromising on engineering quality.",
    steps: [
      step("Cost & Capability Review", "We benchmark your current spend against the outcomes it delivers."),
      step("Right-Sized Engagement", "A delivery model matched to your budget — shared, dedicated or project-based."),
      step("Efficient Delivery", "Reusable components, automation and proven accelerators reduce build effort."),
      step("Continuous Optimisation", "Ongoing review of licensing, infrastructure and effort to keep costs trending down."),
    ],
    why: [
      "Significantly lower total cost than building an in-house team",
      "Flat-rate options that make monthly costs predictable",
      "No recruitment, onboarding or idle-capacity overhead",
      "Accelerators and reusable assets that shorten delivery",
      "Transparent pricing with no surprises on the invoice",
    ],
  },
];

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tech Solutions", to: "/tech-solutions" },
  {
    label: "Services",
    to: "/services",
    children: services.map((s) => ({ label: s.navLabel, to: s.slug })),
  },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const heroSlides = [
  {
    title: "Welcome to Mapsoft Technologies",
    text: "Empowering Businesses with Innovative IT Solutions and Technology!",
  },
  {
    title: "Explore Our Mobile Applications",
    text: "Designed to enhance your business experience.",
  },
  {
    title: "Software Testing & Quality Assurance",
    text: "Mapsoft offers cost-effective solutions compared to in-house development teams by leveraging lower labor costs in different regions.",
  },
  {
    title: "AI and Digital Marketing Solutions",
    text: "Boost your brand's online presence with our expert strategies.",
  },
  {
    title: "IoT Services",
    text: "Revolutionizing businesses with smart device connectivity.",
  },
  {
    title: "Application Development",
    text: "Transform your ideas into reality with our expert design and development.",
  },
];

export const highlightCards = [
  {
    title: "Industries Served",
    text: "A wide range of industries from A to Z trust Mapsoft technology to power their businesses.",
    cta: "FIND YOUR INDUSTRY",
    to: "/tech-solutions",
  },
  {
    title: "Fast Implementation",
    text: "Average implementation times are measured in weeks or months, not years.",
    cta: "IMPLEMENTATION",
    to: "/services",
  },
  {
    title: "Why Mapsoft Technologies?",
    text: "Our engineering covers everything distributors and light manufacturers need.",
    cta: "TECH SOLUTIONS",
    to: "/tech-solutions",
  },
];

export const aboutChecklist = [
  {
    title: "Software Design and Development",
    text: "We design and develop custom software tailored to your business needs, helping you streamline operations and improve efficiency.",
  },
  {
    title: "Mobile Application",
    text: "We create custom mobile apps for Android, iOS, and Windows that cater to your specific business requirements.",
  },
  {
    title: "Database Design and Development",
    text: "We offer expert database design and development services to ensure your data is structured, secure, and scalable.",
  },
  {
    title: "Database Consulting",
    text: "Our consulting services help businesses optimize their database performance and security to drive better data-driven decisions.",
  },
];

export const aboutCopy = {
  body: "At Mapsoft Technologies, we aim to provide cutting-edge technology solutions that enable businesses to achieve their goals. We focus on delivering high-quality software, applications, and digital marketing services that enhance operational efficiency and foster business growth.",
  vision:
    "Our goal is to become a leading software product development company and offer comprehensive solutions to our customers. We are committed to helping our customers achieve their business goals, as we believe their success is our success.",
  visionQuote:
    "We believe in working with accuracy and providing the best quality.",
  mission:
    "Our mission is to provide innovative and reliable technology solutions that empower businesses to thrive in a digital world. We aim to create high-quality software, applications, and digital marketing services that address our clients' unique challenges and drive growth.",
  missionQuote:
    "Our commitment is to deliver excellence through innovation, trust, and dedication to our clients' success.",
  subheading:
    "Your One Stop Shop for all Custom Software Development, Mobile Apps Development and Digital Marketing Services",
};

export const strengths = [
  { label: "Angular.TS", value: 95 },
  { label: ".NET Core", value: 95 },
  { label: "HTML", value: 100 },
  { label: "CSS", value: 95 },
  { label: "SQL Server", value: 95 },
  { label: "Flutter", value: 85 },
  { label: "WordPress", value: 85 },
  { label: "JavaScript", value: 95 },
];

export const stats = [
  { value: 39, suffix: "+", label: "Happy Clients" },
  { value: 48, suffix: "+", label: "Projects" },
  { value: 24, suffix: "/7", label: "Hours Of Support" },
  { value: 39, suffix: "+", label: "Smart Workers" },
];

export const clients = [
  "ToTire",
  "PacWest",
  "Langford",
  "Greeny Supply",
  "Sliman Butler/Pivot",
  "Economy",
  "Brightbolt",
  "Badger",
  "Semco",
  "Premier Bldg Supply",
  "Universal Building Services",
  "Quickscrews",
  "Weldcote",
  "Valley Packaging",
  "Meister",
  "Lamers",
  "Packard Forest",
  "Mid Valley",
  "Mid City",
  "Merchandise Equipment",
  "Abrasive Supply",
  "ADS Solutions",
  "Davis Products",
  "Hammons",
];

export const technologies = [
  "Angular",
  ".NET Core",
  "React",
  "Flutter",
  "Node.js",
  "SQL Server",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "WordPress",
  "TypeScript",
  "Python",
  "MongoDB",
  "Figma",
];

export const testimonials = [
  {
    title: "Ongoing IT Support and Maintenance",
    name: "Jeffery William",
    role: "COO",
    quote:
      "We value a technology partner who understands our requirements and responds constructively to technical challenges. Mapsoft Technologies focuses on practical solutions, application improvements, and maintaining software that supports our business needs.",
  },
  {
    title: "Web Application Development",
    name: "Sara Wilson",
    role: "Designer",
    quote:
      "The team at Mapsoft Technologies worked to understand our application requirements and business processes. Their focus on functionality and a user-friendly interface helped us move toward a more organized and efficient digital workflow.",
  },
  {
    title: "Mobile Application Development",
    name: "Jena Karlis",
    role: "Store Owner",
    quote:
      "Mapsoft Technologies understood our vision for a mobile application and helped us shape it into a practical digital solution. Their attention to application functionality and user experience was valuable throughout the development process.",
  },
  {
    title: "Cloud ERP Implementation",
    name: "Ian Pereira",
    role: "CEO & Director",
    quote:
      "Manish from Mapsoft Technologies provided a customized ERP solution aligned with our business requirements. The system helped us streamline our business processes, improve data visibility, and manage our daily operations more efficiently. The team was supportive throughout the implementation.",
  },
  {
    title: "Custom Software Development",
    name: "John Larson",
    role: "Entrepreneur",
    quote:
      "We needed software tailored to our specific business workflow, and Mapsoft Technologies helped us translate our requirements into a practical solution. Their technical approach and willingness to understand our needs made the development process more structured.",
  },
];

export type PortfolioItem = {
  title: string;
  text: string;
  category: "Mobile" | "Web";
};

export const portfolio: PortfolioItem[] = [
  { title: "Mobile App Development", text: "Custom-built mobile applications tailored to your business needs.", category: "Mobile" },
  { title: "Modern Web Design", text: "Innovative and user-friendly website designs for businesses and startups.", category: "Web" },
  { title: "Enterprise Web Portal", text: "Scalable and secure web portals for enterprise operations.", category: "Web" },
  { title: "Custom Web Applications", text: "Powerful and dynamic web applications built for performance and scalability.", category: "Web" },
  { title: "Cloud Operations Platform", text: "A next-gen cloud platform designed to enhance operational efficiency.", category: "Web" },
  { title: "E-Commerce Mobile App", text: "Feature-rich mobile app solutions for online stores and businesses.", category: "Mobile" },
];

export const team = [
  { name: "Manish Yengantiwar", role: "CEO", detail: "Chief Executive Officer", initials: "MY" },
  { name: "Prrasad Patill", role: "CMO", detail: "Chief Marketing Officer", initials: "PP" },
  { name: "Sandeep Ghatge", role: "CTO", detail: "Chief Technical Officer", initials: "SG" },
];

export const faqs = [
  {
    q: "What kind of response times can I expect?",
    a: "We work with each client to establish specific expectations. Our measurable service levels specify clear consequences for not living up to agreed-upon expectations.",
  },
  {
    q: "How does a flat rate billing save me money?",
    a: "Flat-rate billing gives you the ability to budget your expenses so you can better focus on your core business goals. We customize each service package for your unique business, so you only pay for what you need. We serve as your \u201cone stop shop\u201d for all your managed IT services needs. And we do it all for one fixed monthly cost \u2013 we don't profit from your pain!",
  },
  {
    q: "What type of products & services do you provide?",
    a: "We provide complete IT services. You only need to share your requirements with us.",
  },
  {
    q: "What if we already have an internal IT department?",
    a: "No problem! We offer scalable solutions that can be tailored to meet your specific needs. Whether you need a full package of managed IT services and consulting, security solutions or service desk support, we make it simple with an affordable and customized flat-rate service plan.",
  },
  {
    q: "What should I do before I call for help?",
    a: "When possible, write down any information about error messages and take screenshots of your issue. Next, attempt to recreate the issue.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept Wire Transfer to our current bank account, UPI Payments & Payment via PayPal.",
  },
];

export const footerServices = [
  { label: "Software Solutions", to: "/custom-software-development" },
  { label: "Web Application Solutions", to: "/web-application-development" },
  { label: "Mobile App Development", to: "/mobile-app-development" },
  { label: "AI & Digital Marketing", to: "/digital-marketing" },
  { label: "Quality Assurance Services", to: "/software-testing-qa" },
  { label: "Software Support Services", to: "/software-maintenance-support" },
  { label: "Legacy Software Modernization", to: "/legacy-software-modernization" },
  { label: "UI/UX Design", to: "/ui-design" },
];

export const usefulLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Tech Solutions", to: "/tech-solutions" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];
