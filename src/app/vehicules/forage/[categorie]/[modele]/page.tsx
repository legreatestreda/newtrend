import { notFound } from 'next/navigation';
import VehicleView from './VehicleView';

const MODELS = {
  rotatives: {
    'dr-900': {
      name: 'DR-900 Rotary',
      category: 'hydroliques',
      price: 189000,
      monthly: 2990,
      description:
        "La DR-900 est une foreuse rotative haute performance conçue pour les forages profonds en terrain rocheux. Robustesse extrême, couple élevé et système de forage assisté par air comprimé.",
      gallery: [
        '/assets/forage/dr-900-1.webp',
        '/assets/forage/dr-900-2.webp',
        '/assets/forage/dr-900-3.webp',
      ],
      specs: [
        ['Motorisation', 'Diesel 6.7L 350ch'],
        ['Profondeur max', '120 m'],
        ['Diamètre forage', '90 à 300 mm'],
        ['Couple max', '12 000 Nm'],
        ['Poids', '18 500 kg'],
        ['Usage', 'Géotechnique / mines'],
      ],
      similar: [
        {
          name: 'DR-600 Compact',
          price: 124000,
          image: '/assets/forage/dr-600.webp',
          slug: 'dr-600',
          category: 'rotatives',
        },
      ],
    },
    'dr-600': {
      name: 'DR-600 Compact',
      category: 'Foreuses rotatives',
      price: 124000,
      monthly: 1990,
      description:
        "La DR-600 offre les performances d'une foreuse rotative dans un format compact, idéale pour les chantiers à accès restreint et les forages de moyenne profondeur.",
      gallery: ['/assets/forage/dr-600.webp'],
      specs: [
        ['Motorisation', 'Diesel 4.5L 220ch'],
        ['Profondeur max', '60 m'],
        ['Diamètre forage', '76 à 200 mm'],
        ['Couple max', '7 500 Nm'],
        ['Poids', '11 200 kg'],
        ['Usage', 'Chantiers urbains'],
      ],
      similar: [
        {
          name: 'DR-900 Rotary',
          price: 189000,
          image: '/assets/forage/dr-900-1.webp',
          slug: 'dr-900',
          category: 'rotatives',
        },
      ],
    },
  },

  percussives: {
    'dp-440': {
      name: 'DP-440 Impact',
      category: 'Foreuses percussives',
      price: 97000,
      monthly: 1590,
      description:
        "La DP-440 est taillée pour le forage percussif en roche dure.",
      gallery: ['/assets/forage/dp-440.webp'],
      specs: [
        ['Motorisation', 'Diesel 3.8L 180ch'],
        ['Profondeur max', '40 m'],
        ['Diamètre forage', '64 à 140 mm'],
        ['Fréquence impact', '2200 coups/min'],
        ['Poids', '8 700 kg'],
        ['Usage', 'Carrières / puits'],
      ],
      similar: [
        {
          name: 'DR-600 Compact',
          price: 124000,
          image: '/assets/forage/dr-600.webp',
          slug: 'dr-600',
          category: 'rotatives',
        },
      ],
    },
  },

  horizontaux: {
    'dh-750': {
      name: 'DH-750 HDD',
      category: 'Forage horizontal dirigé',
      price: 215000,
      monthly: 3390,
      description:
        "Le DH-750 est conçu pour les réseaux souterrains sans tranchée.",
      gallery: [
        '/assets/forage/dh-750-1.webp',
        '/assets/forage/dh-750-2.webp',
      ],
      specs: [
        ['Motorisation', 'Diesel 7.2L 420ch'],
        ['Force de poussée', '75 tonnes'],
        ['Force de traction', '75 tonnes'],
        ['Couple de rotation', '18 000 Nm'],
        ['Longueur max', '500 m'],
        ['Usage', 'Réseaux souterrains'],
      ],
      similar: [
        {
          name: 'DR-900 Rotary',
          price: 189000,
          image: '/assets/forage/dr-900-1.webp',
          slug: 'dr-900',
          category: 'rotatives',
        },
      ],
    },
  },

  micropieux: {
    'mp-280': {
      name: 'MP-280 Piling',
      category: 'Machines à micropieux',
      price: 78000,
      monthly: 1290,
      description:
        "Spécialisée dans les fondations en espace confiné.",
      gallery: ['/assets/forage/mp-280.webp'],
      specs: [
        ['Motorisation', 'Diesel 2.9L 140ch'],
        ['Profondeur max', '25 m'],
        ['Diamètre micropieu', '88 à 200 mm'],
        ['Pression injection', '400 bar'],
        ['Poids', '5 400 kg'],
        ['Usage', 'Fondations / rénovation'],
      ],
      similar: [
        {
          name: 'DP-440 Impact',
          price: 97000,
          image: '/assets/forage/dp-440.webp',
          slug: 'dp-440',
          category: 'percussives',
        },
      ],
    },
  },
} as const;

/**
 * SAFE LOOKUP (pas de cast sauvage)
 */
function getVehicle(categorie: string, modele: string) {
  const category = MODELS[categorie as keyof typeof MODELS];
  if (!category) return null;

  const vehicle = category[modele as keyof typeof category];
  if (!vehicle) return null;

  return vehicle;
}

interface PageProps {
  params: Promise<{
    categorie: string;
    modele: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { categorie, modele } = await params;

  const data = getVehicle(categorie, modele);

  if (!data) return notFound();

  return <VehicleView data={data} />;
}