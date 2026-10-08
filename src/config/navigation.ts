export type NavItem = { label: string; href: string };
export type DropdownItem = NavItem & { description?: string };
export type NavEntry = NavItem & { dropdown?: DropdownItem[] };

export const primaryNav: NavEntry[] = [
  {
    label: "Platform",
    href: "/platform",
    dropdown: [
      { label: "Financial Overview", href: "/platform", description: "Your complete financial picture" },
      { label: "Accounts", href: "/platform#accounts", description: "All balances in one view" },
      { label: "Transactions", href: "/platform#transactions", description: "Searchable activity ledger" },
      { label: "Cash Flow", href: "/platform#cashflow", description: "Income and spending patterns" },
      { label: "Subscriptions", href: "/platform#subscriptions", description: "Recurring charges surfaced" },
      { label: "Net Worth", href: "/platform#networth", description: "Assets tracked over time" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Individuals", href: "/solutions#individuals", description: "Clear view without spreadsheets" },
      { label: "Professionals", href: "/solutions#professionals", description: "Irregular income, organised" },
      { label: "Families", href: "/solutions#families", description: "Shared household visibility" },
      { label: "Businesses", href: "/solutions#businesses", description: "Operating cash clarity" },
    ],
  },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Security", href: "/security" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Guides", href: "/resources#guides", description: "Step-by-step how-to articles" },
      { label: "Blog", href: "/resources#blog", description: "Financial insights and news" },
      { label: "Help Center", href: "/resources#help", description: "Support and documentation" },
      { label: "Documentation", href: "/resources#docs", description: "Technical reference" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export type FooterGroup = { title: string; links: NavItem[] };

export const footerNav: FooterGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Accounts", href: "/platform#accounts" },
      { label: "Transactions", href: "/platform#transactions" },
      { label: "Cash Flow", href: "/platform#cashflow" },
      { label: "Subscriptions", href: "/platform#subscriptions" },
      { label: "Net Worth", href: "/platform#networth" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Individuals", href: "/solutions#individuals" },
      { label: "Professionals", href: "/solutions#professionals" },
      { label: "Families", href: "/solutions#families" },
      { label: "Businesses", href: "/solutions#businesses" },
    ],
  },
  {
    title: "Intelligence",
    links: [
      { label: "Financial insights", href: "/intelligence" },
      { label: "How it works", href: "/intelligence#how-it-works" },
    ],
  },
  {
    title: "Security",
    links: [
      { label: "Overview", href: "/security" },
      { label: "Privacy", href: "/security#privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/resources#guides" },
      { label: "Blog", href: "/resources#blog" },
      { label: "Help Center", href: "/resources#help" },
      { label: "Documentation", href: "/resources#docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
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
