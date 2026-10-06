import experiences from "@/data/experience";
import FadeIn from "@/shared/FadeIn";
import ArrowIcon from "@/shared/ArrowIcon";
import SectionHeading from "@/shared/SectionHeading";
import TechPillList from "@/shared/TechPillList";
import HoverGlow from "@/shared/HoverGlow";
import TitleLink from "@/shared/TitleLink";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeading title="Experience" />

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <FadeIn delay={index * 100}>
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <HoverGlow insetY="-inset-y-6" />

                  <header
                    className="z-10 mb-2 mt-1 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={exp.range}
                  >
                    {exp.range}
                  </header>

                  <div className="z-10 sm:col-span-6 pb-2">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <TitleLink
                          href={exp.url}
                          ariaLabel={`${exp.title} at ${exp.company} (opens in a new tab)`}
                        >
                          {exp.title} · {exp.company}
                        </TitleLink>
                      </div>
                      {exp.promotedFrom && (
                        <div className="mt-2 inline-flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-[11px] font-medium text-teal-400">
                          Promoted from {exp.promotedFrom}
                          {exp.promotedDate && ` · ${exp.promotedDate}`}
                        </div>
                      )}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {exp.description}
                    </p>

                    <TechPillList
                      technologies={exp.technologies}
                      className="mt-3"
                    />
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
