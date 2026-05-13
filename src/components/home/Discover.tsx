'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const VEHICLES = [
  {
    name: 'Série Berline',
    category: 'Voiture',
    price: 'Dès 18 900 €',
    href: '/vehicules/berline',
    img: '/assets/vehicles/berline.webp',
  },
  {
    name: 'SUV Tout-terrain',
    category: 'Voiture',
    price: 'Dès 27 500 €',
    href: '/vehicules/suv',
    img: '/assets/vehicles/suv.webp',
  },
  {
    name: 'Utilitaire Compact',
    category: 'Utilitaire',
    price: 'Dès 22 000 €',
    href: '/vehicules/utilitaire-compact',
    img: '/assets/vehicles/utilitaire.webp',
  },
  {
    name: 'Camion Porteur',
    category: 'Camion',
    price: 'Dès 54 000 €',
    href: '/vehicules/camion-porteur',
    img: '/assets/vehicles/camion.webp',
  },
  {
    name: 'Berline Électrique',
    category: 'Électrique',
    price: 'Dès 31 900 €',
    href: '/vehicules/electrique',
    img: '/assets/vehicles/electrique.webp',
  },
  {
    name: 'Foreuse DR-900',
    category: 'Forage',
    price: 'Dès 189 000 €',
    href: '/vehicules/forage/rotatives/dr-900',
    img: '/assets/forage/dr-900-1.webp',
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const Discover = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-60px',
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[550px] w-[550px] rounded-full bg-white/[0.04] blur-3xl" />

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
        <div className="absolute right-0 top-0 hidden select-none text-[15vw] font-black uppercase tracking-[-0.08em] text-white/[0.03] lg:block">
          DRIVE
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
              Notre gamme
            </p>

            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-extralight leading-[0.95] tracking-[-0.04em] text-white">
              Découvrez
              <br />
              <span className="italic text-white/30">
                nos modèles
              </span>
            </h2>
          </div>

          <Link
            href="/vehicules"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[10px] font-light uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white md:inline-flex"
          >
            Tous les modèles
            <FiArrowRight size="12px" />
          </Link>
        </motion.div>

        {/* VEHICLES GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map(({ name, category, price, href, img }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.08 + i * 0.06,
                ease: EASE,
              }}
            >
              <Link
                href={href}
                className="group relative block overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-white/15"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 1.2,
                      ease: EASE,
                    }}
                  >
                    <Image
                      src={img}
                      alt={name}
                      fill
                      quality={100}
                      className="object-cover object-center brightness-[0.55]"
                    />
                  </motion.div>

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* CATEGORY */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md">
                    <span className="text-[9px] font-light uppercase tracking-[0.25em] text-white/70">
                      {category}
                    </span>
                  </div>

                  {/* SHADOW DEPTH */}
                  <div className="absolute bottom-[-40px] left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-black/60 blur-3xl" />
                </div>

                {/* CONTENT */}
                <div className="relative p-6">
                  <div className="mb-5">
                    <h3 className="text-[1.4rem] font-extralight tracking-[-0.03em] text-white transition duration-300 group-hover:text-white/90">
                      {name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                        À partir de
                      </p>

                      <p className="mt-1 text-sm font-light text-zinc-300">
                        {price}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 backdrop-blur-md transition duration-300 group-hover:border-white/30 group-hover:bg-white/[0.08] group-hover:text-white">
                      <FiArrowRight
                        size="15px"
                        className="transition duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>

                {/* BORDER LIGHT */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5 transition duration-500 group-hover:ring-white/15" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* MOBILE CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/vehicules"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[10px] font-light uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md transition duration-300 hover:border-white/30 hover:text-white"
          >
            Tous les modèles
            <FiArrowRight size="12px" />
          </Link>
        </div>
      </div>
    </section>
  );
};