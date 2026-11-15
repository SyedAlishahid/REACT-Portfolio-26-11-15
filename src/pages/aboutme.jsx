import { Card } from "@/components/ui/card";
import a from "../assets/1.png";
// Frontend Core
import htmlLogo from "../assets/images/html.svg";
import cssLogo from "../assets/images/css.svg";
import jsLogo from "../assets/images/javascript.svg";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewport } from "../lib/motion";
// CSS & UI Libraries
import bootstrapLogo from "../assets/images/bootstrap.png";
import tailwindLogo from "../assets/images/tailwindcss.svg";
import muiLogo from "../assets/images/mui.svg";

// Frontend Framework & State
import reactLogo from "../assets/images/react.svg";
import reduxLogo from "../assets/images/redux.svg";

// Backend & Database
import nodeLogo from "../assets/images/node.svg";
import expressLogo from "../assets/images/express.svg";
import mongoLogo from "../assets/images/mongo.svg";

// Version Control & Deployment
import gitLogo from "../assets/images/git.png";
import githubLogo from "../assets/images/github.png";
import vercelLogo from "../assets/images/vercel.svg";
import hostingerLogo from "../assets/images/hostinger.png";

const TECHS = [
  // Frontend Core
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },

  // CSS & UI Libraries
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Material UI", logo: muiLogo },

  // Frontend Framework & State
  { name: "React", logo: reactLogo },
  { name: "Redux", logo: reduxLogo },

  // Backend & Database
  { name: "Node.js", logo: nodeLogo },
  { name: "Express", logo: expressLogo },
  { name: "MongoDB", logo: mongoLogo },

  // Version Control & Deployment
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "Vercel", logo: vercelLogo },
  { name: "Hostinger", logo: hostingerLogo },
];
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#05060a] text-white"
    >
      {/* background glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-10 -z-10 h-[380px] w-[380px] rounded-full bg-blue-600/15 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[320px] w-[320px] rounded-full bg-purple-600/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* LEFT: about text */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeUp}
            className="text-6xl font-bold italic tracking-tight sm:text-7xl md:text-8xl [font-family:'Caveat','Kalam',cursive]"
          >
            About Me
          </motion.h2>

          {/* hand-drawn arrow (draws itself) */}
          <svg
            viewBox="0 0 120 130"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-8 mt-2 h-20 w-20 text-white/90 sm:h-24 sm:w-24"
            aria-hidden="true"
          >
            <motion.path
              d="M22 8c-12 25-14 50 8 58 18 6 32-12 14-22-14-8-30 6-12 22 14 12 38 22 62 34"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M92 90l16 14-24 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 1.6, ease: "easeOut" }}
            />
          </svg>

          <motion.div
            variants={stagger(0.18, 0.1)}
            className="mt-6 max-w-xl space-y-6 text-lg font-light leading-relaxed text-white/50 sm:text-xl"
          >
            <motion.p variants={fadeUp}>
              Hi! I'm{" "}
              <span className="font-semibold text-white">ALI SHAHID</span>, a
              passionate{" "}
              <span className="text-white">MERN Stack Developer</span> based in
              Karachi.
            </motion.p>
            <motion.p variants={fadeUp}>
              I specialize in building full-stack applications using{" "}
              <span className="text-white">
                MongoDB, Express.js, React, and Node.js
              </span>
              . My journey involves turning clean code into functional,
              beautiful, and seamless user experiences.
            </motion.p>
            <motion.p variants={fadeUp}>
              When I'm not coding, I'm exploring new web technologies,
              optimizing application performance, or refining design details to
              perfection.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT: tech stack */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.h3
            variants={fadeUp}
            className="flex items-center gap-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            <span className="h-10 w-1 rounded-full bg-blue-500" />
            Tech Stack
          </motion.h3>

          <motion.div
            variants={stagger(0.06, 0.1)}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4"
          >
            {TECHS.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
              >
                <Card className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border-white/10 bg-white/[0.04] p-4 text-white shadow-lg backdrop-blur transition duration-300 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-blue-600/20">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                  />
                  <span className="text-center text-sm font-medium text-white/60 transition group-hover:text-white">
                    {tech.name}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
