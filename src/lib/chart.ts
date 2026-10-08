export type Pt = { x: number; y: number };

/** Map a numeric series into a 0..100 viewBox, with padding so strokes aren't clipped. */
export function toPoints(series: readonly number[], padTop = 8, padBottom = 6): Pt[] {
  const min = Math.min(...series);
  const max = Math.max(...series);
  const span = max - min || 1;
  return series.map((v, i) => ({
    x: (i / (series.length - 1)) * 100,
    y: padTop + (1 - (v - min) / span) * (100 - padTop - padBottom),
  }));
}

/** Smooth path through points (Catmull-Rom converted to cubic Béziers). */
export function smoothPath(pts: Pt[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const t = 0.18;
    const c1 = { x: p1.x + (p2.x - p0.x) * t, y: p1.y + (p2.y - p0.y) * t };
    const c2 = { x: p2.x - (p3.x - p1.x) * t, y: p2.y - (p3.y - p1.y) * t };
    d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
  }
  return d;
}
