import type { FeatureItem, HeroFeature, ProductCategory } from '../types';

export const navLinks = [
  { href: '#/', label: 'Каталог' },
  { href: '#/', label: 'О нас' },
  { href: '#/', label: 'Доставка и оплата' },
  { href: '#/', label: 'Отзывы' },
  { href: '#/', label: 'Контакты' },
];

/** Ряд коротких преимуществ под лидом в герое и в нижнем траст-баре. */
export const heroFeatures: HeroFeature[] = [
  { icon: 'leaf', label: '100% натуральный CBD' },
  { icon: 'flask', label: 'Без ГМО и химии' },
  { icon: 'shield-check', label: 'Проверенное качество' },
  { icon: 'cup', label: 'Идеально для чая' },
];

export const trustItems: HeroFeature[] = [
  ...heroFeatures,
  { icon: 'truck', label: 'Быстрая доставка' },
  { icon: 'lock', label: 'Конфиденциальность и забота' },
];

/** Полоса из четырёх карточек под героем. */
export const advantages: FeatureItem[] = [
  { icon: 'leaf', title: 'Натуральные соцветия' },
  { icon: 'cup', title: 'Идеально для чая' },
  { icon: 'truck', title: 'Быстрая и надёжная доставка' },
  { icon: 'lock', title: 'Конфиденциальность и забота' },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'flowers',
    art: 'flowers',
    title: 'Цветы CBD',
    description: 'Отборные соцветия высшего качества',
  },
  {
    id: 'oil',
    art: 'oil',
    title: 'Масла CBD',
    description: 'Натуральные масла для баланса',
  },
  {
    id: 'capsules',
    art: 'capsules',
    title: 'Капсулы CBD',
    description: 'Удобство и точная дозировка',
  },
  {
    id: 'tea',
    art: 'tea',
    title: 'Чай CBD',
    description: 'Вкусный чай для релаксации',
  },
];

export const whyCards: FeatureItem[] = [
  {
    icon: 'badge-check',
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
    text: 'Помогает расслабиться и справиться со стрессом',
  },
  {
    icon: 'shield-check',
    title: 'Сделано с заботой',
    text: 'Мы ценим каждого клиента и его доверие',
  },
];
