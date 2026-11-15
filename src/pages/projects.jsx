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
import { motion } from "framer-motion";
import y from "../assets/tu.png";
import z from "../assets/pie.png";
import x from "../assets/yu.png";

import { fadeUp, stagger, viewport } from "../lib/motion";

const PROJECTS = [
  {
    title: "SaaS Project Management Platform",
    description:
      "I built a full-stack SaaS Project Management Platform designed for fast-moving software teams. 🛠️✨Instead of juggling scattered spreadsheets and messages, teams can: 1️⃣ Create a dedicated Workspace and invite members with specific roles. 2️⃣ Launch Projects and monitor completion metrics from a central analytics dashboard. 3️⃣ Manage Tasks via a drag-and-drop Kanban board or filtered list view. 4️⃣ Collaborate in real time with task comments, file attachments, activity logs, and instant notifications.Engineered with JWT authentication, modular REST APIs, and a clean 12-view user interface.Swipe through the screens / watch the quick demo below to see it in action! ",
    image: y,
    tags: ["React", "ExpressJS", "NodeJS", "MongoDB", "ShadCN", "Tailwind CSS"],
    github: "https://github.com/SyedAlishahid/SaaS-Project-Management-App",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Fully Functional E-Commerce Website",
    description:
      "🛍️ Fully Functional E-Commerce Website | React.js, Tailwind CSS, MUI Excited to share my latest project—a fully functional e-commerce website built with React.js, Tailwind CSS, and MUI! 🎉 This site offers a seamless shopping experience with an intuitive add-to-cart feature and full responsiveness across all devices.🔹 Tech Stack: React.js, Tailwind CSS, MUI🔹 Features:✅ Add-to-cart functionality✅ Responsive & mobile-friendly UI✅ Modern design with smooth interactions✅ Scalable for future enhancements",
    image: z,
    tags: ["React", "Tailwind CSS", "ShadCN", "Bootstrap"],
    github: "https://github.com/SyedAlishahid/Ecommerce-website",
    demo: "https://website-ecommerce-fawn.vercel.app/",
  },
  {
    title: "Gemini Clone using Google's Gemini API",
    description:
      "Gemini Clone using Google's Gemini API – with full functionality and smooth performance!💡 This project replicates the core features of Google's Gemini, including real-time responses, clean UI, and smart input handling – giving you the full experience of working with a powerful LLM.🔗 Check out the complete code here: https://lnkd.in/g5h26i9z✨ Built with React and fully open-source. Feedback, stars, and contributions are more than welcome!",
    image: x,
    tags: ["ReactJs", "Tailwind", "Material UI", "Bootstrap"],
    github: "https://github.com/SyedAlishahid/Gemini-Clone/",
    demo: "https://gemini-clone-six-silk.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#05060a] text-white"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <h2 className="text-5xl font-bold italic tracking-tight sm:text-6xl md:text-7xl [font-family:'Caveat','Kalam',cursive]">
            My Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-4 h-1 w-28 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          />
        </motion.div>

        {/* cards */}
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-white/10 bg-neutral-900/70 p-0 text-white shadow-xl transition duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/20">
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
                <CardFooter className="grid bg-gray-900 grid-cols-2 gap-3 px-6 pb-6">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
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
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      className="h-11 w-full rounded-full bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:bg-blue-500"
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
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
