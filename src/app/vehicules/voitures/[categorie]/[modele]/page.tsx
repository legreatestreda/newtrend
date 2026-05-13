import { notFound } from 'next/navigation';

import VehicleView from './VehicleView';

const MODELS = {
  berlines: {
    'serie-3': {
      name: 'Série 3 Berline',
      category: 'Berlines',

      price: 18900,
      monthly: 299,

      description:
        "La Série 3 Berline incarne l'équilibre parfait entre élégance, dynamisme et confort premium. Pensée pour une conduite fluide et raffinée, elle associe design moderne, finitions haut de gamme et performances maîtrisées.",

      gallery: [
        '/assets/vehicles/berline.webp',
        '/assets/vehicles/berline-2.webp',
        '/assets/vehicles/berline-3.webp',
      ],

      specs: [
        ['Motorisation', '2.0L TDI 150ch'],
        ['Transmission', 'Automatique'],
        ['Consommation', '5.2L / 100km'],
        ['0 à 100', '8.2 sec'],
        ['Vitesse max', '220 km/h'],
        ['Coffre', '480L'],
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

      description:
        'Le SUV Prestige combine puissance, confort premium et polyvalence. Conçu pour les longs trajets comme pour la ville, il offre une expérience de conduite haut de gamme avec un espace généreux et des technologies modernes.',

      gallery: [
        '/assets/vehicles/suv.webp',
        '/assets/vehicles/suv-2.webp',
        '/assets/vehicles/suv-3.webp',
      ],

      specs: [
        ['Motorisation', '2.0L TDI 190ch'],
        ['Transmission', 'Automatique'],
        ['Consommation', '6.8L / 100km'],
        ['0 à 100', '7.4 sec'],
        ['Vitesse max', '210 km/h'],
        ['Coffre', '650L'],
      ],

      similar: [
        {
          name: 'Série 3 Berline',
          price: 18900,
          image: '/assets/vehicles/berline.webp',
          slug: 'serie-3',
          category: 'berlines',
        },
      ],
    },
  },

  coupes: {
    sport: {
      name: 'Coupé Sport',
      category: 'Coupés',

      price: 34900,
      monthly: 549,

      description:
        'Le Coupé Sport propose des lignes agressives, une conduite nerveuse et une finition intérieure inspirée du sport automobile. Une machine pensée pour les passionnés.',

      gallery: [
        '/assets/vehicles/coupe.webp',
        '/assets/vehicles/coupe-2.webp',
        '/assets/vehicles/coupe-3.webp',
      ],

      specs: [
        ['Motorisation', '3.0L Turbo 320ch'],
        ['Transmission', 'Automatique'],
        ['Consommation', '8.1L / 100km'],
        ['0 à 100', '5.1 sec'],
        ['Vitesse max', '250 km/h'],
        ['Coffre', '390L'],
      ],

      similar: [
        {
          name: 'Électrique E1',
          price: 31900,
          image: '/assets/vehicles/electrique.webp',
          slug: 'e1',
          category: 'electriques',
        },
      ],
    },
  },

  electriques: {
    e1: {
      name: 'Électrique E1',
      category: 'Électriques',

      price: 31900,
      monthly: 489,

      description:
        "Pensée pour une mobilité moderne, l'Électrique E1 offre autonomie, silence de conduite et accélérations instantanées. Une expérience premium sans compromis.",

      gallery: [
        '/assets/vehicles/electrique.webp',
        '/assets/vehicles/electrique-2.webp',
        '/assets/vehicles/electrique-3.webp',
      ],

      specs: [
        ['Motorisation', '100% électrique'],
        ['Autonomie', '540 km'],
        ['Recharge rapide', '28 min'],
        ['0 à 100', '4.9 sec'],
        ['Vitesse max', '230 km/h'],
        ['Puissance', '420ch'],
      ],

      similar: [
        {
          name: 'Hybride H3',
          price: 29400,
          image: '/assets/vehicles/hybride.webp',
          slug: 'h3',
          category: 'hybrides',
        },
      ],
    },
  },

  hybrides: {
    h3: {
      name: 'Hybride H3',
      category: 'Hybrides',

      price: 29400,
      monthly: 459,

      description:
        "Le Hybride H3 combine moteur thermique et assistance électrique pour une conduite économique, souple et parfaitement adaptée au quotidien.",

      gallery: [
        '/assets/vehicles/hybride.webp',
        '/assets/vehicles/hybride-2.webp',
        '/assets/vehicles/hybride-3.webp',
      ],

      specs: [
        ['Motorisation', 'Hybride 220ch'],
        ['Transmission', 'Automatique'],
        ['Consommation', '4.4L / 100km'],
        ['0 à 100', '6.8 sec'],
        ['Vitesse max', '215 km/h'],
        ['Coffre', '520L'],
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
};

interface PageProps {
  params: Promise<{
    categorie: string;
    modele: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { categorie, modele } = await params;

  const category =
    MODELS[categorie as keyof typeof MODELS];

  if (!category) {
    notFound();
  }

  const data =
    category[
      modele as keyof typeof category
    ];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-black">
      <VehicleView data={data} />
    </main>
  );
}