'use client';

import Link from 'next/link';
import { FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';
import type { NavLink } from '@/components/header/page';

interface Props {
  navLinks: NavLink[];
}

export const BottomNavigation = ({ navLinks }: Props) => {
  return (
    <nav
      className="
        fixed bottom-0 left-0 z-50
        flex h-16 w-full items-center justify-around
        border-t border-white/10 bg-black/80
        px-4 backdrop-blur-xl md:hidden
      "
    >
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className="
            flex flex-col items-center justify-center
            text-[10px] uppercase tracking-[0.15em]
            text-zinc-400 transition hover:text-white
          "
        >
          <span>{link.name}</span>
        </Link>
      ))}

      <Link
        href="/favoris"
        className="
          flex flex-col items-center justify-center
          text-zinc-400 transition hover:text-white
        "
      >
        <FiHeart size={18} />
      </Link>

      <Link
        href="/devis"
        className="
          flex flex-col items-center justify-center
          text-zinc-400 transition hover:text-white
        "
      >
        <FiShoppingBag size={18} />
      </Link>

      <Link
        href="/compte"
        className="
          flex flex-col items-center justify-center
          text-zinc-400 transition hover:text-white
        "
      >
        <FiUser size={18} />
      </Link>
    </nav>
  );
};