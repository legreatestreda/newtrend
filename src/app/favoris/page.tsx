'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiHeart, FiTrash2 } from 'react-icons/fi';
import { useFavoris } from '@/hooks/useFavoris';

export default function FavorisPage() {
  const { favoris, remove } = useFavoris();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER (plus compact + remonté) */}
      <div className="border-b border-zinc-900 px-6 py-10 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8px] uppercase tracking-[0.35em] text-zinc-600">
            Mes sélections
          </p>

          <div className="flex items-end justify-between">
            <h1 className="text-3xl font-thin md:text-5xl">
              Favoris
            </h1>

            {favoris.length > 0 && (
              <span className="text-[11px] text-zinc-600">
                {favoris.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* EMPTY (remonté + réduit) */}
      {favoris.length === 0 && (
        <div className="flex flex-col items-center gap-5 px-6 py-20 text-center">
          <FiHeart className="text-zinc-700" size={24} />

          <div>
            <p className="text-sm">Aucun véhicule</p>
            <p className="text-xs text-zinc-600">
              Ajoute tes coups de cœur
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="/vehicules/voitures" className="text-[11px] text-zinc-400 hover:text-white">
              Voitures <FiArrowRight size={11} />
            </Link>
            <Link href="/vehicules/camions" className="text-[11px] text-zinc-400 hover:text-white">
              Camions <FiArrowRight size={11} />
            </Link>
          </div>
        </div>
      )}

      {/* GRID (plus serré + cards réduites) */}
      {favoris.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {favoris.map(v => (
              <div
                key={v.id}
                className="group relative overflow-hidden rounded-xl bg-zinc-900/40"
              >

                <button
                  onClick={() => remove(v.id)}
                  className="absolute right-2 top-2 z-10 text-zinc-500 hover:text-red-400"
                >
                  <FiTrash2 size={13} />
                </button>

                <Link href={v.href} className="block">

                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={v.img}
                      alt={v.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <p className="text-[9px] text-zinc-500 uppercase tracking-wider">
                      {v.category}
                    </p>

                    <p className="text-sm font-light">
                      {v.name}
                    </p>

                    <p className="mt-1 text-[11px] text-zinc-500">
                      {v.price.toLocaleString()} €
                    </p>
                  </div>

                </Link>
              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}