/**
 * JS-side access to Nixafin design tokens.
 * Values reference CSS variables defined in src/styles/tokens.css — single source of truth.
 * Change values in tokens.css; this file only references them.
 */
export const color = {
  // Brand palette
  ink: "var(--color-ink-900)",
  inkDeep: "var(--color-ink-950)",
  blue: "var(--color-blue-600)",        // #155EEF — primary
  blueLight: "var(--color-blue-500)",   // #3B82F6
  accent: "var(--color-accent-500)",    // #13B8A6 — teal
  accentSoft: "var(--color-accent-100)",
  line: "var(--color-line)",
  muted: "var(--color-text-muted)",
  subtle: "var(--color-text-subtle)",
  negative: "var(--color-error)",
  positive: "var(--color-success)",

  // Semantic tokens
  bg: "var(--color-bg)",
  surface: "var(--color-bg-surface)",
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  textPrimary: "var(--color-text-primary)",
  textSecondary: "var(--color-text-secondary)",
  border: "var(--color-border)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  error: "var(--color-error)",
} as const;

export const motionTokens = {
  /** Matches --ease-out-quart */
  ease: [0.25, 1, 0.5, 1] as const,
  base: 0.5,
} as const;
