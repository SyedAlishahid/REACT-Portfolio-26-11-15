import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

// ✏️ Edit these. Newest first.
const EDUCATION = [
  {
    degree: "BS Cloud Computing and Information Science",
    school: "Sir Syed University of Engineering and Technology",
    location: "Karachi, Pakistan",
    period: "2025 - Present",
    status: "Currently studying",
    description:
      "Studying cloud infrastructure, software engineering and information systems, while building full-stack projects alongside my degree.",
    tags: ["Cloud Computing", "Software Engineering", "Databases"],
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Intermediate (Pre-Engineering / ICS)",
    school: "Your College Name",
    location: "Karachi, Pakistan",
    period: "2023 - 2025",
    status: "Completed",
    description:
      "Completed higher secondary education with a strong base in mathematics, physics and computer science.",
    tags: ["Mathematics", "Physics", "Computer Science"],
    icon: BookOpen,
    current: false,
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-[#05060a] text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold italic tracking-tight sm:text-6xl md:text-7xl [font-family:'Caveat','Kalam',cursive]">
            Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]" />
        </div>

        {/* timeline */}
        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-500 via-white/15 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EDUCATION.map((item, i) => {
              const Icon = item.icon;
              const left = i % 2 === 0; // alternate sides on desktop
              return (
                <div
                  key={item.degree}
                  className="relative grid grid-cols-[2.5rem_1fr] gap-5 md:grid-cols-2 md:gap-16"
                >
                  {/* dot */}
                  <div className="absolute left-5 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/50 bg-[#0a0c14] shadow-[0_0_25px_rgba(59,130,246,0.5)] md:left-1/2">
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>

                  {/* spacer for mobile line + desktop empty side */}
                  <div className={`md:hidden`} />

                  <Card
                    className={`col-start-2 rounded-3xl border-white/10 bg-neutral-900/70 p-0 text-white shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/20 md:col-start-auto ${
                      left ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <CardContent className="space-y-4 p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className="gap-1.5 rounded-full border-white/15 bg-white/5 text-white/70"
                        >
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`rounded-full ${
                            item.current
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                              : "border-blue-500/30 bg-blue-500/10 text-blue-300"
                          }`}
                        >
                          {item.status}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold leading-tight tracking-tight">
                          {item.degree}
                        </h3>
                        <p className="mt-2 text-lg font-medium text-blue-400">
                          {item.school}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-white/40">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.location}
                        </p>
                      </div>

                      <p className="leading-relaxed text-white/50">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="rounded-full border-white/10 bg-white/5 text-white/60"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
