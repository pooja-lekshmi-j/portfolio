export default function SocialLink({
  href,
  label,
  viewBox,
  path,
}: {
  href: string;
  label: string;
  viewBox: string;
  path: string;
}) {
  return (
    <li className="float-on-view mr-5 shrink-0 text-xs">
      <a
        className="social-icon block text-slate-400"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in a new tab)`}
        title={label}
      >
        <span className="sr-only">{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d={path} />
        </svg>
      </a>
    </li>
  );
}
