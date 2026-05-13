'use client';

import Image from 'next/image';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FiPhone, FiArrowRight } from 'react-icons/fi';

export default function SigninPage() {
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-black">

      {/* HERO */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          priority
          src="/assets/signin-hero.webp"
          alt="Connexion"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-0 px-6 pb-10 md:px-12">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            Espace client
          </p>
          <h1 className="text-5xl font-thin text-white">
            Connexion
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-thin text-white">
              Connectez-vous
            </h2>
            <p className="mt-4 text-zinc-500">
              Accès à vos favoris et demandes.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">

            {/* GOOGLE */}
            <button
              onClick={() => signIn('google')}
              className="flex w-full items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white"
            >
              <span className="flex-1 text-left">
                Continuer avec Google
              </span>
              <FiArrowRight />
            </button>

            {/* PHONE */}
            <div className="mt-6 flex gap-2">
              <div className="flex h-[46px] w-[60px] items-center justify-center rounded-xl bg-zinc-900">
                <FiPhone />
              </div>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+33..."
                className="w-full rounded-xl bg-zinc-900 px-4 text-white outline-none"
              />
            </div>

            <button className="mt-6 w-full rounded-full bg-white py-3 text-black">
              Recevoir un code
            </button>

            <p className="mt-6 text-center text-xs text-zinc-600">
              En continuant, vous acceptez les conditions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}