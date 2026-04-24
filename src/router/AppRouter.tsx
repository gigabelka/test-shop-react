import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CatalogPage } from '../pages/CatalogPage';
import { ContactsPage } from '../pages/ContactsPage';
import { CertificatesPage } from '../pages/CertificatesPage';
import { NewsPage } from '../pages/NewsPage';
import { ReferralPage } from '../pages/ReferralPage';
import { AccountPage } from '../pages/AccountPage';
import { AboutPage } from '../pages/AboutPage';
import { CartPage } from '../pages/CartPage';
import { ReviewsPage } from '../pages/ReviewsPage';

export function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="referral" element={<ReferralPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
