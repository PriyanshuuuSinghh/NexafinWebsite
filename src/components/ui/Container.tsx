import { cn } from "@/lib/format";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[var(--container-page)] px-[var(--spacing-gutter)]", className)}>
      {children}
    </div>
  );
}
