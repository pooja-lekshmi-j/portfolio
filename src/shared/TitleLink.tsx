import ArrowIcon from "./ArrowIcon";

// shared title link with hover arrow, used by Experience and Projects list items
export default function TitleLink({
  href,
  ariaLabel,
  showArrow = true,
  children,
}: {
  href: string;
  ariaLabel: string;
  showArrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-100 hover:text-teal-400 focus-visible:text-teal-400"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      <span>
        {children}
        {showArrow && (
          <ArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
        )}
      </span>
    </a>
  );
}
