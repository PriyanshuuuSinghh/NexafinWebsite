export type PlatformTabId = "accounts" | "transactions" | "spending" | "bills" | "subscriptions" | "networth";

export const platformTabs: { id: PlatformTabId; label: string; title: string; body: string }[] = [
  { id: "accounts", label: "Accounts", title: "Every balance in one view", body: "Bring checking, savings, credit and investment accounts together so you always know where you stand." },
  { id: "transactions", label: "Transactions", title: "A clean, searchable ledger", body: "Activity from every account in a single timeline, organised by merchant and category." },
  { id: "spending", label: "Spending", title: "See where money actually goes", body: "Category breakdowns that make the shape of your spending obvious at a glance." },
  { id: "bills", label: "Bills", title: "Know what is due, and when", body: "Upcoming and recent bills laid out by date so nothing arrives as a surprise." },
  { id: "subscriptions", label: "Subscriptions", title: "Recurring charges, surfaced", body: "Recurring payments detected and listed, with their yearly cost in plain view." },
  { id: "networth", label: "Net worth", title: "Your whole picture, over time", body: "Assets minus liabilities, tracked across the year so progress is visible." },
];
