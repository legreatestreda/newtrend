'use client';

import Link from 'next/link';
import Image from 'next/image';

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';

import { FiArrowUpRight } from 'react-icons/fi';

import type { IconType } from 'react-icons';

const socialMedias: [IconType, string][] = [
  [BsInstagram, 'https://instagram.com'],
  [BsTwitter, 'https://twitter.com'],
  [BsFacebook, 'https://facebook.com'],
  [BsLinkedin, 'https://linkedin.com'],
];

const footerLinks = [
  {
    title: 'Concession',
    links: [
      { label: 'À propos', href: '/about' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Véhicules',
    links: [
      { label: 'Voitures', href: '/vehicules/voitures' },
      { label: 'Camions', href: '/vehicules/camions' },
      { label: 'Occasions', href: '/occasions' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Financement', href: '/financement' },
      { label: 'SAV', href: '/sav' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LIGHTS */}
        <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.05] blur-3xl" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* GHOST TEXT */}
        <div className="absolute bottom-[-20px] left-0 hidden select-none text-[16vw] font-black uppercase tracking-[-0.08em] text-white/[0.03] lg:block">
          NEW TREND
        </div>
      </div>

      {/* MAIN */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          {/* BRAND */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group relative inline-block"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

              <Image
                src="/logo.png"
                alt="Terrano"
                width={120}
                height={40}
                quality={100}
                className="relative z-10 object-contain"
              />
            </Link>

            <p className="mt-7 max-w-xs text-sm font-light leading-relaxed text-zinc-500">
              Concession premium depuis 2004.
              Véhicules particuliers, utilitaires,
              camions et machines professionnelles.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-3">
              {socialMedias.map(([Icon, href]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="
                    group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full
                    border border-white/10 bg-white/[0.03]
                    text-zinc-500 backdrop-blur-xl
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-white/30
                    hover:bg-white/[0.08]
                    hover:text-white
                  "
                >
                  {/* HOVER LIGHT */}
                  <span className="absolute inset-0 bg-white/[0.04] opacity-0 transition duration-300 group-hover:opacity-100" />

                  <Icon
                    size={15}
                    className="relative z-10"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            {footerLinks.map(section => (
              <div key={section.title}>
                <h3 className="mb-6 text-[10px] font-light uppercase tracking-[0.3em] text-zinc-700">
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          group inline-flex items-center gap-2
                          text-sm font-light text-zinc-500
                          transition duration-300 hover:text-white
                        "
                      >
                        <span>{link.label}</span>

                        <FiArrowUpRight
                          size={13}
                          className="
                            opacity-0 transition duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                            group-hover:opacity-100
                          "
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/5">
        <div
          className="
            mx-auto flex max-w-7xl flex-col gap-4
            px-6 py-6
            text-xs text-zinc-700
            md:flex-row md:items-center md:justify-between
            md:px-10 lg:px-16
          "
        >
          {/* COPYRIGHT */}
          <p className="tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} Terrano — Tous droits réservés
          </p>

          {/* CENTER */}
          <Link
            href="https://github.com/mehrabmp/kara-shop"
            target="_blank"
            className="
              group flex items-center gap-2
              text-zinc-600 transition duration-300
              hover:text-white
            "
          >
            <BsGithub
              size={16}
              className="transition duration-300 group-hover:rotate-12"
            />

            <span className="text-[10px] uppercase tracking-[0.25em]">
              Source
            </span>
          </Link>

          {/* AUTHOR */}
          <p className="text-zinc-700">
            Créé par{' '}
            <Link
              href="https://github.com/mehrabmp"
              target="_blank"
              className="
                text-zinc-500 transition duration-300
                hover:text-white
              "
            >
              Reda
            </Link>
          </p>
        </div>
      </div>

      {/* TOP LIGHT BORDER */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
};