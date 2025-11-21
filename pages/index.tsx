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
    description: "Explore our full services",
    href: "https://marrintis.studio",
    icon: (
      <IconWrapper>
        <GlobeIcon />
      </IconWrapper>
    ),
  },
  {
    title: "Consult via WhatsApp",
    description: "Fast response for new projects",
    href: "https://wa.me/6281234567890",
    icon: (
      <IconWrapper>
        <MessageCircleIcon />
      </IconWrapper>
    ),
  },
  {
    title: "View Case Studies",
    description: "See our recent work",
    href: "https://marrintis.studio/cases",
    icon: (
      <IconWrapper>
        <BriefcaseIcon />
      </IconWrapper>
    ),
  },
  {
    title: "Download Company Profile",
    description: "PDF Version 2025",
    href: "https://marrintis.studio/profile.pdf",
    icon: (
      <IconWrapper>
        <DownloadIcon />
      </IconWrapper>
    ),
  },
  {
    title: "Join Our Team",
    description: "We are hiring",
    href: "https://marrintis.studio/careers",
    icon: (
      <IconWrapper>
        <UsersIcon />
      </IconWrapper>
    ),
  },
];

const expertise = [
  "Next.js",
  "React",
  "TypeScript",
  "Figma",
  "Branding",
  "SEO",
  "Motion",
];

const highlights = [
  { title: "Fintech App", subtitle: "Product design & engineering" },
  { title: "Coffee Brand", subtitle: "Retail experience revamp" },
];

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Marrintis Studio | Attraction Link</title>
        <meta
          content="Strategic Branding & Digital Ecosystems. Explore Marrintis Studio's services and work."
          name="description"
        />
      </Head>
      <main className="relative min-h-screen overflow-hidden bg-[#FAFAF9] text-slate-900 transition-colors duration-300 dark:bg-[#0F172A] dark:text-white">
        <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
          <div className="absolute inset-x-6 top-10 h-32 rounded-3xl bg-gradient-to-r from-blue-200/60 via-white/40 to-blue-100/70 dark:from-blue-500/20 dark:via-blue-400/10 dark:to-cyan-500/10" />
          <div className="absolute bottom-0 left-12 h-56 w-56 rounded-full bg-blue-200/50 dark:bg-blue-500/20" />
          <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-200/40 dark:bg-indigo-500/25" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10">
          <div className="mb-8 flex items-center justify-end">
            <div className="rounded-full border border-slate-200/70 bg-white/80 p-2 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/10">
              <ThemeSwitch />
            </div>
          </div>

          <motion.section
            animate="show"
            className="flex flex-1 flex-col items-center gap-8"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div
              className="flex w-full flex-col items-center gap-5 text-center"
              variants={item}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-cyan-400/20 blur-xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-slate-200/70 bg-white/90 shadow-xl ring-8 ring-white/60 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:ring-white/5">
                  <span className="text-2xl font-semibold text-slate-900 dark:text-white">
                    MS
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white md:text-xl">
                Marrintis Studio
                <Badge>Verified</Badge>
              </div>
              <p className="max-w-2xl text-base text-slate-600 dark:text-slate-200/80">
                Strategic Branding & Digital Ecosystems. Helping businesses
                launch and scale.
              </p>
              <div className="flex items-center gap-3">
                {/* <IconButton href="https://www.linkedin.com">
                  {" "}
                  <LinkedinIcon />{" "}
                </IconButton> */}
                <IconButton href="https://www.instagram.com/marrintistudio">
                  {" "}
                  <InstagramIcon />{" "}
                </IconButton>
                <IconButton href="mailto:hello@marrintis.studio">
                  {" "}
                  <MailIcon />{" "}
                </IconButton>
              </div>
            </motion.div>

            <motion.div className="flex w-full flex-col gap-4" variants={item}>
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

            {/* <motion.section className="w-full" variants={item}>
              <SectionTitle title="Powering Your Growth With" />
              <div className="mt-3 flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </motion.section>

            <motion.section className="w-full" variants={item}>
              <SectionTitle title="Recent Highlights" />
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <SmallCard
                    key={highlight.title}
                    subtitle={highlight.subtitle}
                    title={highlight.title}
                  />
                ))}
              </div>
            </motion.section> */}

            <motion.footer
              className="pb-6 pt-4 text-center text-sm text-slate-500 dark:text-slate-300/80"
              variants={item}
            >
              © 2025 Marrintis Studio. All rights reserved.
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
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-200/60 dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/40 dark:hover:shadow-blue-500/20">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner dark:bg-blue-500/10 dark:text-blue-200">
              {icon}
            </div>
            <div className="flex-1 text-left">
              <p className="text-base font-semibold text-slate-900 transition-colors duration-300 dark:text-white">
                {title}
              </p>
              <p className="text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-800 dark:text-slate-200/80 dark:group-hover:text-white">
                {description}
              </p>
            </div>
            <ArrowUpRightIcon className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-200" />
          </div>
        </div>
      </HeroLink>
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300/80">
      <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      {title}
      <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 shadow-sm ring-1 ring-blue-200/80 dark:bg-blue-500/15 dark:text-blue-100 dark:ring-blue-400/40">
      {children}
    </span>
  );
}

function SmallCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
      <div className="relative h-32 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-white opacity-80 dark:from-blue-500/30 dark:via-indigo-500/20 dark:to-slate-900" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUpRightIcon className="h-6 w-6 text-slate-600 opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600 dark:text-slate-100" />
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          {title}
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-300/80">
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white/90 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white"
      href={href}
    >
      {children}
    </HeroLink>
  );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-600 dark:text-blue-200">{children}</span>;
}

const iconProps = "h-5 w-5 stroke-[1.8]";

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

function BriefcaseIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect height="14" rx="2" ry="2" width="20" x="2" y="7" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <path d="M2 12h20" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v12" />
      <path d="M8 11l4 4 4-4" />
      <path d="M4 17h16" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M17 11a4 4 0 100-8 4 4 0 000 8z" />
      <path d="M3 21v-1a6 6 0 016-6h0" />
      <path d="M15 14a6 6 0 016 6v1" />
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

function LinkedinIcon() {
  return (
    <svg
      className={iconProps}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-2-2c-1.1 0-2 .9-2 2v6h-4v-9.5" />
      <rect height="9" width="4" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
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
