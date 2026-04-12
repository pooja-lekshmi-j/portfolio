import FadeIn from "@/shared/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy-900/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="section-bar text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div>
        <FadeIn>
          <p className="mb-4 text-slate-400 leading-relaxed">
            I&apos;m a Software Engineer with 5+ years of experience building
            scalable, accessible, and high-performance web applications for
            consumer-facing products. I enjoy working at the intersection of
            product, design, and engineering, taking ownership of complex
            problems and delivering solutions that are reliable, maintainable,
            and built to grow.
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mb-4 text-slate-400 leading-relaxed">
            At{" "}
            <a
              href="https://www.hrblock.com/"
              className="link-underline font-semibold text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              H&amp;R Block
            </a>
            , I build and maintain responsive, high-traffic consumer products
            used by a large and diverse user base. I take features from
            architecture to delivery, working closely with product, design, and
            backend teams to hit business goals while keeping strong standards
            for accessibility, performance, and code quality.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mb-4 text-slate-400 leading-relaxed">
            Before H&R Block, I worked as a Full-Stack Developer at{" "}
            <a
              href="https://www.igdst.com/"
              className="link-underline font-semibold text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              IGDS Technologies
            </a>
            , building end-to-end products with JavaScript and Node.js. I
            focused on improving application performance, scalability, and
            developer efficiency across multiple projects.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-slate-400 leading-relaxed">
            Technologies I work with:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Redux",
              "HTML & CSS",
              "Node.js",
              "Feathers.js",
              "MySQL",
            ].map((tech) => (
              <li
                key={tech}
                className="tech-hover flex items-center text-slate-300 cursor-default"
              >
                <span className="mr-2 text-teal-400">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
