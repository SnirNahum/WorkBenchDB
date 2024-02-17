import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./assets/scss/global.scss";
import AppHeader from './cmps/AppHeader';
import Home from './pages/Home';
import Integration from './pages/Integration';
import Products from "./pages/Products";
import AddEditProduct from "./pages/AddEditProduct";


function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/edit/:id?" element={<AddEditProduct />} />
          <Route path="/integration" element={<Integration />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
