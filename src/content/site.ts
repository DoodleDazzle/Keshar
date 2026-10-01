import {
  ArrowRightLeft,
  Check,
  ClipboardCheck,
  Handshake,
  Headphones,
  Heart,
  Laptop,
  Lightbulb,
  MessageCircle,
  Package,
  Search,
  Smartphone,
  Sparkles,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type PageKey = "home" | "projects" | "services";

export const pageAccent: Record<
  PageKey,
  {
    glow: string;
    ring: "dotted" | "dashed" | "solid";
    icon: "person" | "briefcase" | "laptop";
    blur: string;
    label: string;
  }
> = {
  home: {
    glow: "#38bdf8",
    ring: "dotted",
    icon: "person",
    blur: "24px",
    label: "Home",
  },
  projects: {
    glow: "#ef4444",
    ring: "dashed",
    icon: "briefcase",
    blur: "16px",
    label: "Home",
  },
  services: {
    glow: "#22c55e",
    ring: "solid",
    icon: "laptop",
    blur: "20px",
    label: "Home",
  },
};

export const site = {
  name: "Keshar",
  roleLeft: "UI",
  roleRight: "DESIGNER",
  city: "Miami",
  product: "products",
  outcome: "ship faster and convert better",
  email: "keshartamakuwala4@gmail.com",
  phone: "",
  madeIn: "Next.js",
  copyright: "© 2026 Keshar. All rights reserved.",
};

export const hero = {
  greeting: `Hi, I'm ${site.name}`,
  subheading: "From landing pages to full websites, I design polished, conversion-focused experiences for founders and teams.",
  chatCta: "I Want to Chat",
};

export const socials = [
  { name: "Dribbble", href: "https://dribbble.com", icon: "dribbble" as const },
  { name: "X", href: "https://x.com", icon: "x" as const },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
];

export const stats = [
  { value: "1+", label: "Projects Completed" },
  { value: "1+", label: "Years of Experience" },
  { value: "1★", label: "Client Reviews" },
  { value: "1+", label: "Industries Served" },
  { value: "1+", label: "Happy Customers" },
  { value: "1%", label: "Client Retention Rate" },
];

export const aboutStatsLeft = [
  { value: "13+", label: "Projects Completed" },
  { value: "1+", label: "Years of Design Experience" },
  { value: "20+", label: "UI Screens Designed" },
];

export const aboutStatsRight = [{ value: "5+", label: "Industries Explored" }];

export const stack = [
  { name: "FIGMA", subtitle: "Interface Design" },
  { name: "PHOTOSHOP", subtitle: "Image Editing" },
  { name: "ILLUSTRATOR", subtitle: "Vector Design" },
  { name: "PHOTOPEA", subtitle: "Creative Editing" },
];

export const experience = [
  {
    title: "UI UX Designer",
    company: "Tupple Apps",
    year: "December 2024 – June 2025",
    role: "Internship",
  },
  {
    title: "Graphic Designer",
    company: "SVNM Hospital",
    year: "July 2025 – November 2025",
    role: "Job",
  },
  {
    title: "Graphic Designer",
    company: "Hunani Infotech",
    year: "December 2025 – Present",
    role: "Job",
  },
];

export const images = {
  heroAvatar: "/placeholders/avatar-hero.png",
  heroAvatarVideo: "/videos/avatar-hero.mp4",
  aboutImage: "",
  faqImage: "",
  footerCharacter: "",
  projectsHero: "/videos/projects-hero.mp4?v=3",
  servicesHero: "/videos/services-video.mp4",
  testimonialAvatar: "",
  projects: [
    {
      slug: "rare-time-ny",
      title: "Rare Time NY",
      subtitle: "Website Design",
      image: "/images/projects/rolex.jpeg",
      description:
        "For the Rare Time e-commerce website, the client provided references that we used as a starting point for the redesign. We first identified the key information and sections that needed to be on the homepage, then gradually built the complete website in Figma, including the content and overall visual direction. After presenting the designs, we incorporated the client’s feedback and made the required changes until the final website was approved.",
      liveDemo: "https://www.figma.com/proto/fsZ2PckGrGwOfHDgZw0B1J/Rare-Time-NY-Website-Mockup?node-id=71-72&viewport=2534%2C153%2C0.2&t=IsI6gfA5MMLnnHR3-1&scaling=scale-down-width&content-scaling=fixed&page-id=71%3A71",
      services: "UX/UI Design, Web Development",
      client: "Product Designer",
      duration: "One Week",
      date: "March 2026",
      gallery: [
        "/images/projects/rolex-1.jpeg",
        "/images/projects/rolex-2.jpeg",
        "/images/projects/rolex-3.jpeg",
        "/images/projects/rolex-4.jpeg",
      ],
    },
    {
      slug: "air-fold",
      title: "Air Fold",
      subtitle: "Web design",
      image: "/images/projects/air-fold.jpeg",
      description:
        "Air Fold is a focused ecommerce experience that makes discovering, comparing, and purchasing premium products feel effortless.",
      liveDemo: "https://getairfold.com/",
      services: "UX/UI Design, Web Development",
      client: "Product Designer",
      duration: "One Week",
      date: "March 2026",
      gallery: [
        "/images/projects/air-fold-1.jpg",
        "/images/projects/air-fold-2.jpg",
        "/images/projects/air-fold-3.jpg",
        "/images/projects/air-fold-3.jpg",
      ],
    },
    {
      slug: "halos-edge",
      title: "Halos Edge",
      subtitle: "Website Design",
      image: "/images/projects/halos-edge/halos-edge-1.png",
      description:
        "This project was for an energy drink brand like Redbull looking for a cool, bold, and colorful website. I started by understanding the client’s direction and collecting visual references for the overall style, colors, imagery, and layout. Using these references as inspiration, I explored different ideas and developed the complete website design in Figma, including the homepage, sections, visual hierarchy, typography, colors, and interactive elements.",
      liveDemo: "https://www.figma.com/proto/T6rFanEegaY40I7wHGJlK1/Portfolio-Work?node-id=2-5175&viewport=38%2C144%2C0.05&t=2F72joGuBREvKyZ6-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      services: "UX/UI Design, Web Development",
      client: "Product Designer",
      duration: "One Week",
      date: "March 2026",
      gallery: [
        "/images/projects/halos-edge/halos-edge-2.png",
        "/images/projects/halos-edge/halos-edge-3.png",
        "/images/projects/halos-edge/halos-edge-4.png",
        "/images/projects/halos-edge/halos-edge-5.png",
      ],
    },
    {
      slug: "living-space",
      title: "Living & Space",
      subtitle: "Web Design",
      image: "/images/projects/livingspace.jpeg",
      description:
        "Living & Space is a furniture product website where the client provided the color theme and product images, and I turned them into a complete website design in Figma. It was an urgent project, so I completed the entire website in just half a day on Holi — while everyone was out playing Holi, I was busy designing the website.",
      liveDemo: "https://www.figma.com/proto/1yagwzXq4UOdfRvRrxp9Wh/Living---Space-Website-Mockup?node-id=215-35&viewport=347%2C254%2C0.03&t=F6Ge2qEOJyGanfbn-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      services: "UX/UI Design, Web Development",
      client: "Product Designer",
      duration: "One Week",
      date: "March 2026",
      gallery: [
        "/images/projects/livingspace-1.jpg",
        "/images/projects/livingspace-2.jpg",
        "/images/projects/livingspace-3.jpg",
        "/images/projects/livingspace-4.jpg",
      ],
    },
    {
      slug: "strategic-ai-automation-leadership",
      title: "Strategic AI & Automation Leadership",
      subtitle: "Website Design",
      image: "/images/projects/strategic-ai/strategic-ai-1.png",
      description:
        "This was a personal portfolio website where the client already had an existing website with a similar style and color theme. I kept the same color direction and redesigned the complete website in Figma, giving it a cleaner and more polished look while staying consistent with the existing brand.",
      liveDemo: "https://www.mbjess.com/",
      services: "UX/UI Design, Web Development",
      client: "Product Designer",
      duration: "One Week",
      date: "March 2026",
      gallery: [
        "/images/projects/strategic-ai/strategic-ai-2.png",
        "/images/projects/strategic-ai/strategic-ai-3.png",
        "/images/projects/strategic-ai/strategic-ai-4.jpg",
        "/images/projects/strategic-ai/strategic-ai-5.png",
      ],
    },
  ],
  services: [
    { image: "" },
    { image: "" },
  ],
};

export const services = [
  {
    id: "01",
    title: "WEB DESIGN",
    tagline: "Design That Converts",
    description:
      "I design polished, conversion-focused websites that communicate your value clearly and feel effortless to use.",
    tags: [
      "Custom Websites",
      "Landing Pages",
      "Website Redesign",
      "Responsive Layouts",
    ],
    image: images.services[0].image,
    icon: "/images/icons/web-design.png",
  },
  {
    id: "02",
    title: "GRAPHIC DESIGN",
    tagline: "Designs That Communicate",
    description:
      "I create visual materials that elevate your brand, from marketing assets and presentations to polished creative work.",
    tags: [
      "Logo Design",
      "Marketing Materials",
      "Print Design",
      "Image Editing",
    ],
    image: images.services[1].image,
    icon: "/images/icons/graphics-design.png",
  },
];

export const process = [
  {
    id: "01",
    title: "Let's Talk",
    description:
      "We start with a conversation about your project, goals, and vision to understand exactly what you need.",
  },
  {
    id: "02",
    title: "Create & Refine",
    description:
      "I design concepts and share them with you. We collaborate, refine, and iterate until everything feels perfect.",
  },
  {
    id: "03",
    title: "Deliver & Launch",
    description:
      "I hand over final files, guide you through everything, and stay available for any questions or support.",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most website and product design projects take 2–6 weeks depending on scope. I'll share a clear timeline after our first call.",
  },
  {
    q: "How much do your services cost?",
    a: "Packages start with a discovery quote based on pages, features, and motion. Flexible retainers are available for ongoing work.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every engagement includes structured revision rounds so we can refine until the work feels right.",
  },
  {
    q: "What do I need to get started?",
    a: "A short brief, any existing brand assets, and a sense of your goals. If you don't have those yet, we'll shape them together.",
  },
];

export const testimonial = {
  quote:
    "Best designer I've worked with! Fast, professional, and the website looks incredible. Highly recommend!",
  name: "Sarah Mitchell",
  role: "Founder of Bloom Studio",
};

export const projectCapabilities = [
  { icon: Handshake, label: "Reliable partner" },
  { icon: Trophy, label: "Senior level quality" },
  { icon: Zap, label: "Fast execution" },
  { icon: Laptop, label: "System thinking" },
  { icon: ClipboardCheck, label: "Clear process" },
  { icon: Lightbulb, label: "On-brand, every time" },
  { icon: ArrowRightLeft, label: "Smooth handoff" },
  { icon: MessageCircle, label: "Thoughtful feedback" },
] satisfies { icon: LucideIcon; label: string }[];

export const serviceQualities = [
  { icon: Check, label: "Brand Consistency" },
  { icon: Heart, label: "Client Focused" },
  { icon: Package, label: "Flexible Packages" },
  { icon: Smartphone, label: "Mobile Responsive" },
  { icon: Search, label: "SEO Optimized" },
  { icon: Sparkles, label: "Custom Designs" },
  { icon: Headphones, label: "Ongoing Support" },
] satisfies { icon: LucideIcon; label: string }[];

export const bubbles = {
  projects: "Take a Look at My Portfolio",
  services: "What I Bring to the Table",
  about: "Let Me Introduce Myself",
  faq: "Frequently Answered Questions",
};

export const contact = {
  eyebrow: "CONTACT ME",
  heading: "Let's Work Together",
  body: "",
  schedulePrompt: "",
  scheduleCta: "Email Me",
};

export const graphicWorks = [
  {
    src: "/images/graphic-works/graphic-catalogue.png",
    title: "Graphic Catalogue",
  },
  {
    src: "/images/graphic-works/karen-biggers-cover.png",
    title: "Karen Biggers Cover",
  },
  {
    src: "/images/graphic-works/karen-biggers-logos.png",
    title: "Karen Biggers Logos",
  },
];
