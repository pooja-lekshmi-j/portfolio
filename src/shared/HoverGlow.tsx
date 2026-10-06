// shared hover-highlight overlay used behind Experience/Projects list items
export default function HoverGlow({
  insetY = "-inset-y-4",
}: {
  insetY?: string;
}) {
  return (
    <div
      className={`absolute -inset-x-4 ${insetY} z-0 hidden rounded-md transition-all duration-200 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
    />
  );
}
