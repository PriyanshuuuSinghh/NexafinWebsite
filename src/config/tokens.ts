/**
 * JS-side access to design tokens. Values reference CSS variables defined in
 * src/styles/tokens.css so there is one source of truth (change it there).
 */
export const color = {
  ink: "var(--color-ink-900)",
  inkDeep: "var(--color-ink-950)",
  blue: "var(--color-blue-600)",
  blueLight: "var(--color-blue-500)",
  accent: "var(--color-accent-600)",
  accentSoft: "var(--color-accent-100)",
  line: "var(--color-line)",
  muted: "var(--color-text-muted)",
  subtle: "var(--color-text-subtle)",
  negative: "var(--color-negative)",
  positive: "var(--color-positive)",
} as const;

export const motionTokens = {
  /** Matches --ease-out-quart */
  ease: [0.25, 1, 0.5, 1] as const,
  base: 0.5,
} as const;
