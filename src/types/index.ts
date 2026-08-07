export type IconName =
  | 'leaf'
  | 'cup'
  | 'shield-check'
  | 'badge-check'
  | 'truck'
  | 'lock'
  | 'flask'
  | 'snowflake'
  | 'arrow-right'
  | 'search'
  | 'user'
  | 'cart'
  | 'star'
  | 'heart'
  | 'menu'
  | 'close';

export type ProductArtId = 'flowers' | 'oil' | 'capsules' | 'tea';

/** Иконка + одна строка текста (ряд преимуществ в герое). */
export interface HeroFeature {
  icon: IconName;
  label: string;
}

/** Иконка + заголовок + описание (карточки преимуществ, «почему», траст-бар). */
export interface FeatureItem {
  icon: IconName;
  title: string;
  text?: string;
}

/** Категория продукции на главной. */
export interface ProductCategory {
  id: string;
  art: ProductArtId;
  title: string;
  description: string;
}
