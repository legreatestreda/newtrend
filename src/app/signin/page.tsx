'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FiPhone, FiArrowRight } from 'react-icons/fi';

export default function Signin() {
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* HERO PLUS PETIT + PLUS HAUT */}
      <div className="relative h-[28vh] w-full overflow-hidden flex items-end">

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="relative z-10 w-full px-6 md:px-12 pb-3">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            Espace client
          </p>

          <h1 className="text-2xl md:text-4xl font-thin leading-tight">
            Connexion
          </h1>
        </div>
      </div>

      {/* CONTENT COLLÉ AU TOP */}
      <div className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12 py-6">

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start">

            {/* LEFT */}
            <div className="space-y-3">

              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                Accès personnel
              </p>

              <h2 className="text-lg md:text-xl font-thin leading-snug">
                Connectez-vous pour accéder à votre espace.
              </h2>

              <p className="text-[12px] text-zinc-500 max-w-md">
                Favoris, devis et gestion centralisée.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4 md:p-6">

              <h2 className="mb-4 text-lg font-thin">
                Se connecter
              </h2>

              {/* GOOGLE */}
              <button
                onClick={() => signIn('google')}
                className="flex w-full items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm hover:border-zinc-600 transition"
              >
                <span className="flex-1 text-left">
                  Continuer avec Google
                </span>
                <FiArrowRight size={14} className="text-zinc-500" />
              </button>

              {/* DIVIDER */}
              <div className="my-3 flex items-center gap-3">
                <div className="h-px flex-1 bg-zinc-900" />
                <span className="text-[9px] uppercase text-zinc-700">
                  ou
                </span>
                <div className="h-px flex-1 bg-zinc-900" />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-[9px] uppercase text-zinc-600">
                  Téléphone
                </label>

                <div className="mt-2 flex gap-3">
                  <div className="flex h-10 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500">
                    <FiPhone size={14} />
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 00 00 00 00"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-600"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-4 w-full rounded-full bg-white py-2 text-sm font-medium text-black hover:bg-zinc-200 transition">
                Recevoir un code
              </button>

              {/* LEGAL */}
              <p className="mt-3 text-center text-[10px] text-zinc-700 leading-snug">
                En continuant, vous acceptez les conditions d’utilisation.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}