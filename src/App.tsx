import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';

function ProductsPage() {
  return (
    <div style={{ padding: '64px 16px' }}>
      <h1>Products</h1>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div style={{ padding: '64px 16px' }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;