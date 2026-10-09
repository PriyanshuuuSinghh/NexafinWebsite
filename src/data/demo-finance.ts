/**
 * ALL VALUES BELOW ARE ILLUSTRATIVE DEMO DATA (INR).
 * They are not real users, accounts, institutions or Nixafin statistics.
 */
export const demoAccounts = [
  { id: "a1", name: "Everyday checking", kind: "Checking", balance: 18420.5 },
  { id: "a2", name: "Reserve savings", kind: "Savings", balance: 41150.0 },
  { id: "a3", name: "Travel card", kind: "Credit", balance: -4284.37 },
  { id: "a4", name: "Long-term portfolio", kind: "Investments", balance: 37280.87 },
] as const; // balances sum to demoNetWorth.total

export const demoNetWorth = {
  total: 92567.0,
  // Change vs 6 months earlier (series[11] vs series[5]): 92,567 / 85,377 = +8.42%
  changePct: 8.42,
  // 12 monthly points, illustrative
  series: [78200, 79100, 80400, 79800, 82100, 85377, 85900, 87900, 88600, 90100, 90400, 92567],
  months: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
};

export const demoTransactions = [
  { id: "t1", merchant: "Greenleaf Market", category: "Groceries", date: "Oct 6", amount: -1284.12 },
  { id: "t2", merchant: "Salary deposit", category: "Income", date: "Oct 5", amount: 48250.0 },
  { id: "t3", merchant: "Harbor Bistro", category: "Dining", date: "Oct 4", amount: -2462.4 },
  { id: "t4", merchant: "City Transit", category: "Transport", date: "Oct 3", amount: -380.0 },
  { id: "t5", merchant: "Streamly", category: "Subscriptions", date: "Oct 2", amount: -199.0 },
] as const;

/** `previous` is last month, so insights (e.g. Dining +14%) are derived, not typed in. */
export const demoSpending = [
  { category: "Housing", amount: 18500, previous: 18500 },
  { category: "Groceries", amount: 6200, previous: 6600 },
  { category: "Dining", amount: 5400, previous: 4737 },
  { category: "Transport", amount: 3100, previous: 2900 },
  { category: "Subscriptions", amount: 467, previous: 467 }, // monthly-billed subscriptions below
] as const;

export const demoBills = [
  { id: "b1", name: "Rent", due: "Oct 1", amount: 18500, status: "Paid" },
  { id: "b2", name: "Electricity", due: "Oct 12", amount: 1874.3, status: "Due soon" },
  { id: "b3", name: "Internet", due: "Oct 15", amount: 749.0, status: "Scheduled" },
  { id: "b4", name: "Phone plan", due: "Oct 21", amount: 399.0, status: "Scheduled" },
] as const;

export const demoSubscriptions = [
  { id: "s1", name: "Streamly", cycle: "Monthly", amount: 199 },
  { id: "s2", name: "Tunebox", cycle: "Monthly", amount: 119 },
  { id: "s3", name: "CloudVault", cycle: "Annual", amount: 1499 },
  { id: "s4", name: "Daily Reader", cycle: "Monthly", amount: 149 },
] as const;

// Weekly cash-flow bars (illustrative). Index 1 = second week, the strongest.
export const demoCashFlow = [
  { label: "Week 1", value: 58 },
  { label: "Week 2", value: 100 },
  { label: "Week 3", value: 72 },
  { label: "Week 4", value: 64 },
];
