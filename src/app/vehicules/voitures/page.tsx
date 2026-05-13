'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FiArrowRight, FiHeart, FiSliders } from 'react-icons/fi';

import { useFavoris } from '@/hooks/useFavoris';

const FILTERS = [
  'Tous',
  'Berlines',
  'SUV',
  'Coupés',
  'Électriques',
  'Hybrides',
];

const VEHICLES = [
  {
    id: 'berlines-serie-3',
    name: 'Série 3 Berline',
    category: 'Berlines',
    price: 18900,
    img: '/assets/vehicles/berline.webp',
    href: '/vehicules/voitures/berlines/serie-3',
  },
  {
    id: 'suv-prestige',
    name: 'SUV Prestige',
    category: 'SUV',
    price: 27500,
    img: '/assets/vehicles/suv.webp',
    href: '/vehicules/voitures/suv/prestige',
  },
  {
    id: 'coupes-sport',
    name: 'Coupé Sport',
    category: 'Coupés',
    price: 34900,
    img: '/assets/vehicles/coupe.webp',
    href: '/vehicules/voitures/coupes/sport',
  },
  {
    id: 'electriques-e1',
    name: 'Électrique E1',
    category: 'Électriques',
    price: 31900,
    img: '/assets/vehicles/electrique.webp',
    href: '/vehicules/voitures/electriques/e1',
  },
  {
    id: 'hybrides-h3',
    name: 'Hybride H3',
    category: 'Hybrides',
    price: 29400,
    img: '/assets/vehicles/hybride.webp',
    href: '/vehicules/voitures/hybrides/h3',
  },
];

export default function VoituresPage() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const { favoris, toggle } = useFavoris();

  const filtered =
    activeFilter === 'Tous'
      ? VEHICLES
      : VEHICLES.filter(v => v.category === activeFilter);

  return (
    <>
      {/* HERO 🔼 REMONTÉ */}
      <section className="relative flex h-[48vh] items-start pt-14 bg-zinc-950">
        <Image
          priority
          src="/assets/hero-voitures.webp"
          alt="cars"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            gamme
          </p>

          <h1 className="text-4xl font-light text-white md:text-6xl">
            Voitures
          </h1>
        </div>
      </section>

      {/* FILTER BAR 🔼 REMONTÉ */}
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

      {/* GRID 🔼 REMONTÉ */}
      <section className="bg-black py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs text-zinc-600">
            {filtered.length} véhicules
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