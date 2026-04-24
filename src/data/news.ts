import type { NewsItem } from '../types';

export const news: NewsItem[] = [
  {
    id: 'n1',
    date: '2026-04-20',
    title: { ru: 'Новая коллекция «Тропики»', en: 'New "Tropics" collection' },
    body: {
      ru: 'Встречайте три новых вкуса: манго-маракуйя, кокос-ананас и гуава-лайм. Только из натуральных фруктов.',
      en: 'Meet three new flavors: mango-passionfruit, coconut-pineapple, and guava-lime. Only natural fruits.',
    },
    image: 'https://picsum.photos/seed/news1/800/400',
  },
  {
    id: 'n2',
    date: '2026-04-12',
    title: { ru: 'Открытие нового кафе в центре', en: 'New café in the city center' },
    body: {
      ru: 'Наше третье кафе уже принимает гостей. Первая неделя — скидка 20% по промокоду WELCOME.',
      en: 'Our third café is open. First week — 20% off with promo code WELCOME.',
    },
    image: 'https://picsum.photos/seed/news2/800/400',
  },
  {
    id: 'n3',
    date: '2026-03-28',
    title: { ru: 'Веган-линейка без сахара', en: 'Vegan sugar-free line' },
    body: {
      ru: 'Запустили линейку на растительном молоке без добавленного сахара. Идеально подходит для ЗОЖ.',
      en: 'We launched a plant-milk line with no added sugar. Perfect for a healthy lifestyle.',
    },
    image: 'https://picsum.photos/seed/news3/800/400',
  },
  {
    id: 'n4',
    date: '2026-03-10',
    title: { ru: 'Победа на фестивале мороженого', en: 'Ice cream festival winner' },
    body: {
      ru: 'Наш «Фисташковый» взял Гран-при на международном фестивале в Милане.',
      en: 'Our "Pistachio" took the Grand Prix at the international festival in Milan.',
    },
    image: 'https://picsum.photos/seed/news4/800/400',
  },
  {
    id: 'n5',
    date: '2026-02-15',
    title: { ru: 'Запуск программы лояльности', en: 'Loyalty program launched' },
    body: {
      ru: 'Копите бонусы с каждой покупки и повышайте уровень: Bronze → Silver → Gold.',
      en: 'Earn bonuses with every purchase and level up: Bronze → Silver → Gold.',
    },
    image: 'https://picsum.photos/seed/news5/800/400',
  },
];
