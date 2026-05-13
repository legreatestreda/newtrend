'use client';

import { useCallback, useEffect, useState } from 'react';

export interface FavoriVehicle {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  href: string;
}

const STORAGE_KEY = 'favoris_vehicles';

const getInitialFavoris = (): FavoriVehicle[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const useFavoris = () => {
  const [favoris, setFavoris] = useState<FavoriVehicle[]>(getInitialFavoris);

  /* SYNC LOCALSTORAGE */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoris));
    } catch {
      // silent fail
    }
  }, [favoris]);

  /* TOGGLE */
  const toggle = useCallback((vehicle: FavoriVehicle) => {
    setFavoris(prev => {
      const exists = prev.some(v => v.id === vehicle.id);

      if (exists) {
        return prev.filter(v => v.id !== vehicle.id);
      }

      return [...prev, vehicle];
    });
  }, []);

  /* CLEAR */
  const clear = useCallback(() => {
    setFavoris([]);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // silent fail
    }
  }, []);

  return {
    favoris,
    toggle,
    clear,
    count: favoris.length,
  };
};