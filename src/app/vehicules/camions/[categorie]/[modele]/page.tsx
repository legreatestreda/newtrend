import { notFound } from 'next/navigation';
import VehicleView from './VehicleView';

const MODELS = {
  bennes: {
    'x1': {
      name: 'Benne X1',
      category: 'Bennes',
      price: 38900,
      monthly: 599,

      description:
        "Le camion benne X1 est conçu pour les chantiers exigeants avec une robustesse maximale.",

      gallery: [
        '/assets/vehicles/truck-benne.webp',
        '/assets/vehicles/truck-benne-2.webp',
        '/assets/vehicles/truck-benne-3.webp',
      ],

      specs: [
        ['Motorisation', '3.0L Diesel 240ch'],
        ['Transmission', 'Manuelle renforcée'],
        ['Charge utile', '3.5 tonnes'],
        ['PTAC', '7.5 tonnes'],
        ['Volume benne', '5.2 m³'],
        ['Usage', 'Travaux publics'],
      ],

      similar: [
        {
          name: 'Frigo Pro',
          price: 45900,
          image: '/assets/vehicles/truck-frigo.webp',
          slug: 'pro',
          category: 'frigorifiques',
        },
      ],
    },
  },

  frigorifiques: {
    pro: {
      name: 'Frigo Pro',
      category: 'Frigorifiques',
      price: 45900,
      monthly: 699,

      description:
        "Le Frigo Pro assure une chaîne du froid parfaite pour le transport longue distance.",

      gallery: [
        '/assets/vehicles/truck-frigo.webp',
      ],

      specs: [
        ['Motorisation', '2.8L Diesel 200ch'],
        ['Transmission', 'Automatique'],
        ['Température', '-20°C à +10°C'],
        ['Autonomie', '1200 km'],
        ['Volume', '18 m³'],
        ['Isolation', 'Haute performance'],
      ],

      similar: [
        {
          name: 'Plateau Max',
          price: 41900,
          image: '/assets/vehicles/truck-plateau.webp',
          slug: 'max',
          category: 'plateaux',
        },
      ],
    },
  },

  plateaux: {
    max: {
      name: 'Plateau Max',
      category: 'Plateaux',
      price: 41900,
      monthly: 649,

      description:
        "Plateau Max est idéal pour le transport de charges volumineuses et lourdes.",

      gallery: [
        '/assets/vehicles/truck-plateau.webp',
      ],

      specs: [
        ['Motorisation', '3.0L Diesel 220ch'],
        ['Transmission', 'Manuelle'],
        ['Charge utile', '4 tonnes'],
        ['Longueur plateau', '6.5 m'],
        ['Suspension', 'Renforcée'],
        ['Usage', 'Logistique lourde'],
      ],

      similar: [
        {
          name: 'Tracteur TX7',
          price: 72900,
          image: '/assets/vehicles/truck-tractor.webp',
          slug: 'tx7',
          category: 'tracteurs',
        },
      ],
    },
  },

  tracteurs: {
    tx7: {
      name: 'Tracteur TX7',
      category: 'Tracteurs',
      price: 72900,
      monthly: 999,

      description:
        "Le TX7 est un tracteur routier conçu pour les longues distances et charges extrêmes.",

      gallery: [
        '/assets/vehicles/truck-tractor.webp',
      ],

      specs: [
        ['Motorisation', '6.0L Diesel 480ch'],
        ['Transmission', 'Automatique'],
        ['Couple', '2500 Nm'],
        ['Essieux', '4x2'],
        ['Réservoir', '1200L'],
        ['Usage', 'Longue distance'],
      ],

      similar: [
        {
          name: 'Utilitaire HD9',
          price: 34900,
          image: '/assets/vehicles/truck-utilitaire.webp',
          slug: 'hd9',
          category: 'utilitaires',
        },
      ],
    },
  },

  utilitaires: {
    hd9: {
      name: 'Utilitaire HD9',
      category: 'Utilitaires lourds',
      price: 34900,
      monthly: 549,

      description:
        "HD9 est un utilitaire robuste adapté aux livraisons intensives et urbaines.",

      gallery: [
        '/assets/vehicles/truck-utilitaire.webp',
      ],

      specs: [
        ['Motorisation', '2.5L Diesel 180ch'],
        ['Transmission', 'Manuelle'],
        ['Charge utile', '2 tonnes'],
        ['Volume', '12 m³'],
        ['Consommation', '7.5L / 100km'],
        ['Usage', 'Livraison'],
      ],

      similar: [
        {
          name: 'Benne X1',
          price: 38900,
          image: '/assets/vehicles/truck-benne.webp',
          slug: 'x1',
          category: 'bennes',
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

export default async function Page({ params }: PageProps) {
  const { categorie, modele } = await params;

  const data =
    MODELS[categorie as keyof typeof MODELS]?.[
      modele as keyof (typeof MODELS)[keyof typeof MODELS]
    ];

  if (!data) {
    notFound();
  }

  return <VehicleView data={data} />;
}