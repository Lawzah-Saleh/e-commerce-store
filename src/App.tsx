
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import CartPage from './pages/CartPage/CartPage';



function NotFoundPage() {
  return (
    <main style={{ padding: '64px 16px' }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
