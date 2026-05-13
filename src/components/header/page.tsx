'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';

import { BottomNavigation } from '@/components/bottom-navigation/BottomNavigation';

export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: 'Voitures', href: '/vehicules/voitures' },
  { name: 'Camions', href: '/vehicules/camions' },
  { name: 'Machine de forage', href: '/vehicules/forage' },
  { name: 'Contact', href: '/contact' },
];

export const sideNavLinks: [string, IconType][] = [
  ['/favoris', FiHeart],
  ['/devis', FiShoppingBag],
];

export const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${hidden ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div
        className={`
          border-b border-white/5 backdrop-blur-xl transition-all duration-300
          ${scrolled ? 'h-14 bg-black' : 'h-16 bg-black'}
        `}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center px-6 md:px-10 lg:px-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={35}
              quality={100}
              className={`
                transition-all duration-300
                ${scrolled ? 'scale-90 opacity-90' : 'scale-100 opacity-100'}
              `}
            />
          </Link>

          {/* NAV */}
          <ul className="ml-10 hidden h-full items-center gap-1 md:flex">
            {navLinks.map(item => (
              <li key={item.href} className="h-full">
                <Link
                  href={item.href}
                  className="
                    relative flex h-full items-center px-4
                    text-[11px] font-light uppercase tracking-[0.18em]
                    text-zinc-400 transition hover:text-white
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-2">
            {sideNavLinks.map(([url, Icon]) => (
              <Link
                key={url}
                href={url}
                className="
                  flex h-10 w-10 items-center justify-center rounded-full
                  border border-white/10 bg-white/5
                  text-zinc-400 backdrop-blur-md
                  transition hover:border-white/30 hover:text-white
                "
              >
                <Icon size="18px" />
              </Link>
            ))}

            <Link
              href="/compte"
              className="
                ml-1 flex h-10 w-10 items-center justify-center rounded-full
                border border-white/10 bg-white/5
                text-zinc-400 backdrop-blur-md
                transition hover:border-white/30 hover:text-white
              "
            >
              <FiUser size="18px" />
            </Link>
          </div>
        </div>
      </div>

      <BottomNavigation navLinks={navLinks} />
    </header>
  );
};