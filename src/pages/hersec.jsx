import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowUpRight, Mail } from "lucide-react";
import a from "../assets/1.png";

// ✏️ Change these
const DATA = {
  greeting: "Hello, I am",
  firstName: "Ali",
  lastName: "Shahid",
  role: "MERN Stack Developer",
  image: "/profile.jpg",
  projects: "3+",
  resume: "/resume.pdf",
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate mt-16 overflow-x-clip bg-[#05060a] text-white"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:28px_28px]" />

      {/* Changed to grid on lg so columns never collapse on mobile */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:mt-20 lg:grid-cols-12 lg:gap-8 lg:py-12">
        {/* LEFT: text */}
        <div className="order-2 text-center lg:order-2 lg:col-span-7 lg:text-left">
          <Badge
            variant="outline"
            className="mb-5 gap-2 rounded-full border-white/15 bg-white/5 px-3 py-1 font-serif text-base font-normal italic text-white/70"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {DATA.greeting}
          </Badge>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl xl:text-9xl">
            {DATA.firstName}{" "}
            <span className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              {DATA.lastName}
            </span>
          </h1>

          <p className="mt-6 text-2xl tracking-wide text-blue-400 sm:text-3xl [font-family:'Kalam','Comic_Sans_MS',cursive]">
            {DATA.role}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-7 text-base font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-white/90"
            >
              <a className="flex items-center justify-center" href="#work">
                View Work
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-blue-600 px-7 text-base font-semibold text-white shadow-[0_0_35px_rgba(37,99,235,0.55)] hover:bg-blue-500"
            >
              <a
                className="flex items-center justify-center"
                href={DATA.resume}
                download
              >
                Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <a className="flex items-center justify-center" href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        {/* RIGHT: photo box */}
        <div className="order-2 flex w-full justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[440px]">
            {/* outer glow border */}
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-blue-500/50 via-white/10 to-transparent" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-blue-900/30">
              <img
                src={a}
                alt={`${DATA.firstName} ${DATA.lastName}`}
                className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* stat box */}
            <div className="absolute -bottom-5 left-3 rounded-2xl border border-white/10 bg-neutral-900/85 px-5 py-3 text-center shadow-xl backdrop-blur-md sm:-bottom-6 sm:-left-6 sm:px-6 sm:py-4">
              <p className="text-2xl font-bold leading-none sm:text-4xl">
                {DATA.projects}
              </p>
              <p className="mt-1 text-[10px] tracking-[0.2em] text-white/50 sm:text-xs">
                PROJECTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
