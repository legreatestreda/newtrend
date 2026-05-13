export interface SimilarVehicle {
  name: string;
  price: number;
  image: string;
  slug: string;
  category: string;
}

export interface VehicleData {
  name: string;
  category: string;
  price: number;
  monthly: number;
  description: string;
  gallery: string[];
  specs: [string, string][];
  similar: SimilarVehicle[];
}

export const MODELS: Record<
  string,
  Record<string, VehicleData>
> = {
  berlines: {
    'serie-3': {
      name: 'Série 3',
      category: 'Berlines',
      price: 18900,
      monthly: 299,
      description: 'Berline équilibrée confort/performance.',
      gallery: ['/assets/vehicles/berline.webp'],
      specs: [
        ['Motorisation', '2.0L TDI'],
        ['Transmission', 'Auto'],
        ['Conso', '5.2L'],
        ['0-100', '8.2s'],
      ],
      similar: [
        {
          name: 'SUV Prestige',
          price: 27500,
          image: '/assets/vehicles/suv.webp',
          slug: 'prestige',
          category: 'suv',
        },
      ],
    },
  },

  suv: {
    prestige: {
      name: 'SUV Prestige',
      category: 'SUV',
      price: 27500,
      monthly: 429,
      description: 'SUV confort + polyvalence.',
      gallery: ['/assets/vehicles/suv.webp'],
      specs: [
        ['Motorisation', '2.0L TDI'],
        ['Transmission', 'Auto'],
        ['Conso', '6.8L'],
        ['0-100', '7.4s'],
      ],
      similar: [
        {
          name: 'Série 3',
          price: 18900,
          image: '/assets/vehicles/berline.webp',
          slug: 'serie-3',
          category: 'berlines',
        },
      ],
    },
  },
};