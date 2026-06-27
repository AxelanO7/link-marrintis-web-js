import type React from "react";

import Head from "next/head";
import { Link as HeroLink } from "@heroui/link";
import { motion } from "framer-motion";

import { ThemeSwitch } from "@/components/theme-switch";

const staggerContainer = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const links = [
  {
    title: "Official Website",
    description: "Explore our full services & interactive picker",
    href: "https://marrintis-web.vercel.app", // Fallback to live URL or landing page
    icon: (
      <IconWrapper>
        <GlobeIcon />
      </IconWrapper>
    ),
  },
  {
    title: "Book Free Consultation",
    description: "Select a slot on our Cal.com Scheduler",
    href: "https://marrintis-web.vercel.app/konsultasi",
    icon: (
      <IconWrapper>
        <CalendarIcon />
      </IconWrapper>
    ),
  },
  {
    title: "Chat via WhatsApp",
    description: "Fast response for project onboarding",
    href: "https://wa.me/6282246034453",
    icon: (
      <IconWrapper>
        <MessageCircleIcon />
      </IconWrapper>
    ),
  },
  {
    title: "View Pricing Plans",
    description: "INIT and SCALE packages breakdown",
    href: "https://marrintis-web.vercel.app/pricing",
    icon: (
      <IconWrapper>
        <TagIcon />
      </IconWrapper>
    ),
  },
];

const expertise = [
  "Next.js 15",
  "Tailwind CSS v4",
  "Brand Identity",
  "Design Systems",
  "Cal.com Integration",
  "Vercel Setup",
  "Zoho Mail Setup",
];

const highlights = [
  {
    title: "INIT Package",
    subtitle: "Landing page + Brand Identity setup",
  },
  {
    title: "SCALE Package",
    subtitle: "Custom web/app + Design System + Social Media",
  },
];

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Marrintis Studio | Linktree</title>
        <meta
          content="Strategic Branding & Digital Ecosystems. Explore Marrintis Studio's services and work."
          name="description"
        />
      </Head>
      <main className="relative min-h-screen overflow-hidden bg-[#FAF8F5] text-stone-900 transition-colors duration-300 dark:bg-[#0B0F19] dark:text-[#F3F4F6]">
        {/* Soft Background Blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-x-6 top-10 h-32 rounded-3xl bg-gradient-to-r from-amber-200/40 via-stone-100 to-orange-100/40 dark:from-[#243E36]/20 dark:to-orange-500/10" />
          <div className="absolute bottom-0 left-12 h-56 w-56 rounded-full bg-orange-100/30 dark:bg-amber-500/10" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-xl flex-col px-6 py-12 justify-between">
          <div className="mb-4 flex items-center justify-end">
            <div className="rounded-full border border-stone-200/60 bg-white/70 p-2 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/60">
              <ThemeSwitch />
            </div>
          </div>

          <motion.section
            animate="show"
            className="flex flex-1 flex-col items-center gap-8"
            initial="hidden"
            variants={staggerContainer}
          >
            {/* Header / Brand visual */}
            <motion.div
              className="flex w-full flex-col items-center gap-4 text-center"
              variants={item}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/20 to-orange-400/20 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-stone-200/60 bg-white shadow-md ring-8 ring-white/40 backdrop-blur dark:border-stone-800 dark:bg-stone-900/80 dark:ring-stone-950/20">
                  {/* Visual Logo SVG (Terracotta color) */}
                  <svg
                    className="h-10 w-10 text-[#C05C3E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-serif font-bold text-[#243E36] dark:text-[#FAF8F5] md:text-xl">
                Marrintis Studio
                <Badge>Active</Badge>
              </div>
              <p className="max-w-md text-sm text-stone-650 dark:text-stone-300">
                Branding strategis & transformasi digital untuk bisnis baru,
                UMKM, dan korporat.
              </p>
              <div className="flex items-center gap-3 mt-1">
                <IconButton href="https://instagram.com/marrintistudio">
                  <InstagramIcon />
                </IconButton>
                <IconButton href="mailto:hello@marrintis.studio">
                  <MailIcon />
                </IconButton>
              </div>
            </motion.div>

            {/* Link List */}
            <motion.div
              className="flex w-full flex-col gap-3.5"
              variants={item}
            >
              {links.map((link) => (
                <CardLink
                  key={link.title}
                  description={link.description}
                  href={link.href}
                  icon={link.icon}
                  title={link.title}
                />
              ))}
            </motion.div>

            {/* Expertise Section */}
            <motion.section className="w-full mt-2" variants={item}>
              <SectionTitle title="Expertise" />
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {expertise.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </motion.section>

            {/* Highlights Section */}
            <motion.section className="w-full mt-2" variants={item}>
              <SectionTitle title="Offerings Highlights" />
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <SmallCard
                    key={highlight.title}
                    subtitle={highlight.subtitle}
                    title={highlight.title}
                  />
                ))}
              </div>
            </motion.section>

            <motion.footer
              className="pb-6 pt-8 text-center text-xs text-stone-500 dark:text-stone-400"
              variants={item}
            >
              © 2026 Marrintis Studio. All rights reserved.
            </motion.footer>
          </motion.section>
        </div>
      </main>
    </>
  );
}

function CardLink({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div variants={item}>
      <HeroLink
        isExternal
        className="group block"
        color="foreground"
        href={href}
      >
        <div className="relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md dark:border-stone-850 dark:bg-stone-900/50">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-50 text-stone-700 shadow-inner dark:bg-stone-900/80 dark:text-stone-300 shrink-0">
              {icon}
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold text-stone-800 transition-colors duration-300 group-hover:text-[#C05C3E] dark:text-[#FAF8F5] dark:group-hover:text-[#E29545]">
                {title}
              </p>
              <p className="text-xs text-stone-500 transition-colors duration-300 dark:text-stone-400">
                {description}
              </p>
            </div>
            <ArrowUpRightIcon className="h-4.5 w-4.5 text-stone-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C05C3E] dark:text-stone-500 dark:group-hover:text-[#E29545]" />
          </div>
        </div>
      </HeroLink>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C05C3E] justify-center">
      <div className="h-px w-6 bg-[#C05C3E]/20" />
      {title}
      <div className="h-px w-6 bg-[#C05C3E]/20" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-stone-200/60 bg-white/80 px-3 py-1 text-[10px] font-semibold text-stone-700 shadow-sm dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-300">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 shadow-inner ring-1 ring-emerald-600/10 dark:bg-emerald-950/20 dark:text-emerald-450 dark:ring-emerald-400/20">
      {children}
    </span>
  );
}

function SmallCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200/60 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-stone-850 dark:bg-stone-900/50">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-stone-800 dark:text-[#FAF8F5]">
          {title}
        </p>
        <p className="text-[10px] text-stone-500 dark:text-stone-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function IconButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <HeroLink
      isExternal
      className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200/60 bg-white/90 text-stone-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-300"
      href={href}
    >
      {children}
    </HeroLink>
  );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
  return <span className="text-[#C05C3E] dark:text-[#E29545]">{children}</span>;
}

const iconProps = "h-4.5 w-4.5 stroke-[1.8]";

function GlobeIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18" />
      <path d="M12 3a14 14 0 000 18" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function MessageCircleIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8.5z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" x2="7.01" y1="7" y2="7" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`${iconProps} ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect height="18" rx="4" ry="4" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect height="14" rx="2" ry="2" width="20" x="2" y="5" />
      <path d="m2 7 8.5 5a3 3 0 003 0L22 7" />
    </svg>
  );
}
