import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./assets/scss/global.scss";
import AppHeader from './cmps/AppHeader';
import Home from './pages/Home';
import Integration from './pages/Integration';
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;

// https://source.unsplash.com/random?wallpapers