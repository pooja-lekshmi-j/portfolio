import experiences from "@/data/experience";
import FadeIn from "@/shared/FadeIn";
import ArrowIcon from "@/shared/ArrowIcon";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="section-bar text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <FadeIn delay={index * 100}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 hidden rounded-md transition-all duration-200 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-200/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={exp.range}
                >
                  {exp.range}
                </header>

                <div className="z-10 sm:col-span-6 pb-2">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-100 hover:text-teal-400 focus-visible:text-teal-400"
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {exp.description}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <div className="tech-pill flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400 cursor-default">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </FadeIn>
            </li>
          ))}
        </ol>

        <FadeIn>
          <div className="mt-12">
            <a
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200/15 bg-slate-200/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-teal-400/30 hover:bg-teal-400/10 hover:text-teal-400 focus-visible:text-teal-400"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              View Full Résumé
              <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
