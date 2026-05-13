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

export default function VehicleView({ data }: Props) {
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
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
       

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

        {/* BACK */}
        <button
          onClick={() => router.push('/vehicules/camions')}
          className="
            absolute left-6 top-6 z-20
            flex items-center gap-2 rounded-full
            border border-white/20 bg-black/40
            px-4 py-2 text-xs text-white
            backdrop-blur
            transition hover:border-white/40
          "
        >
          <FiArrowLeft size={14} />
          retour
        </button>

        {/* GALLERY NAV */}
        {data.gallery.length > 1 && (
          <>
            <button
              onClick={prevPhoto}
              className="
                absolute left-6 top-1/2 z-20
                flex h-10 w-10 -translate-y-1/2
                items-center justify-center rounded-full
                border border-white/20 bg-black/40
                backdrop-blur
                transition hover:border-white/40
              "
            >
              <FiChevronLeft size={18} />
            </button>

            <button
              onClick={nextPhoto}
              className="
                absolute right-6 top-1/2 z-20
                flex h-10 w-10 -translate-y-1/2
                items-center justify-center rounded-full
                border border-white/20 bg-black/40
                backdrop-blur
                transition hover:border-white/40
              "
            >
              <FiChevronRight size={18} />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {data.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhoto(index)}
                  className={`
                    h-1 rounded-full transition-all
                    ${activePhoto === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}
                  `}
                />
              ))}
            </div>
          </>
        )}

        {/* TITLE */}
        <div className="absolute bottom-10 left-6 z-20">
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            {data.category}
          </p>
          <h1 className="text-5xl font-light md:text-7xl">{data.name}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-[1fr_340px]">
        {/* LEFT */}
        <div>
          <p className="max-w-2xl text-[15px] leading-8 text-zinc-400">
            {data.description}
          </p>

          {/* SPECS */}
          <div className="mt-14 grid grid-cols-2 gap-px bg-zinc-900 md:grid-cols-3">
            {data.specs.map(([label, value]) => (
              <div key={label} className="bg-black p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {label}
                </p>
                <p className="mt-2 text-sm text-white">{value}</p>
              </div>
            ))}
          </div>

          {/* SIMILAR */}
          {data.similar.length > 0 && (
            <div className="mt-14">
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                similaires
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {data.similar.map(vehicle => (
                  <Link
                    key={vehicle.slug}
                    href={`/vehicules/camions/${vehicle.category}/${vehicle.slug}`}
                    className="
                      group overflow-hidden rounded-2xl
                      bg-zinc-900/50 transition hover:bg-zinc-900
                    "
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between p-5">
                      <div>
                        <h3 className="text-white">{vehicle.name}</h3>
                        <p className="text-sm text-zinc-500">
                          {vehicle.price.toLocaleString()} €
                        </p>
                      </div>
                      <FiArrowRight className="text-zinc-500 group-hover:text-white" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <aside className="h-fit rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 lg:sticky lg:top-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            prix
          </p>

          <h2 className="mt-3 text-4xl font-light">
            {data.price.toLocaleString()} €
          </h2>

          <div className="my-6 h-px bg-zinc-800" />

          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            financement
          </p>

          <p className="mt-2 text-2xl font-light">
            {data.monthly}€
            <span className="ml-1 text-sm text-zinc-500">/mois</span>
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="tel:+33000000000"
              className="
                flex items-center justify-center gap-2
                rounded-full bg-white py-3 text-sm
                text-black transition hover:bg-zinc-200
              "
            >
              <FiPhone size={14} />
              appeler
            </a>

            <a
              href="#"
              className="
                flex items-center justify-center gap-2
                rounded-full border border-zinc-700
                py-3 text-sm text-zinc-300
                transition hover:border-zinc-500 hover:text-white
              "
            >
              <FiMail size={14} />
              message
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}