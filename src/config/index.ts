import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Balancewise",
  description:
    "Experience a smarter way to manage your finances with Balancewise, a cutting-edge application crafted on Next.js. Our mission is to empower you with effortless expense tracking and provide a comprehensive monthly budget overview. Gain control, make informed decisions, and pave the way to financial success, all in one user-friendly platform.",
  url: "https://balancewise.vercel.app",
};

export const sidebarItems = [
  {
    id: 1,
    label: "About",
    Icon: Icons.info,
    href: "/about",
  },
  {
    id: 2,
    label: "Customize",
    Icon: Icons.customize,
    href: "/customize",
  },
];

export const currencies = [
  {
    value: "₹",
    label: "INR",
  },
  {
    value: "$",
    label: "USD",
  },
  {
    value: "€",
    label: "EUR",
  },
  {
    value: "£",
    label: "GBP",
  },
];

export const accountTypes = [
  {
    value: "savings",
    label: "Savings",
  },
  {
    value: "investments",
    label: "Investments",
  },
  {
    value: "miscellaneous",
    label: "Miscellaneous",
  },
];

export const accounts = [
  {
    label: "Expense Tracker",
    href: "/expense-tracker/transactions",
    Icon: Icons.wallet,
  },
  {
    label: "Investments",
    href: "/investments",
    Icon: Icons.investments,
  },
  {
    label: "Savings",
    href: "/savings",
    Icon: Icons.piggy,
  },
  {
    label: "Miscellaneous",
    href: "/miscellaneous",
    Icon: Icons.siren,
  },
];

export const settings = [
  {
    label: "Transfer",
    href: "/transfer",
    Icon: Icons.repeat,
  },
  {
    label: "Customize",
    href: "/customize",
    Icon: Icons.customize,
  },
  {
    label: "Help",
    href: "/help",
    Icon: Icons.help,
  },
];

export const techStack = [
  {
    name: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    name: "tRPC",
    url: "https://trpc.io/",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Drizzle",
    url: "https://orm.drizzle.team/",
  },
  {
    name: "PlanetScale",
    url: "https://planetscale.com/",
  },
  {
    name: "NextAuth",
    url: "https://next-auth.js.org/",
  },
];

export const features = [
  "Authentication with NextAuth",
  "Type-safe API with tRPC",
  "Database with PlanetScale",
  "ORM with Drizzle",
  "Tailwind CSS for styling",
];

export const socials = [
  {
    id: 1,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sukrit-saha-b6117a242/",
  },
  {
    id: 2,
    label: "GitHub",
    href: "https://github.com/Sukrittt",
  },
  {
    id: 3,
    label: "Twitter",
    href: "https://twitter.com/SukritSaha11",
  },
  {
    id: 4,
    label: "Instagram",
    href: "https://www.instagram.com/sukrit_04/",
  },
];
