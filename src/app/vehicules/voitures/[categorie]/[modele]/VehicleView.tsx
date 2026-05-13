'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiMail,
  FiPhone,
} from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';

interface SimilarVehicle {
  name: string;
  price: number;
  image: string;
  slug: string;
  category: string;
}

interface VehicleData {
  name: string;
  category: string;
  price: number;
  monthly: number;
  description: string;
  gallery: string[];
  specs: string[][];
  similar: SimilarVehicle[];
}

interface Props {
  data: VehicleData;
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function VehicleView({
  data,
}: Props) {
  const router = useRouter();

  const [activePhoto, setActivePhoto] = useState(0);

  const nextPhoto = () => {
    setActivePhoto(prev =>
      prev === data.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setActivePhoto(prev =>
      prev === 0 ? data.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative h-[92vh] overflow-hidden">
        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhoto}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: EASE,
            }}
            className="absolute inset-0"
          >
           
          </motion.div>
        </AnimatePresence>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/20" />

        {/* LIGHT */}
        <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* BACK */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: EASE,
          }}
          onClick={() => router.push('/vehicules/voitures')}
          className="
            group absolute left-6 top-6 z-20
            flex items-center gap-2 rounded-full
            border border-white/10 bg-black/30
            px-5 py-3
            text-[11px] uppercase tracking-[0.2em]
            text-white backdrop-blur-xl
            transition duration-300
            hover:border-white/30
            hover:bg-black/50
          "
        >
          <FiArrowLeft
            size={14}
            className="transition group-hover:-translate-x-0.5"
          />
          retour
        </motion.button>

        {/* NAV */}
        {data.gallery.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="
                group absolute left-6 top-1/2 z-20
                flex h-14 w-14 -translate-y-1/2
                items-center justify-center rounded-full
                border border-white/10 bg-black/30
                text-white backdrop-blur-xl
                transition duration-300
                hover:border-white/30 hover:bg-black/50
              "
            >
              <FiChevronLeft
                size={20}
                className="transition group-hover:-translate-x-0.5"
              />
            </button>

            <button
              onClick={nextPhoto}
              className="
                group absolute right-6 top-1/2 z-20
                flex h-14 w-14 -translate-y-1/2
                items-center justify-center rounded-full
                border border-white/10 bg-black/30
                text-white backdrop-blur-xl
                transition duration-300
                hover:border-white/30 hover:bg-black/50
              "
            >
              <FiChevronRight
                size={20}
                className="transition group-hover:translate-x-0.5"
              />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
              {data.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhoto(index)}
                  className={`
                    h-1.5 rounded-full transition-all duration-500
                    ${
                      activePhoto === index
                        ? 'w-12 bg-white'
                        : 'w-3 bg-white/30 hover:bg-white/60'
                    }
                  `}
                />
              ))}
            </div>
          </>
        )}

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: EASE,
              }}
              className="mb-4 text-[10px] uppercase tracking-[0.35em] text-zinc-400"
            >
              {data.category}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: EASE,
              }}
              className="max-w-5xl text-[clamp(4rem,8vw,8rem)] font-extralight leading-[0.92] tracking-[-0.06em]"
            >
              {data.name}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative overflow-hidden bg-black py-20">
        {/* BG LIGHT */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-[1fr_380px] lg:px-16">
          {/* LEFT */}
          <div>
            {/* DESCRIPTION */}
            <div className="max-w-3xl">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                description
              </p>

              <p className="text-[16px] font-light leading-9 text-zinc-400">
                {data.description}
              </p>
            </div>

            {/* SPECS */}
            <div className="mt-16">
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                caractéristiques
              </p>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-white/5 md:grid-cols-3">
                {data.specs.map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    className="
                      border border-white/5 bg-white/[0.02]
                      p-6 backdrop-blur-xl
                    "
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                      {label}
                    </p>

                    <p className="mt-3 text-[15px] font-light text-white">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SIMILAR */}
            {data.similar.length > 0 && (
              <div className="mt-20">
                <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  véhicules similaires
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  {data.similar.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={`/vehicules/voitures/${vehicle.category}/${vehicle.slug}`}
                        className="
                          group block overflow-hidden rounded-[2rem]
                          border border-white/5 bg-white/[0.02]
                          transition duration-500
                          hover:-translate-y-2
                          hover:border-white/15
                        "
                      >
                        {/* IMAGE */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={vehicle.image}
                            alt={vehicle.name}
                            fill
                            className="
                              object-cover brightness-[0.7]
                              transition duration-700
                              group-hover:scale-105
                            "
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                        </div>

                        {/* CONTENT */}
                        <div className="flex items-center justify-between p-6">
                          <div>
                            <h3 className="text-[1.3rem] font-extralight text-white">
                              {vehicle.name}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                              {vehicle.price.toLocaleString()} €
                            </p>
                          </div>

                          <div
                            className="
                              flex h-11 w-11 items-center justify-center rounded-full
                              border border-white/10 bg-white/[0.03]
                              text-zinc-500 transition duration-300
                              group-hover:border-white/30
                              group-hover:text-white
                            "
                          >
                            <FiArrowRight
                              size={15}
                              className="transition group-hover:translate-x-0.5"
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div
              className="
                overflow-hidden rounded-[2.5rem]
                border border-white/5
                bg-white/[0.03]
                p-8 backdrop-blur-2xl
              "
            >
              {/* LIGHT */}
              <div className="absolute right-[-30%] top-[-10%] h-[250px] w-[250px] rounded-full bg-white/[0.03] blur-3xl" />

              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  prix
                </p>

                <h2 className="mt-4 text-5xl font-extralight tracking-[-0.05em] text-white">
                  {data.price.toLocaleString()} €
                </h2>

                <div className="my-8 h-px bg-white/5" />

                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                  financement
                </p>

                <div className="mt-4 flex items-end gap-2">
                  <p className="text-4xl font-extralight tracking-[-0.04em]">
                    {data.monthly}€
                  </p>

                  <span className="mb-1 text-sm text-zinc-500">
                    /mois
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col gap-3">
                  <a
                    href="tel:+33000000000"
                    className="
                      group flex items-center justify-center gap-2 rounded-full
                      bg-white py-4
                      text-sm uppercase tracking-[0.18em]
                      text-black transition duration-300
                      hover:bg-zinc-200
                    "
                  >
                    <FiPhone
                      size={15}
                      className="transition group-hover:rotate-12"
                    />
                    appeler
                  </a>

                  <a
                    href="#"
                    className="
                      group flex items-center justify-center gap-2 rounded-full
                      border border-white/10 bg-white/[0.02]
                      py-4 text-sm uppercase tracking-[0.18em]
                      text-zinc-300 backdrop-blur-xl
                      transition duration-300
                      hover:border-white/30
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <FiMail
                      size={15}
                      className="transition group-hover:-translate-y-0.5"
                    />
                    envoyer un message
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}