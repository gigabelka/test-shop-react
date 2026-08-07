import type { IconName } from '../components/ui/Icon';
import productFlowers from '../assets/product-flowers.png';
import productOil from '../assets/product-oil.png';
import productCapsules from '../assets/product-capsules.png';
import productTea from '../assets/product-tea.png';
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';

export const NAV_LINKS = [
  { label: 'Каталог', href: '#/catalog' },
  { label: 'О нас', href: '#/about' },
  { label: 'Доставка и оплата', href: '#/delivery' },
  { label: 'Отзывы', href: '#/reviews' },
  { label: 'Контакты', href: '#/contacts' },
] as const;

export interface Feature {
  icon: IconName;
  lines: [string, string];
}

export const HERO_FEATURES: Feature[] = [
  { icon: 'leaf', lines: ['100%', 'натуральный CBD'] },
  { icon: 'flask', lines: ['Без ГМО', 'и химии'] },
  { icon: 'shield', lines: ['Проверенное', 'качество'] },
  { icon: 'cup', lines: ['Идеально', 'для чая'] },
];

export const STRIP_FEATURES: Feature[] = [
  { icon: 'leaf', lines: ['Натуральные', 'соцветия'] },
  { icon: 'cup', lines: ['Идеально', 'для чая'] },
  { icon: 'truck', lines: ['Быстрая и', 'надёжная доставка'] },
  { icon: 'lock', lines: ['Конфиденциальность', 'и забота'] },
];

export const BOTTOM_FEATURES: Feature[] = [
  { icon: 'leaf', lines: ['100%', 'натуральный CBD'] },
  { icon: 'flask', lines: ['Без ГМО', 'и химии'] },
  { icon: 'medal', lines: ['Проверенное', 'качество'] },
  { icon: 'cup', lines: ['Идеально', 'для чая'] },
  { icon: 'truck', lines: ['Быстрая', 'доставка'] },
  { icon: 'lock', lines: ['Конфиденциальность', 'и забота'] },
];

export interface Product {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const PRODUCTS: Product[] = [
  {
    title: 'Цветы CBD',
    description: 'Отборные соцветия высшего качества',
    image: productFlowers,
    href: '#/catalog/flowers',
  },
  {
    title: 'Масла CBD',
    description: 'Натуральные масла для баланса',
    image: productOil,
    href: '#/catalog/oils',
  },
  {
    title: 'Капсулы CBD',
    description: 'Удобство и точная дозировка',
    image: productCapsules,
    href: '#/catalog/capsules',
  },
  {
    title: 'Чай CBD',
    description: 'Вкусный чай для релаксации',
    image: productTea,
    href: '#/catalog/tea',
  },
];

export interface Reason {
  icon: IconName;
  title: string;
  text: string;
}

export const REASONS: Reason[] = [
  {
    icon: 'medal',
    title: 'Премиальное качество',
    text: 'Только проверенные сорта и лабораторный контроль',
  },
  {
    icon: 'leaf',
    title: '100% натурально',
    text: 'Без добавок, ГМО и вредных веществ',
  },
  {
    icon: 'heart',
    title: 'Для твоего баланса',
    text: 'Помогает расслабиться и справляться со стрессом',
  },
  {
    icon: 'shield',
    title: 'Сделано с заботой',
    text: 'Мы ценим каждого клиента и его доверие',
  },
];

export const AVATARS = [avatar1, avatar2, avatar3, avatar4];
