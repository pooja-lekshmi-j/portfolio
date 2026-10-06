export default function TechPillList({
  technologies,
  className = "mt-3",
}: {
  technologies: string[];
  className?: string;
}) {
  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`}
      aria-label="Technologies used"
    >
      {technologies.map((tech) => (
        <li key={tech}>
          <div className="tech-pill flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400 cursor-default">
            {tech}
          </div>
        </li>
      ))}
    </ul>
  );
}
