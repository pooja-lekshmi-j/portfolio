import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SpotlightEffect from "@/shared/SpotlightEffect";
import FadeIn from "@/shared/FadeIn";
import BackToTop from "@/shared/BackToTop";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <SpotlightEffect />
      <div className="mx-auto min-h-screen max-w-[1400px] px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="top-accent fixed top-0 left-0 right-0 z-50" />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />

            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                  Get In Touch
                </h2>
              </FadeIn>
              <FadeIn delay={150}>
                <p className="mt-4 max-w-md leading-relaxed text-slate-400">
                  I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <a
                  href="mailto:poojalekshmij@gmail.com"
                  className="group mt-8 inline-flex items-center gap-2 rounded-md border border-teal-400/50 px-5 py-2.5 text-[13px] font-medium tracking-wide text-teal-400 transition-all duration-200 hover:border-teal-400 hover:bg-teal-400/10"
                >
                  Say Hello
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </FadeIn>
            </section>

            <FadeIn>
              <div className="gradient-divider mb-4" />
              <footer className="max-w-md pb-16 pt-12 text-sm text-slate-500 sm:pb-0">
              <p className="leading-relaxed">
                Built with{" "}
                <a
                  className="link-underline font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  className="link-underline font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                , deployed on{" "}
                <a
                  className="link-underline font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                . All text is set in the{" "}
                <a
                  className="link-underline font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
                  href="https://rsms.me/inter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inter
                </a>{" "}
                typeface.
              </p>
              <p className="mt-4 text-xs text-slate-500/70">
                © {new Date().getFullYear()} Pooja Lekshmi J
              </p>
            </footer>
            </FadeIn>
          </main>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
