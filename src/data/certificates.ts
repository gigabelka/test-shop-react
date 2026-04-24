import type { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    id: 'c1',
    title: { ru: 'ГОСТ 31457-2012', en: 'GOST 31457-2012' },
    image: 'https://picsum.photos/seed/cert1/600/800',
    year: 2023,
  },
  {
    id: 'c2',
    title: { ru: 'ISO 22000: Безопасность пищевых продуктов', en: 'ISO 22000: Food Safety' },
    image: 'https://picsum.photos/seed/cert2/600/800',
    year: 2024,
  },
  {
    id: 'c3',
    title: { ru: 'HACCP сертификация', en: 'HACCP Certification' },
    image: 'https://picsum.photos/seed/cert3/600/800',
    year: 2024,
  },
  {
    id: 'c4',
    title: { ru: 'Органик Россия', en: 'Organic Russia' },
    image: 'https://picsum.photos/seed/cert4/600/800',
    year: 2025,
  },
  {
    id: 'c5',
    title: { ru: 'Халяль', en: 'Halal' },
    image: 'https://picsum.photos/seed/cert5/600/800',
    year: 2024,
  },
  {
    id: 'c6',
    title: { ru: 'Кошерное производство', en: 'Kosher Production' },
    image: 'https://picsum.photos/seed/cert6/600/800',
    year: 2025,
  },
];
