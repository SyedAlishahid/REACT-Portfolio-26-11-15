import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Check,
  Copy,
  LayoutDashboard,
  CircleUser,
  BoxesLinked,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { fadeUp, fromRight, stagger, viewport } from "../lib/motion";
// ✏️ Change these
const INFO = {
  firstName: "Syed Ali shahid",
  email: "syedalishahid2008@gmail.com",
  phone: "+92 3272467724",
  location: "Karachi, Pakistan",
  timeZone: "Asia/Kolkata",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/alishahidzaidi/",
      icon: BoxesLinked,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: CircleUser,
    },
    {
      name: "Github",
      href: "https://github.com/SyedAlishahid",
      icon: LayoutDashboard,
    },
  ],
};

const FIELDS = [
  {
    id: "name",
    n: "01",
    label: "What's your name?",
    ph: "Your name *",
    type: "text",
    required: true,
  },
  {
    id: "email",
    n: "02",
    label: "What's your email?",
    ph: "you@example.com *",
    type: "email",
    required: true,
  },
  {
    id: "org",
    n: "03",
    label: "What's the name of your organization?",
    ph: "Organization name",
    type: "text",
    required: false,
  },
];

// shared underline-style input
const lineInput =
  "h-12 rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-lg text-white shadow-none placeholder:text-white/25 focus-visible:border-blue-500 focus-visible:ring-0 transition-colors";

function useLocalTime(timeZone) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone,
        }),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export default function Contact() {
  const time = useLocalTime(INFO.timeZone);
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // 🔌 Connect your backend / EmailJS / Formspree here
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", org: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#08080a] text-white"
    >
      {/* background */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[130px]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20 lg:py-28">
        {/* LEFT: form */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="mb-6 inline-block">
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for new projects
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Let's start a
            <span className="block bg-gradient-to-r from-white via-white to-blue-400 bg-clip-text text-transparent">
              project together
            </span>
          </motion.h2>

          <motion.form
            variants={stagger(0.12)}
            onSubmit={onSubmit}
            className="mt-14 max-w-2xl space-y-9"
          >
            {FIELDS.map((f) => (
              <motion.div key={f.id} variants={fadeUp} className="group">
                <Label
                  htmlFor={f.id}
                  className="text-[11px] font-normal uppercase tracking-widest text-white/40 transition group-focus-within:text-blue-400"
                >
                  <span className="mr-3 text-white/30">{f.n}</span>
                  {f.label}
                </Label>
                <Input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.required}
                  placeholder={f.ph}
                  value={form[f.id]}
                  onChange={onChange}
                  className={lineInput}
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="group">
              <Label
                htmlFor="message"
                className="text-[11px] font-normal uppercase tracking-widest text-white/40 transition group-focus-within:text-blue-400"
              >
                <span className="mr-3 text-white/30">04</span>
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={`Hello ${INFO.firstName}, can you help me with...`}
                value={form.message}
                onChange={onChange}
                className={`${lineInput} min-h-28 resize-none py-3`}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="group/btn h-auto gap-4 rounded-full bg-transparent p-0 text-base font-semibold text-white hover:bg-transparent"
                >
                  {status === "sent"
                    ? "Message sent!"
                    : status === "sending"
                      ? "Sending..."
                      : "Send it!"}
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.6)] transition duration-300 group-hover/btn:scale-110 group-hover/btn:bg-blue-500">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={
                          status === "sending"
                            ? "s"
                            : status === "sent"
                              ? "ok"
                              : "i"
                        }
                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex"
                      >
                        {status === "sending" ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : status === "sent" ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </Button>
              </motion.div>

              <AnimatePresence>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-400"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* RIGHT: details */}
        <motion.aside
          variants={stagger(0.15, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="space-y-10 lg:pt-44"
        >
          <motion.div variants={fromRight}>
            <p className="mb-4 text-[11px] uppercase tracking-widest text-white/40">
              Contact details
            </p>
            <div className="space-y-3">
              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-center gap-2 break-all text-left text-lg text-white transition hover:text-blue-400"
              >
                {INFO.email}
                {copied ? (
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 shrink-0 opacity-0 transition group-hover:opacity-60" />
                )}
              </button>
              <a
                href={`tel:${INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-lg text-white transition hover:text-blue-400"
              >
                <Phone className="h-4 w-4 text-white/40" />
                {INFO.phone}
              </a>
            </div>
          </motion.div>

          <motion.div variants={fromRight}>
            <p className="mb-4 text-[11px] uppercase tracking-widest text-white/40">
              Socials
            </p>
            <ul className="space-y-3">
              {INFO.socials.map(({ name, href, icon: Icon }) => (
                <motion.li key={name} whileHover={{ x: 6 }}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-3 text-lg text-white transition hover:text-blue-400"
                  >
                    <Icon className="h-4 w-4 text-white/40 transition group-hover:text-blue-400" />
                    {name}
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fromRight}>
            <p className="mb-4 text-[11px] uppercase tracking-widest text-white/40">
              Location
            </p>
            <p className="flex items-center gap-2 text-lg text-white">
              <MapPin className="h-4 w-4 text-white/40" />
              {INFO.location}
            </p>
            <p className="mt-1 text-sm text-white/40">Local Time: {time}</p>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
