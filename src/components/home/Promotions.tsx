'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CATEGORIES = [
  {
    img: '/assets/promo-banner-1.webp',
    label: 'Voitures neuves',
    sub: 'Dès 18 900 €',
    href: '/vehicules/voitures',
    highlight: true,
  },
  {
    img: '/assets/promo-banner-2.webp',
    label: 'Camions',
    sub: 'Flotte & professionnel',
    href: '/vehicules/camions',
  },
  {
    img: '/assets/promo-banner-3.webp',
    label: 'Machines de forage',
    sub: 'Géotechnique & mines',
    href: '/vehicules/forage',
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Promotions = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[0%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.05] blur-3xl" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* GHOST TEXT */}
        <div className="absolute top-10 left-0 hidden select-none text-[14vw] font-black uppercase tracking-[-0.08em] text-white/[0.03] lg:block">
          STOCK
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-light uppercase tracking-[0.35em] text-zinc-600">
              Nos catégories
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extralight leading-[0.95] tracking-[-0.04em] text-white">
              Le véhicule
              <br />
              <span className="italic text-white/30">
                qu&apos;il vous faut
              </span>
            </h2>
          </div>

          <Link
            href="/vehicules"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[10px] font-light uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white md:inline-flex"
          >
            Tout voir
            <FiArrowRight size="12px" />
          </Link>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + i * 0.08,
                ease: EASE,
              }}
              className={
                cat.highlight
                  ? 'md:col-span-2 md:row-span-2'
                  : ''
              }
            >
              <Link
                href={cat.href}
                className="group relative block h-full overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-white/15"
              >
                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden ${
                    cat.highlight
                      ? 'h-[420px] md:h-full md:min-h-[540px]'
                      : 'h-[260px] md:h-[260px]'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      duration: 1.2,
                      ease: EASE,
                    }}
                  >
                    <Image
                      src={cat.img}
                      alt={cat.label}
                      fill
                      quality={100}
                      className="object-cover brightness-[0.45]"
                    />
                  </motion.div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* LIGHT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 transition duration-500 group-hover:ring-white/20" />
                </div>

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                  <motion.div
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="mb-3 inline-block text-[10px] font-light uppercase tracking-[0.3em] text-zinc-400">
                      {cat.sub}
                    </span>

                    <h3
                      className={`max-w-sm font-extralight leading-tight tracking-[-0.03em] text-white ${
                        cat.highlight
                          ? 'text-3xl md:text-5xl'
                          : 'text-2xl'
                      }`}
                    >
                      {cat.label}
                    </h3>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md transition duration-300 group-hover:border-white/30 group-hover:bg-white/[0.08] group-hover:text-white">
                        Découvrir
                        <FiArrowRight
                          size="11px"
                          className="transition duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* SHADOW DEPTH */}
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-24 rounded-full bg-black/50 blur-3xl" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* MOBILE CTA */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[10px] font-light uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md transition duration-300 hover:border-white/30 hover:text-white"
          >
            Voir tout
            <FiArrowRight size="12px" />
          </Link>
        </div>
      </div>
    </section>
  );
};