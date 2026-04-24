import type { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'Анна К.',
    rating: 5,
    date: '2026-04-18',
    productId: 'p08',
    text: {
      ru: 'Tiramisu Gold — это что-то невероятное! Настоящий вкус итальянского десерта, маскарпоне тает во рту. Обязательно вернусь ещё.',
      en: 'Tiramisu Gold is incredible! A real taste of Italian dessert, the mascarpone melts in your mouth. I will definitely come back.',
    },
  },
  {
    id: 'r2',
    author: 'Dmitry P.',
    rating: 5,
    date: '2026-04-12',
    productId: 'p04',
    text: {
      ru: 'Фисташковое — лучшее, что я пробовал в Москве. Видно, что натуральная фисташка, а не ароматизатор.',
      en: 'Pistachio is the best I have tried in Moscow. You can tell it is real pistachio, not artificial flavor.',
    },
  },
  {
    id: 'r3',
    author: 'Мария С.',
    rating: 4,
    date: '2026-04-05',
    productId: 'p13',
    text: {
      ru: 'Дочке очень понравилось мороженое «Единорог» — радужное, красивое. Сама бы ела, но сладковато для меня.',
      en: 'My daughter loved the "Unicorn" ice cream — rainbow and beautiful. I would eat it too, but it is a bit sweet for me.',
    },
  },
  {
    id: 'r4',
    author: 'Игорь В.',
    rating: 5,
    date: '2026-03-28',
    text: {
      ru: 'Заказывал торт-мороженое «Тропики» на день рождения — гости были в восторге. Доставили вовремя, упаковка достойная.',
      en: 'Ordered the Tropics ice-cream cake for a birthday — guests were thrilled. Delivered on time, great packaging.',
    },
  },
  {
    id: 'r5',
    author: 'Elena M.',
    rating: 5,
    date: '2026-03-20',
    productId: 'p11',
    text: {
      ru: 'Веганское кокосовое — находка! Не отличить по текстуре от сливочного. Наконец-то нашла что-то без молока.',
      en: 'Coconut vegan is a find! Texture is indistinguishable from dairy. Finally something without milk.',
    },
  },
  {
    id: 'r6',
    author: 'Сергей К.',
    rating: 4,
    date: '2026-03-10',
    productId: 'p09',
    text: {
      ru: 'Солёная карамель — вкусно, но маловата порция за такую цену. В остальном претензий нет.',
      en: 'Salted caramel is tasty, but the portion is small for the price. Otherwise no complaints.',
    },
  },
  {
    id: 'r7',
    author: 'Olga T.',
    rating: 5,
    date: '2026-02-28',
    text: {
      ru: 'Кафе на Тверской — уютная атмосфера, приветливый персонал. Приходим всей семьёй каждые выходные.',
      en: 'The café on Tverskaya has a cosy atmosphere and friendly staff. We come as a family every weekend.',
    },
  },
  {
    id: 'r8',
    author: 'Павел Н.',
    rating: 3,
    date: '2026-02-15',
    productId: 'p20',
    text: {
      ru: 'Мятный шок ожидал более насыщенного мятного вкуса. Мороженое качественное, но не зацепило.',
      en: 'Expected a more intense mint flavor from Mint Choc. The ice cream is quality but did not impress me.',
    },
  },
];
