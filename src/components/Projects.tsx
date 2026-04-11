import Image from "next/image";
import projects from "@/data/projects";
import FadeIn from "@/shared/FadeIn";
import ArrowIcon from "@/shared/ArrowIcon";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="section-bar text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <FadeIn delay={index * 100}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all duration-200 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-5">
                  <h3>
                    <a
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-100 hover:text-teal-400 focus-visible:text-teal-400"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        {project.url !== "#" && (
                          <ArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                        )}
                      </span>
                    </a>
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
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <li key={tech} className="mr-1.5 mt-2">
                          <div className="tech-pill flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400 cursor-default">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
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
