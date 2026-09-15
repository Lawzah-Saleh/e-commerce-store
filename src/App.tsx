import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

function App() {
  return (
    <BrowserRouter>
    <Navbar storeName="Nexora" /> 
      <Routes>
        <Route element={<MainLayout />}/>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App