import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import './MainLayout.css';

export function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />

      <main className="main-layout__content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}