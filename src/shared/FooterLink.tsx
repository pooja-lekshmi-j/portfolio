export default function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="link-underline font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
