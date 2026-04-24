import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';

export function Layout() {
  return (
    <div className="app">
      <TopBar />
      <main className="app-main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
