import Image from "next/image";
import projects from "@/data/projects";
import FadeIn from "@/shared/FadeIn";
import SectionHeading from "@/shared/SectionHeading";
import TechPillList from "@/shared/TechPillList";
import HoverGlow from "@/shared/HoverGlow";
import TitleLink from "@/shared/TitleLink";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeading title="Projects" />

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <FadeIn delay={index * 100}>
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <HoverGlow />

                  <div className="z-10 sm:order-2 sm:col-span-5">
                    <h3>
                      <TitleLink
                        href={project.url}
                        ariaLabel={`${project.title} (opens in a new tab)`}
                        showArrow={project.url !== "#"}
                      >
                        {project.title}
                      </TitleLink>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {project.stars && (
                      <a
                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-400"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.stars} stars on GitHub`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mr-1 h-3 w-3"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{project.stars}</span>
                      </a>
                    )}

                    {project.technologies.length > 0 && (
                      <TechPillList
                        technologies={project.technologies}
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="z-10 order-1 sm:col-span-3">
                    <div className="img-tilt relative overflow-hidden rounded border-2 border-slate-200/10 transition-all duration-200 group-hover:border-slate-200/30 sm:order-1 sm:translate-y-1">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={`${project.title} Screenshot`}
                            width={280}
                            height={168}
                            className="h-auto w-full object-cover transition-all duration-200 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-0" />
                        </>
                      ) : (
                        <div className="flex aspect-video w-full items-center justify-center bg-navy-800/80 text-xs text-slate-500">
                          Preview
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
