/** Full set, shown on /security. */
export const securityPrinciples = [
  { id: "readonly", icon: "eye", title: "Read-only access", body: "Nixafin is designed to view your financial data, never to move money on your behalf." },
  { id: "encryption", icon: "lock", title: "Encryption", body: "Data is intended to be encrypted in transit and at rest." },
  { id: "auth", icon: "key", title: "Secure authentication", body: "Sign-in built around strong authentication, including support for multi-factor methods." },
  { id: "privacy", icon: "shield", title: "Privacy first", body: "Privacy is the default. Your data exists to serve you, and you stay in control of what is connected." },
] as const;

/** The three points shown on the homepage. Design intent only: no certifications or compliance claims. */
export const trustPoints = [
  { id: "readonly", icon: "eye", title: "Read-only access", body: "Nixafin is designed to view your financial data, never to move money on your behalf." },
  { id: "secure", icon: "lock", title: "Secure data", body: "Data is intended to be encrypted in transit and at rest." },
  { id: "privacy", icon: "shield", title: "Privacy-first architecture", body: "Privacy is the default, and you stay in control of what is connected." },
] as const;
