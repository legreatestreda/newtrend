'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FiArrowRight, FiHeart, FiSliders } from 'react-icons/fi';
import { useFavoris } from '@/hooks/useFavoris';

const FILTERS = [
  'Tous',
  'Bennes',
  'Frigorifiques',
  'Plateaux',
  'Tracteurs',
  'Utilitaires lourds',
];

const VEHICLES = [
  {
    id: 'camion-benne-x1',
    name: 'Benne X1',
    category: 'Bennes',
    price: 38900,
    img: '/assets/vehicles/truck-benne.webp',
    href: '/vehicules/camions/bennes/x1',
  },
  {
    id: 'camion-frigo-pro',
    name: 'Frigo Pro',
    category: 'Frigorifiques',
    price: 45900,
    img: '/assets/vehicles/truck-frigo.webp',
    href: '/vehicules/camions/frigorifiques/pro',
  },
  {
    id: 'camion-plateau-max',
    name: 'Plateau Max',
    category: 'Plateaux',
    price: 41900,
    img: '/assets/vehicles/truck-plateau.webp',
    href: '/vehicules/camions/plateaux/max',
  },
  {
    id: 'tracteur-tx7',
    name: 'Tracteur TX7',
    category: 'Tracteurs',
    price: 72900,
    img: '/assets/vehicles/truck-tractor.webp',
    href: '/vehicules/camions/tracteurs/tx7',
  },
  {
    id: 'utilitaire-hd9',
    name: 'Utilitaire HD9',
    category: 'Utilitaires lourds',
    price: 34900,
    img: '/assets/vehicles/truck-utilitaire.webp',
    href: '/vehicules/camions/utilitaires/hd9',
  },
];

export default function CamionsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const { favoris, toggle } = useFavoris();

  const filtered =
    activeFilter === 'Tous'
      ? VEHICLES
      : VEHICLES.filter(v => v.category === activeFilter);

  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[48vh] items-start pt-14 bg-zinc-950">
        <Image
          priority
          src="/assets/hero-camions.webp"
          alt="camions"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            gamme
          </p>

          <h1 className="text-4xl font-light text-white md:text-6xl">
            Camions
          </h1>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="relative z-40 border-b border-white/5 bg-black/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex gap-2 overflow-x-auto">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  whitespace-nowrap rounded-full px-4 py-2 text-[11px] transition
                  ${
                    activeFilter === filter
                      ? 'bg-white text-black'
                      : 'text-zinc-400 hover:text-white'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 text-[11px] text-zinc-500 md:flex">
            <FiSliders size={14} />
            filtres
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="bg-black py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs text-zinc-600">
            {filtered.length} camions
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {filtered.map(vehicle => {
              const isFavori = favoris.some(f => f.id === vehicle.id);

              return (
                <Link
                  key={vehicle.id}
                  href={vehicle.href}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 transition hover:bg-white/10"
                >
                  <div className="relative h-44">
                    <Image
                      src={vehicle.img}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-500">
                      {vehicle.category}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-light text-white">
                          {vehicle.name}
                        </h3>

                        <span className="text-sm text-zinc-400">
                          {vehicle.price.toLocaleString()} €
                        </span>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:text-white">
                        <FiArrowRight size={13} />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={e => {
                      e.preventDefault();
                      toggle(vehicle);
                    }}
                    className="absolute right-3 top-3 rounded-full bg-black/40 p-2 backdrop-blur"
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
    </>
  );
}