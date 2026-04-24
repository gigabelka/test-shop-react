import type { Lang, LocalizedText } from '../types';

export const dict: Record<string, LocalizedText> = {
  // Brand
  'brand.name': { ru: 'SnowdropSHOP', en: 'SnowdropSHOP' },
  'brand.tagline': { ru: 'Холодные вкусы круглый год', en: 'Cold treats all year round' },

  // Nav
  'nav.catalog': { ru: 'Каталог', en: 'Catalog' },
  'nav.referral': { ru: 'Друзья', en: 'Friends' },
  'nav.news': { ru: 'Новости', en: 'News' },
  'nav.certificates': { ru: 'Сертификаты', en: 'Certificates' },
  'nav.about': { ru: 'О нас', en: 'About' },
  'nav.contacts': { ru: 'Контакты', en: 'Contacts' },
  'nav.cart': { ru: 'Корзина', en: 'Cart' },
  'nav.account': { ru: 'Профиль', en: 'Profile' },
  'nav.reviews': { ru: 'Отзывы', en: 'Reviews' },

  // Catalog
  'catalog.title': { ru: 'ВИТРИНА', en: 'SHOWCASE' },
  'catalog.subtitle': {
    ru: '20 сортов крафтового мороженого',
    en: '20 flavors of craft ice cream',
  },
  'catalog.all': { ru: 'Все', en: 'All' },
  'catalog.add': { ru: '+ Добавить', en: '+ Add' },
  'catalog.added': { ru: '✓ В корзине', en: '✓ In cart' },
  'catalog.empty': { ru: 'В этой категории пока пусто', en: 'Nothing here yet' },

  // Sort
  'sort.default': { ru: 'По умолчанию', en: 'Default' },
  'sort.priceAsc': { ru: 'Цена ↑', en: 'Price ↑' },
  'sort.priceDesc': { ru: 'Цена ↓', en: 'Price ↓' },
  'sort.az': { ru: 'A-Z', en: 'A-Z' },
  'sort.premium': { ru: 'Премиум', en: 'Premium' },

  // Contacts
  'contacts.title': { ru: 'КОНТАКТЫ', en: 'CONTACTS' },
  'contacts.subtitle': { ru: 'Мы ждём вас в наших кафе', en: 'Visit us at our cafés' },
  'contacts.address': { ru: 'Адрес', en: 'Address' },
  'contacts.addressValue': {
    ru: 'Москва, ул. Тверская, 15',
    en: 'Moscow, Tverskaya st. 15',
  },
  'contacts.phone': { ru: 'Телефон', en: 'Phone' },
  'contacts.email': { ru: 'Email', en: 'Email' },
  'contacts.hours': { ru: 'Часы работы', en: 'Working hours' },
  'contacts.hoursValue': { ru: 'Ежедневно 10:00–22:00', en: 'Daily 10:00–22:00' },

  // Certificates
  'cert.title': { ru: 'СЕРТИФИКАТЫ', en: 'CERTIFICATES' },
  'cert.subtitle': {
    ru: 'Качество подтверждено документами',
    en: 'Quality confirmed by documents',
  },
  'cert.year': { ru: 'Год', en: 'Year' },

  // News
  'news.title': { ru: 'НОВОСТИ', en: 'NEWS' },
  'news.subtitle': { ru: 'Что нового в мире SnowdropSHOP', en: "What's new at SnowdropSHOP" },

  // Referral
  'ref.title': { ru: 'ПРИГЛАСИ ДРУГА', en: 'INVITE A FRIEND' },
  'ref.subtitle': {
    ru: 'Дари скидку 15% и получай бонусы',
    en: 'Give 15% off and earn bonuses',
  },
  'ref.yourCode': { ru: 'Твой код', en: 'Your code' },
  'ref.yourLink': { ru: 'Твоя ссылка', en: 'Your link' },
  'ref.copy': { ru: 'Скопировать', en: 'Copy' },
  'ref.copied': { ru: '✓ Скопировано', en: '✓ Copied' },
  'ref.share': { ru: 'Поделиться', en: 'Share' },
  'ref.invited': { ru: 'друзей приглашено', en: 'friends invited' },
  'ref.howItWorks': { ru: 'Как это работает', en: 'How it works' },
  'ref.step1': {
    ru: 'Поделись ссылкой с другом',
    en: 'Share the link with a friend',
  },
  'ref.step2': {
    ru: 'Друг делает первый заказ со скидкой 15%',
    en: 'Friend places the first order with 15% off',
  },
  'ref.step3': {
    ru: 'Ты получаешь 300 бонусов на счёт',
    en: 'You get 300 bonuses on your account',
  },

  // Account
  'acc.title': { ru: 'ЛИЧНЫЙ КАБИНЕТ', en: 'MY ACCOUNT' },
  'acc.subtitle': { ru: 'Профиль и история заказов', en: 'Profile and order history' },
  'acc.tier.bronze': { ru: 'Bronze', en: 'Bronze' },
  'acc.tier.silver': { ru: 'Silver', en: 'Silver' },
  'acc.tier.gold': { ru: 'Gold', en: 'Gold' },
  'acc.points': { ru: 'Бонусов на счету', en: 'Bonuses' },
  'acc.orders': { ru: 'История заказов', en: 'Order history' },
  'acc.order': { ru: 'Заказ', en: 'Order' },
  'acc.total': { ru: 'Итого', en: 'Total' },
  'acc.tierProgress': {
    ru: 'до следующего уровня',
    en: 'to next tier',
  },

  // About
  'about.title': { ru: 'О НАС', en: 'ABOUT US' },
  'about.subtitle': {
    ru: 'История, ценности, команда',
    en: 'Story, values, team',
  },
  'about.story.title': { ru: 'Наша история', en: 'Our story' },
  'about.story.body': {
    ru: 'SnowdropSHOP родился в 2015 году как семейная мастерская в центре Москвы. Мы варим мороженое по итальянским рецептам с отечественными фермерскими сливками. Сегодня у нас 3 кафе и собственное производство.',
    en: 'SnowdropSHOP started in 2015 as a family workshop in central Moscow. We craft ice cream following Italian recipes with local farm cream. Today we have 3 cafés and our own production.',
  },
  'about.values.title': { ru: 'Ценности', en: 'Values' },
  'about.values.body': {
    ru: 'Только натуральные ингредиенты. Никаких пальмовых масел и искусственных ароматизаторов. Прозрачное производство и честная цена.',
    en: 'Only natural ingredients. No palm oil, no artificial flavors. Transparent production and fair price.',
  },
  'about.team.title': { ru: 'Команда', en: 'Team' },
  'about.team.body': {
    ru: '12 человек, которые каждый день варят, тестируют и радуют гостей. Шеф Марко — выпускник Carpigiani Gelato University в Болонье.',
    en: '12 people who craft, test, and delight guests every day. Chef Marco is a graduate of Carpigiani Gelato University in Bologna.',
  },

  // Cart
  'cart.title': { ru: 'КОРЗИНА', en: 'CART' },
  'cart.empty': { ru: 'Корзина пуста', en: 'Cart is empty' },
  'cart.total': { ru: 'Итого', en: 'Total' },
  'cart.checkout': { ru: 'Оформить', en: 'Checkout' },
  'cart.clear': { ru: 'Очистить', en: 'Clear' },
  'cart.remove': { ru: 'Удалить', en: 'Remove' },
  'cart.qty': { ru: 'Кол-во', en: 'Qty' },

  // Reviews
  'rev.title': { ru: 'ОТЗЫВЫ', en: 'REVIEWS' },
  'rev.subtitle': { ru: 'Что говорят наши гости', en: 'What our guests say' },
  'rev.average': { ru: 'Средняя оценка', en: 'Average rating' },
  'rev.count': { ru: 'отзывов', en: 'reviews' },
  'rev.about': { ru: 'о товаре', en: 'about' },
  'rev.leave': { ru: 'Оставить отзыв', en: 'Leave a review' },
  'rev.empty': { ru: 'Пока нет отзывов в этой категории', en: 'No reviews in this filter yet' },
  'rev.filterAll': { ru: 'Все', en: 'All' },

  // Common
  'common.currency': { ru: '₽', en: '₽' },
};

export const pickLocale = (text: LocalizedText, lang: Lang): string => text[lang];
