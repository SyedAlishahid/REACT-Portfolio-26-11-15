import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, ExternalLink } from "lucide-react";
import a from "../assets/1.png";

const PROJECTS = [
  {
    title: "Thunder Game Cafe",
    description:
      "A modern and responsive website for a gaming cafe, built with React and Tailwind CSS. It features a live session dashboard, player booking and snack ordering.",
    image: a,
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/thunder-game-cafe",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Kalastra",
    description:
      "Kalastra is a modern clothing brand website built with React and Tailwind CSS. It features a sleek storefront, product collections and a smooth shopping flow.",
    image: a,
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/kalastra",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Invoice Generator",
    description:
      "An invoice generator built with Next.js, where users can generate professional invoices for their products and manage clients.",
    image: a,
    tags: ["Next.js", "TypeScript"],
    github: "https://github.com/your-username/invoice-generator",
    demo: "https://your-demo-link.com",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative isolate overflow-hidden bg-[#05060a] text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold italic tracking-tight sm:text-6xl md:text-7xl [font-family:'Caveat','Kalam',cursive]">
            My Projects
          </h2>
          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]" />
        </div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((p) => (
            <Card
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-3xl border-white/10 bg-neutral-900/70 p-0 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              {/* image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
              </div>

              {/* content */}
              <CardHeader className="px-6 pt-2">
                <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {p.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 space-y-4 px-6">
                <CardDescription className="line-clamp-3 text-base leading-relaxed text-white/50">
                  {p.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* buttons */}
              <CardFooter className="grid grid-cols-2 gap-3 px-6 pb-6">
                <Button
                  asChild
                  variant="outline"
                  className="h-11  rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    className="flex justify-center items-center p-4"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  className="h-11 rounded-full  bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:bg-blue-500"
                >
                  <a
                    className="flex justify-center items-center p-4"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
