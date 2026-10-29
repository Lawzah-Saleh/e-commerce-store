
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import CartPage from './pages/CartPage/CartPage';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { WishlistProvider } from './features/wishlist/context/WishlistContext';
import { WishlistPage } from './pages/WishlistPage/WishlistPage';
import { CategoriesPage } from './pages/Categories/CategoriesPage';
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
    <WishlistProvider>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:slug"  element={<ProductDetails />}/>
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </WishlistProvider>
  );
}
export default App;