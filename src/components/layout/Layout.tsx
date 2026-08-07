import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { SiteFooter } from './SiteFooter';

export function Layout() {
  return (
    <div className="app">
      <TopBar />
      <main className="app-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
