'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLogOut,
} from 'react-icons/fi';

export default function ComptePage() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  const session = null;
  const status = 'authenticated';

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const hasSession = localStorage.getItem('user_session');

    if (!hasSession) {
      router.replace('/signin');
    }
  }, [hydrated, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-xs uppercase tracking-widest text-zinc-700">
        Chargement...
      </div>
    );
  }

  const info = [
    {
      icon: FiMail,
      label: 'Email',
      value: session?.user?.email ?? 'Non renseigné',
    },
    {
      icon: FiPhone,
      label: 'Téléphone',
      value: '+33 6 00 00 00 00',
    },
    {
      icon: FiMapPin,
      label: 'Adresse',
      value: 'Paris, France',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO — remonté */}
      <div className="relative h-[34vh] w-full overflow-hidden">
        <Image
          src="/assets/compte-hero.webp"
          alt="compte"
          fill
          className="object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-0 flex w-full items-end justify-between px-6 pb-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              espace personnel
            </p>

            <h1 className="text-3xl md:text-5xl font-thin">
              Mon compte
            </h1>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem('user_session');
              signOut({ callbackUrl: '/signin' });
            }}
            className="rounded-full border border-zinc-700 px-4 py-2 text-[10px] uppercase tracking-widest text-zinc-400 hover:border-red-500 hover:text-red-400"
          >
            Déconnexion <FiLogOut className="ml-1 inline" />
          </button>
        </div>
      </div>

      {/* CONTENT — remonté */}
      <div className="mx-auto max-w-6xl px-6 py-8">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h2 className="text-lg md:text-xl font-thin">
              Profil
            </h2>

            <div className="mt-5 space-y-3">
              {info.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-3 rounded-xl border border-zinc-900 bg-zinc-900/30 p-3"
                >
                  <Icon className="text-zinc-500" size={15} />
                  <div>
                    <p className="text-[9px] uppercase text-zinc-600">
                      {label}
                    </p>
                    <p className="text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — remonté */}
          <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">

            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-800">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt="user"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-600">
                  <FiUser />
                </div>
              )}
            </div>

            <div>
              <p className="text-[9px] uppercase text-zinc-600">
                connecté
              </p>

              <p className="text-base md:text-lg font-thin">
                {session?.user?.name ?? 'Utilisateur'}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}