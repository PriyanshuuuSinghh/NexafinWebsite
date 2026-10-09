/* ─────────────────────────────────────────────────────────────────────────────
 * Nixafin navigation — single source of truth.
 * Every link in the Navbar, Footer and mobile menu references this file.
 * ───────────────────────────────────────────────────────────────────────────── */

export type NavItem = { label: string; href: string };
export type DropdownItem = NavItem & { description?: string };
export type NavEntry = NavItem & { dropdown?: DropdownItem[] };

/* ── Primary navigation (Navbar) ─────────────────────────────────────────── */

export const primaryNav: NavEntry[] = [
  {
    label: "Products",
    href: "/products",
    dropdown: [
      {
        label: "NxPay",
        href: "/products/nxpay",
        description: "Accept and disburse payments",
      },
      {
        label: "NxFlow",
        href: "/products/nxflow",
        description: "Automate payment workflows",
      },
      {
        label: "NxCollect",
        href: "/products/nxcollect",
        description: "Collect recurring payments",
      },
      {
        label: "NxBiz",
        href: "/products/nxbiz",
        description: "Business banking and payouts",
      },
      {
        label: "NxSecure",
        href: "/products/nxsecure",
        description: "Fraud prevention and compliance",
      },
      {
        label: "Bharat Connect",
        href: "/products/bharat-connect",
        description: "India's payment infrastructure",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        label: "Businesses",
        href: "/solutions#businesses",
        description: "End-to-end payment stack",
      },
      {
        label: "Platforms",
        href: "/solutions#platforms",
        description: "Embed payments in your platform",
      },
      {
        label: "Marketplaces",
        href: "/solutions#marketplaces",
        description: "Split payments and vendor payouts",
      },
      {
        label: "Global Businesses",
        href: "/solutions#global",
        description: "Accept and send money worldwide",
      },
    ],
  },
  {
    label: "Developers",
    href: "/developers",
    dropdown: [
      {
        label: "Documentation",
        href: "/developers#docs",
        description: "Guides and technical reference",
      },
      {
        label: "API Reference",
        href: "/developers#api",
        description: "Complete API documentation",
      },
      {
        label: "SDKs",
        href: "/developers#sdks",
        description: "Client and server libraries",
      },
      {
        label: "Integration Guides",
        href: "/developers#guides",
        description: "Step-by-step integration help",
      },
    ],
  },
  {
    label: "Global",
    href: "/global",
    dropdown: [
      {
        label: "Cross-border",
        href: "/global#cross-border",
        description: "Send and receive internationally",
      },
      {
        label: "FX",
        href: "/global#fx",
        description: "Competitive FX rates",
      },
      {
        label: "Global Accounts",
        href: "/global#accounts",
        description: "Hold and manage multiple currencies",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      {
        label: "Blog",
        href: "/resources#blog",
        description: "Product updates and insights",
      },
      {
        label: "Guides",
        href: "/resources#guides",
        description: "How-to articles and best practices",
      },
      {
        label: "Help Center",
        href: "/resources#help",
        description: "Support and FAQs",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

/* ── Footer navigation ───────────────────────────────────────────────────── */

export type FooterGroup = { title: string; links: NavItem[] };

export const footerNav: FooterGroup[] = [
  {
    title: "Products",
    links: [
      { label: "NxPay", href: "/products/nxpay" },
      { label: "NxFlow", href: "/products/nxflow" },
      { label: "NxCollect", href: "/products/nxcollect" },
      { label: "NxBiz", href: "/products/nxbiz" },
      { label: "NxSecure", href: "/products/nxsecure" },
      { label: "Bharat Connect", href: "/products/bharat-connect" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Businesses", href: "/solutions#businesses" },
      { label: "Platforms", href: "/solutions#platforms" },
      { label: "Marketplaces", href: "/solutions#marketplaces" },
      { label: "Global Businesses", href: "/solutions#global" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/developers#docs" },
      { label: "API Reference", href: "/developers#api" },
      { label: "SDKs", href: "/developers#sdks" },
      { label: "Integration Guides", href: "/developers#guides" },
    ],
  },
  {
    title: "Global",
    links: [
      { label: "Cross-border", href: "/global#cross-border" },
      { label: "Foreign Exchange", href: "/global#fx" },
      { label: "Global Accounts", href: "/global#accounts" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources#blog" },
      { label: "Guides", href: "/resources#guides" },
      { label: "Help Center", href: "/resources#help" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];
