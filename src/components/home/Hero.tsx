'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';
import { motion } from 'framer-motion';

const STATS = [
  { value: '1 200+', label: 'En stock' },
  { value: '20 ans', label: "D'expérience" },
  { value: '98%', label: 'Satisfaits' },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black pt-16 md:pt-14">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
      

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20" />

        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

        <div className="absolute bottom-[-20%] left-[10%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl" />

        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px',
          }}
        />

        {/* GIANT GHOST TEXT */}
        <div className="pointer-events-none absolute left-[-2%] top-1/2 hidden -translate-y-1/2 select-none text-[18vw] font-black uppercase tracking-[-0.08em] text-white/[0.03] lg:block">
         NEW TREND
        </div>
      </div>

      {/* FOREGROUND VEHICLE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: EASE,
        }}
        className="absolute bottom-0 right-[-8%] z-[5] hidden lg:block"
      >
        <Image
          src="/assets/car-front.png"
          alt="Véhicule premium"
          width={950}
          height={700}
          priority
          className="object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-16 md:px-10 lg:px-16">
        {/* EYEBROW */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE,
            delay: 0.2,
          }}
          className="mb-4 text-[10px] font-light uppercase tracking-[0.35em] text-zinc-500"
        >
          Nouvelle collection · 2025
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: 0.35,
          }}
          className="mb-6 max-w-4xl text-[clamp(3.4rem,7vw,6.5rem)] font-extralight leading-[0.95] tracking-[-0.04em] text-white"
        >
          Le véhicule
          <br />
          <span className="italic text-white/30">qui vous</span>
          <br />
          ressemble.
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE,
            delay: 0.5,
          }}
          className="mb-8 max-w-md text-[13px] font-light leading-relaxed text-zinc-400"
        >
          Voitures, camions et utilitaires disponibles immédiatement.
          Financement flexible, reprise et accompagnement sur mesure.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE,
            delay: 0.62,
          }}
          className="mb-14 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white to-zinc-300 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-950 shadow-[0_10px_40px_rgba(255,255,255,0.15)] transition duration-300 hover:scale-[1.02] hover:from-white hover:to-zinc-200 active:scale-95"
          >
            Voir les véhicules
            <FiArrowRight />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[11px] font-light uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            <FiPhoneCall size="13px" />
            Contact
          </Link>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
          }}
          className="flex flex-wrap gap-10 border-t border-white/10 bg-white/[0.02] pt-8 backdrop-blur-sm"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.85 + i * 0.1,
                ease: 'easeOut',
              }}
            >
              <p className="text-2xl font-extralight tracking-tight text-white">
                {value}
              </p>

              <p className="mt-1 text-[10px] font-light uppercase tracking-[0.25em] text-zinc-400">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};