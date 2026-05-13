'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiArrowRight, FiClock, FiDollarSign, FiShield } from 'react-icons/fi';

export default function DevisPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    vehicule: '',
    budget: '',
    financement: '',
    message: '',
  });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* HERO ULTRA COMPACT */}
      <div className="relative h-[32vh] w-full overflow-hidden flex items-end">

        <Image
          src="/assets/devis-hero.webp"
          alt="Demande de devis"
          fill
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 w-full px-6 pb-4 md:px-12">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            Financement & estimation
          </p>

          <h1 className="text-2xl md:text-4xl font-thin leading-tight">
            Demande de devis
          </h1>
        </div>
      </div>

      {/* CONTENT COLLÉ AU TOP (pas centré verticalement) */}
      <div className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 py-6">

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-start">

            {/* LEFT */}
            <div className="space-y-4">

              <div>
                <h2 className="text-lg md:text-xl font-thin">
                  Simulation rapide
                </h2>

                <p className="mt-1 text-xs text-zinc-500">
                  Financement / achat / reprise
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { icon: FiClock, title: 'Réponse rapide', desc: '24h' },
                  { icon: FiShield, title: 'Sans engagement', desc: '0 pression' },
                  { icon: FiDollarSign, title: 'Flexible', desc: 'Adapté budget' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-3 rounded-xl border border-zinc-900 bg-zinc-900/30 p-3"
                  >
                    <Icon className="text-zinc-500" size={16} />
                    <div>
                      <p className="text-sm">{title}</p>
                      <p className="text-[11px] text-zinc-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM (remonté visuellement + plus compact) */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 md:p-6">

              <h2 className="mb-4 text-lg font-thin">
                Préparer mon devis
              </h2>

              <div className="grid gap-3 md:grid-cols-2">

                {[
                  ['nom', 'Nom'],
                  ['email', 'Email'],
                  ['telephone', 'Téléphone'],
                  ['vehicule', 'Véhicule'],
                ].map(([key, label]) => (
                  <div key={key}>
                    <p className="mb-1 text-[9px] uppercase text-zinc-500">
                      {label}
                    </p>

                    <input
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-sm outline-none focus:border-zinc-600"
                      value={formData[key as keyof typeof formData]}
                      onChange={e => handleChange(key, e.target.value)}
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black hover:bg-zinc-200">
                    Envoyer
                    <FiArrowRight size={14} />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}