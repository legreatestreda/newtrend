'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FiArrowRight, FiHeart, FiSliders } from 'react-icons/fi';
import { useFavoris } from '@/hooks/useFavoris';

const FILTERS = [
  'Tous',
  'Foreuses rotatives',
  'Foreuses percussives',
  'Forage horizontal dirigé',
  'Machines à micropieux',
];

const MACHINES = [
  {
    id: 'dr-900',
    name: 'DR-900 Rotary',
    category: 'Foreuses rotatives',
    price: 189000,
    img: '/assets/forage/dr-900-1.webp',
    href: '/vehicules/forage/rotatives/dr-900',
  },
  {
    id: 'dr-600',
    name: 'DR-600 Compact',
    category: 'Foreuses rotatives',
    price: 124000,
    img: '/assets/forage/dr-600.webp',
    href: '/vehicules/forage/rotatives/dr-600',
  },
  {
    id: 'dp-440',
    name: 'DP-440 Impact',
    category: 'Foreuses percussives',
    price: 97000,
    img: '/assets/forage/dp-440.webp',
    href: '/vehicules/forage/percussives/dp-440',
  },
  {
    id: 'dh-750',
    name: 'DH-750 HDD',
    category: 'Forage horizontal dirigé',
    price: 215000,
    img: '/assets/forage/dh-750-1.webp',
    href: '/vehicules/forage/horizontaux/dh-750',
  },
  {
    id: 'mp-280',
    name: 'MP-280 Piling',
    category: 'Machines à micropieux',
    price: 78000,
    img: '/assets/forage/mp-280.webp',
    href: '/vehicules/forage/micropieux/mp-280',
  },
];

export default function MachinesForagePage() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const { favoris, toggle } = useFavoris();

  const filtered =
    activeFilter === 'Tous'
      ? MACHINES
      : MACHINES.filter(v => v.category === activeFilter);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-20">
        <Image
          priority
          src="/assets/hero-forage.webp"
          alt="machines de forage"
          fill
          className="object-cover opacity-40 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* LIGHT EFFECT */}
        <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10">
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            industrie lourde
          </p>

          <h1 className="mt-3 text-[clamp(2.5rem,5vw,4.5rem)] font-extralight tracking-[-0.04em]">
            Machines de forage
          </h1>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-40 border-y border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          {/* FILTERS */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  whitespace-nowrap rounded-full px-4 py-2 text-[10px]
                  uppercase tracking-[0.2em] transition
                  ${
                    activeFilter === filter
                      ? 'bg-white text-black'
                      : 'border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:flex">
            <FiSliders size={14} />
            filtres
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="relative py-14">
        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            {filtered.length} machines disponibles
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {filtered.map(machine => {
              const isFavori = favoris.some(f => f.id === machine.id);

              return (
                <Link
                  key={machine.id}
                  href={machine.href}
                  className="
                    group relative overflow-hidden rounded-2xl
                    border border-white/5 bg-white/[0.02]
                    transition duration-500
                    hover:-translate-y-1 hover:border-white/20
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={machine.img}
                      alt={machine.name}
                      fill
                      className="object-cover brightness-75 transition duration-700 group-hover:scale-110 group-hover:brightness-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                      {machine.category}
                    </p>

                    <h3 className="mt-2 text-lg font-light">
                      {machine.name}
                    </h3>

                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-sm text-zinc-400">
                        {machine.price.toLocaleString()} €
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:text-white group-hover:border-white/30">
                        <FiArrowRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* FAVORIS */}
                  <button
                    onClick={e => {
                      e.preventDefault();
                      toggle(machine);
                    }}
                    className="
                      absolute right-3 top-3 rounded-full
                      bg-black/40 p-2 backdrop-blur
                      border border-white/10
                      transition hover:border-white/30
                    "
                  >
                    <FiHeart
                      size={14}
                      className={
                        isFavori
                          ? 'fill-white text-white'
                          : 'text-zinc-400'
                      }
                    />
                  </button>

                </Link>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
}