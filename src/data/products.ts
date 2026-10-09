export type ProductItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  route: string;
  badge?: string;
  capabilities: string[];
};

export const featuredProduct: ProductItem = {
  id: "nxpay",
  name: "NxPay",
  tagline: "Core Payment Gateway & Payout Engine",
  description:
    "Unified payment infrastructure to accept and disburse funds across major methods, built for high concurrency and resilient processing.",
  route: "/products/nxpay",
  badge: "Featured Core",
  capabilities: [
    "Cards, UPI, net banking and wallet acceptance",
    "Instant automated disbursals and vendor payouts",
    "Optimized clearing routes with high uptime",
  ],
};

export const supportingProducts: ProductItem[] = [
  {
    id: "nxflow",
    name: "NxFlow",
    tagline: "Workflow & Routing",
    description: "Automate complex payment routing, vendor splits, and multi-party payment logic.",
    route: "/products/nxflow",
    capabilities: ["Intelligent routing", "Rule-based splits", "Automated reconciliation"],
  },
  {
    id: "nxcollect",
    name: "NxCollect",
    tagline: "Recurring Collections",
    description: "Manage subscriptions, automated debit mandates, and recurring customer collections.",
    route: "/products/nxcollect",
    capabilities: ["eNACH mandates", "UPI AutoPay", "Smart retry engine"],
  },
  {
    id: "nxbiz",
    name: "NxBiz",
    tagline: "Business Banking",
    description: "Manage current accounts, corporate payouts, and day-to-day business financial operations.",
    route: "/products/nxbiz",
    capabilities: ["Virtual accounts", "Bulk disburals", "Cash flow visibility"],
  },
  {
    id: "nxsecure",
    name: "NxSecure",
    tagline: "Fraud & Compliance",
    description: "Real-time risk scoring, transaction monitoring, and regulatory compliance screening.",
    route: "/products/nxsecure",
    capabilities: ["Real-time fraud screening", "Risk analysis", "Compliance enforcement"],
  },
  {
    id: "bharat-connect",
    name: "Bharat Connect",
    tagline: "India Rails Integration",
    description: "Unified access to India's national payment infrastructure including UPI, IMPS, NEFT, and RTGS.",
    route: "/products/bharat-connect",
    capabilities: ["UPI deep integration", "IMPS & NEFT rails", "Sovereign clearing networks"],
  },
];
