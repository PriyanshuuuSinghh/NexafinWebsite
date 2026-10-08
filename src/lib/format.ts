const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
const inr0 = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export const money = (n: number) => inr.format(n);
export const moneyRound = (n: number) => inr0.format(n);
/** Signed percentage, e.g. +8.42% */
export const pct = (n: number, digits = 2) => `${n >= 0 ? "+" : "-"}${Math.abs(n).toFixed(digits)}%`;
export const cn = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ");
