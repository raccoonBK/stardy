import { cn } from "@/utils/utils";

interface StatPillProps {
  icon: string;
  value: string | number;
  label?: string;
  className?: string;
}

/**
 * Rounded streak / XP pill used across the top bars. Its skin follows the
 * ambient theme via the `.sk-pill` class (must sit inside a `[data-theme]`).
 */
export function StatPill({ icon, value, label, className }: StatPillProps) {
  return (
    <div
      className={cn(
        "sk-pill flex h-[38px] items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-sm font-extrabold",
        className,
      )}
    >
      <span aria-hidden className="text-[15px] leading-none">
        {icon}
      </span>
      <span className="tabular-nums">{value}</span>
      {label ? (
        <span className="text-[11px] font-bold opacity-70">{label}</span>
      ) : null}
    </div>
  );
}
