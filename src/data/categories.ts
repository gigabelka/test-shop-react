import type { CategoryId, LocalizedText } from '../types';

export interface CategoryMeta {
  id: CategoryId;
  label: LocalizedText;
  icon: string;
}

export const categories: CategoryMeta[] = [
  { id: 'classic', label: { ru: 'Классика', en: 'Classic' }, icon: '🍦' },
  { id: 'fruit', label: { ru: 'Фруктовое', en: 'Fruit' }, icon: '🍓' },
  { id: 'premium', label: { ru: 'Премиум', en: 'Premium' }, icon: '💎' },
  { id: 'vegan', label: { ru: 'Веган', en: 'Vegan' }, icon: '🌱' },
  { id: 'kids', label: { ru: 'Детское', en: 'Kids' }, icon: '🦄' },
  { id: 'sorbet', label: { ru: 'Сорбет', en: 'Sorbet' }, icon: '🍋' },
  { id: 'cake', label: { ru: 'Торты', en: 'Cakes' }, icon: '🎂' },
  { id: 'seasonal', label: { ru: 'Сезонное', en: 'Seasonal' }, icon: '🍂' },
];

export const getCategory = (id: CategoryId): CategoryMeta | undefined =>
  categories.find((c) => c.id === id);
