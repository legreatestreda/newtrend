import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrimaryLayout } from '@/layouts';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const Signin: NextPageWithLayout = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-black">
      {/* ─── HERO ───────────────────────────── */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          priority
          src="/assets/signin-hero.webp"
          alt="Connexion"
          fill
          quality={95}
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-12">
          <p className="mb-2 text-[9px] font-light uppercase tracking-[0.3em] text-white/40">
            Espace client
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-thin leading-none tracking-tight text-white">
            Connexion
          </h1>
        </div>
      </div>

      {/* ─── CONTENU ────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* ─── COLONNE GAUCHE ─────────────── */}
          <div className="flex flex-col">
            <p className="mb-3 text-[9px] font-light uppercase tracking-[0.3em] text-zinc-600">
              Accès personnel
            </p>
            <h2 className="mb-5 text-[clamp(1.6rem,3vw,2.4rem)] font-thin leading-tight text-white">
              Connectez-vous pour accéder à votre espace.
            </h2>
            <p className="mb-10 max-w-md text-[13px] font-light leading-relaxed text-zinc-500">
              Retrouvez vos favoris, vos demandes de devis et gérez vos
              informations personnelles en toute simplicité.
            </p>

            {/* Avantages */}
            <div className="mb-10 flex flex-col gap-3">
              {[
                {
                  title: 'Favoris sauvegardés',
                  desc: 'Retrouvez vos véhicules préférés à tout moment.',
                },
                {
                  title: 'Suivi de vos devis',
                  desc: "Consultez l'état de vos demandes en cours.",
                },
                {
                  title: 'Expérience personnalisée',
                  desc: 'Des recommandations adaptées à votre profil.',
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-900 bg-zinc-900/30 p-5"
                >
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                  <div>
                    <p className="mb-0.5 text-[13px] font-light text-white">
                      {title}
                    </p>
                    <p className="text-[12px] font-light text-zinc-600">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-zinc-900">
              {[
                ['+1200', 'Clients'],
                ['98%', 'Satisfaction'],
                ['24h', 'Réponse'],
              ].map(([value, label]) => (
                <div key={label} className="bg-black px-4 py-5 text-center">
                  <p className="mb-1 text-xl font-thin text-white">{value}</p>
                  <p className="text-[9px] font-light uppercase tracking-[0.18em] text-zinc-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── FORMULAIRE ─────────────────── */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
            <p className="mb-2 text-[9px] font-light uppercase tracking-[0.25em] text-zinc-600">
              Votre compte
            </p>
            <h2 className="mb-8 text-2xl font-thin text-white">Se connecter</h2>

            <div className="flex flex-col gap-4">
              {/* Google */}
              <button
                type="button"
                onClick={() => signIn('google')}
                className="flex w-full items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-[13px] font-light text-white transition hover:border-zinc-600"
              >
                <Image
                  src="/assets/google.svg"
                  alt="Google"
                  width={18}
                  height={18}
                />
                <span className="flex-1 text-left">Continuer avec Google</span>
                <FiArrowRight size="13px" className="text-zinc-600" />
              </button>

              {/* Séparateur */}
              <div className="flex items-center gap-4 py-2">
                <div className="h-px flex-1 bg-zinc-900" />
                <p className="text-[9px] font-light uppercase tracking-[0.2em] text-zinc-700">
                  ou
                </p>
                <div className="h-px flex-1 bg-zinc-900" />
              </div>

              {/* Téléphone */}
              <div>
                <label className="mb-1.5 block text-[9px] font-light uppercase tracking-[0.2em] text-zinc-600">
                  Numéro de téléphone
                </label>
                <div className="flex gap-3">
                  <div className="flex h-[46px] w-[60px] shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500">
                    <FiPhone size="15px" />
                  </div>
                  <input
                    type="tel"
                    placeholder="+33 6 00 00 00 00"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-[13px] font-light text-white placeholder-zinc-700 outline-none transition focus:border-zinc-600"
                  />
                </div>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.15em] text-black transition hover:bg-zinc-200"
              >
                Recevoir un code
                <FiArrowRight size="12px" />
              </button>

              {/* Mentions légales */}
              <p className="mt-2 text-center text-[11px] font-light leading-relaxed text-zinc-700">
                En vous connectant, vous acceptez nos{' '}
                <Link
                  href="/terms-service"
                  className="text-zinc-500 transition hover:text-white"
                >
                  Conditions d&apos;utilisation
                </Link>{' '}
                et notre{' '}
                <Link
                  href="/privacy-policy"
                  className="text-zinc-500 transition hover:text-white"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BAS DE PAGE ────────────────────── */}
      <div className="border-t border-zinc-900 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[9px] font-light uppercase tracking-[0.3em] text-zinc-600">
            Première visite ?
          </p>
          <h2 className="mb-10 text-2xl font-thin text-white">
            Votre compte est créé automatiquement.
          </h2>
          <div className="grid grid-cols-1 gap-px bg-zinc-900 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Choisissez une méthode',
                desc: 'Google ou votre numéro de téléphone.',
              },
              {
                step: '02',
                title: 'Vérification rapide',
                desc: 'Un code vous est envoyé instantanément.',
              },
              {
                step: '03',
                title: 'Accès immédiat',
                desc: 'Votre espace est prêt en quelques secondes.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-black px-8 py-8">
                <p className="mb-5 text-[9px] font-light uppercase tracking-[0.25em] text-zinc-700">
                  Étape {step}
                </p>
                <h3 className="mb-3 text-base font-light text-white">
                  {title}
                </h3>
                <p className="text-[13px] font-light leading-relaxed text-zinc-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Signin.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      seo={{
        title: 'Connexion',
        description: 'Connectez-vous à votre espace client.',
        canonical: '/signin',
      }}
    >
      {page}
    </PrimaryLayout>
  );
};

export default Signin;
